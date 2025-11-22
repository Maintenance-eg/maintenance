import { LucideIcon } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

export interface NavItem {
  label: string;
  path: string;
}