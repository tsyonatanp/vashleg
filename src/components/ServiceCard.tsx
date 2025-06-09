import React from 'react';
import { motion } from 'framer-motion';
import { Service } from '../types';
import {
  WrenchScrewdriverIcon,
  WrenchIcon,
  BoltIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  SparklesIcon,
  BugAntIcon,
  WindowIcon,
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  CameraIcon,
  ArrowUpIcon,
  PhoneIcon,
  VideoCameraIcon,
  PaintBrushIcon,
  ExclamationTriangleIcon,
  HomeIcon,
  UserIcon,
  BanknotesIcon,
  CalculatorIcon,
  ScaleIcon,
  UserGroupIcon,
  FireIcon
} from '@heroicons/react/24/outline';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

const iconMap: { [key: string]: React.ComponentType<any> } = {
  WrenchScrewdriverIcon,
  WrenchIcon,
  BoltIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  SparklesIcon,
  BugAntIcon,
  WindowIcon,
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  CameraIcon,
  ArrowUpIcon,
  PhoneIcon,
  VideoCameraIcon,
  PaintBrushIcon,
  ExclamationTriangleIcon,
  HomeIcon,
  UserIcon,
  BanknotesIcon,
  CalculatorIcon,
  ScaleIcon,
  UserGroupIcon,
  FireIcon
};

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  const Icon = iconMap[service.icon];

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-right"
    >
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          {Icon && <Icon className="h-6 w-6 text-blue-500" />}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{service.description}</p>
        </div>
      </div>
    </motion.button>
  );
} 