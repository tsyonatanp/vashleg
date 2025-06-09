export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  services: Service[];
}

export interface ServiceRequest {
  serviceId: string;
  name: string;
  phone: string;
  address: string;
  description: string;
} 