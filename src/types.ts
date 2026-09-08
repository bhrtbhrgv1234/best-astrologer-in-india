export type ServiceCategory = 
  | 'astrology' 
  | 'relationships' 
  | 'career' 
  | 'spiritual' 
  | 'guidance';

export interface ServiceDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  category: ServiceCategory;
  tag: string;
  shortSummary: string;
  heroImage: string;
  secondaryImage: string;
  problemContext: {
    heading: string;
    paragraphs: string[];
    bulletPoints: string[];
  };
  vedicInsight: {
    heading: string;
    description: string;
    planetaryFactors: { name: string; significance: string }[];
  };
  consultationApproach: {
    heading: string;
    paragraphs: string[];
    steps: { title: string; desc: string }[];
  };
  whoCanBenefit: string[];
  whatItCovers: { title: string; desc: string }[];
  relatedServices: string[]; // slugs
  faqs: { question: string; answer: string }[];
}

export interface ReviewItem {
  id: string;
  initials: string;
  name: string;
  location: string;
  serviceReceived: string;
  date: string;
  feedback: string;
  highlights: string[];
}
