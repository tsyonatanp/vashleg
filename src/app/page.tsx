'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import ServiceRequestForm from '../components/ServiceRequestForm';
import { categories } from '../data/services';
import { translations } from '../i18n/translations';
import { sendToTelegram } from '../services/telegram';
import { Service } from '../types';

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState('he');

  const t = translations['he'];

  const handleSubmit = async (formData: any) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await sendToTelegram({
        serviceId: selectedService?.id || '',
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        description: formData.description
      });
      setSelectedService(null);
    } catch (err) {
      setError(t.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900"
            >
              {t.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-lg text-gray-600"
            >
              {t.subtitle}
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h2>
              <div className="space-y-4">
                {category.services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    onClick={() => setSelectedService(service)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedService && (
            <ServiceRequestForm
              service={selectedService}
              onClose={() => setSelectedService(null)}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              error={error}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 