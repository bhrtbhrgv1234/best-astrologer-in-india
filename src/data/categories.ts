import { ServiceCategory } from '../types';

export interface CategoryInfo {
  id: ServiceCategory;
  name: string;
  description: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'astrology',
    name: 'Astrology & Kundli',
    description: 'Foundational Vedic horoscope charts, birth planetary positions, dosha evaluations, and planetary calendar calculations.'
  },
  {
    id: 'relationships',
    name: 'Marriage & Relationships',
    description: 'Harmony assessments, Guna Milan, mutual planetary compatibility, and compassionate relational counseling.'
  },
  {
    id: 'career',
    name: 'Career & Wealth',
    description: 'Navigating professional transitions, entrepreneurial timing, financial stability, and life purpose alignments.'
  },
  {
    id: 'spiritual',
    name: 'Spiritual & Remedial',
    description: 'Traditional sattvic pujas, authentic Vedic gemstone evaluations, and harmonious Vastu spatial orientations.'
  },
  {
    id: 'guidance',
    name: 'Personal & Family Guidance',
    description: 'Supportive consultations for children, family harmony, numerological insights, and intuitive tarot inquiries.'
  }
];
