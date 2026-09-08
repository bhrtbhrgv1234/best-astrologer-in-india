import { ServiceDetail } from '../types';
import { astrologyServices } from './services/astrologyServices';
import { relationshipServices } from './services/relationshipServices';
import { careerServices } from './services/careerServices';
import { spiritualServices } from './services/spiritualServices';
import { guidanceServices } from './services/guidanceServices';

export const ALL_SERVICES: ServiceDetail[] = [
  ...astrologyServices,
  ...relationshipServices,
  ...careerServices,
  ...spiritualServices,
  ...guidanceServices
];

export const SERVICES_BY_SLUG: Record<string, ServiceDetail> = ALL_SERVICES.reduce((acc, service) => {
  acc[service.slug] = service;
  return acc;
}, {} as Record<string, ServiceDetail>);

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return SERVICES_BY_SLUG[slug];
}

export function getRelatedServices(slugs: string[]): ServiceDetail[] {
  return slugs
    .map(slug => SERVICES_BY_SLUG[slug])
    .filter((s): s is ServiceDetail => Boolean(s));
}
