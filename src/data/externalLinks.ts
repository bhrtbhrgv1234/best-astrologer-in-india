export interface ExternalLinkItem {
  name: string;
  url: string;
  description?: string;
  category?: string;
}

export const OFFICIAL_MAIN_LINKS = {
  home: {
    name: 'Official Home Portal',
    url: 'https://astrologerkamal.com/',
    description: 'Main official website of Astrologer Kamal Shastri'
  },
  about: {
    name: 'Official About Page',
    url: 'https://astrologerkamal.com/about',
    description: 'Learn about Astrologer Kamal Shastri on the official site'
  },
  services: {
    name: 'Official Services Directory',
    url: 'https://astrologerkamal.com/services',
    description: 'All 21 Vedic astrology disciplines on the main website'
  },
  reviews: {
    name: 'Official Client Reviews',
    url: 'https://astrologerkamal.com/reviews',
    description: 'Verified client reflections and testimonials'
  },
  contact: {
    name: 'Official Contact & Booking',
    url: 'https://astrologerkamal.com/contact',
    description: 'Direct phone and appointment scheduling'
  }
};

export const EXTERNAL_SERVICE_LINKS: Record<string, string> = {
  'business-problem-solution': 'https://astrologerkamal.com/business-problem-solution',
  'career-problem-solution': 'https://astrologerkamal.com/career-problem-solution',
  'child-astrology': 'https://astrologerkamal.com/child-astrology',
  'dosha-analysis': 'https://astrologerkamal.com/dosha-analysis',
  'family-problem-solution': 'https://astrologerkamal.com/family-problem-solution',
  'financial-astrology': 'https://astrologerkamal.com/financial-astrology',
  'gemstone-consultation': 'https://astrologerkamal.com/gemstone-consultation',
  'kundli-analysis': 'https://astrologerkamal.com/kundli-analysis',
  'kundli-matching': 'https://astrologerkamal.com/kundli-matching',
  'kundli': 'https://astrologerkamal.com/kundli',
  'life-path-guidance': 'https://astrologerkamal.com/life-path-guidance',
  'love-problem-solution': 'https://astrologerkamal.com/love-problem-solution',
  'marriage-problem-solution': 'https://astrologerkamal.com/marriage-problem-solution',
  'matchmaking': 'https://astrologerkamal.com/matchmaking',
  'muhurat-guidance': 'https://astrologerkamal.com/muhurat-guidance',
  'numerology-guidance': 'https://astrologerkamal.com/numerology-guidance',
  'panchang': 'https://astrologerkamal.com/panchang',
  'relationship-guidance': 'https://astrologerkamal.com/relationship-guidance',
  'tarot-guidance': 'https://astrologerkamal.com/tarot-guidance',
  'traditional-puja-remedies': 'https://astrologerkamal.com/traditional-puja-remedies',
  'vastu-guidance': 'https://astrologerkamal.com/vastu-guidance'
};

export function getServiceExternalUrl(slug: string): string {
  return EXTERNAL_SERVICE_LINKS[slug] || `https://astrologerkamal.com/${slug}`;
}

export const EXTERNAL_SITE_LINKS = {
  mainPages: [
    { label: 'Official Home', url: 'https://astrologerkamal.com/' },
    { label: 'About Page', url: 'https://astrologerkamal.com/about' },
    { label: 'Contact & Booking', url: 'https://astrologerkamal.com/contact' },
    { label: 'Client Reviews', url: 'https://astrologerkamal.com/reviews' },
    { label: 'Services Directory', url: 'https://astrologerkamal.com/services' }
  ],
  services: [
    { slug: 'business-problem-solution', title: 'Business Problem Solution', url: 'https://astrologerkamal.com/business-problem-solution' },
    { slug: 'career-problem-solution', title: 'Career Problem Solution', url: 'https://astrologerkamal.com/career-problem-solution' },
    { slug: 'child-astrology', title: 'Child Astrology', url: 'https://astrologerkamal.com/child-astrology' },
    { slug: 'dosha-analysis', title: 'Dosha Analysis', url: 'https://astrologerkamal.com/dosha-analysis' },
    { slug: 'family-problem-solution', title: 'Family Problem Solution', url: 'https://astrologerkamal.com/family-problem-solution' },
    { slug: 'financial-astrology', title: 'Financial Astrology', url: 'https://astrologerkamal.com/financial-astrology' },
    { slug: 'gemstone-consultation', title: 'Gemstone Consultation', url: 'https://astrologerkamal.com/gemstone-consultation' },
    { slug: 'kundli-analysis', title: 'Kundli Analysis', url: 'https://astrologerkamal.com/kundli-analysis' },
    { slug: 'kundli-matching', title: 'Kundli Matching', url: 'https://astrologerkamal.com/kundli-matching' },
    { slug: 'kundli', title: 'Kundli', url: 'https://astrologerkamal.com/kundli' },
    { slug: 'life-path-guidance', title: 'Life Path Guidance', url: 'https://astrologerkamal.com/life-path-guidance' },
    { slug: 'love-problem-solution', title: 'Love Problem Solution', url: 'https://astrologerkamal.com/love-problem-solution' },
    { slug: 'marriage-problem-solution', title: 'Marriage Problem Solution', url: 'https://astrologerkamal.com/marriage-problem-solution' },
    { slug: 'matchmaking', title: 'Matchmaking', url: 'https://astrologerkamal.com/matchmaking' },
    { slug: 'muhurat-guidance', title: 'Muhurat Guidance', url: 'https://astrologerkamal.com/muhurat-guidance' },
    { slug: 'numerology-guidance', title: 'Numerology Guidance', url: 'https://astrologerkamal.com/numerology-guidance' },
    { slug: 'panchang', title: 'Panchang', url: 'https://astrologerkamal.com/panchang' },
    { slug: 'relationship-guidance', title: 'Relationship Guidance', url: 'https://astrologerkamal.com/relationship-guidance' },
    { slug: 'tarot-guidance', title: 'Tarot Guidance', url: 'https://astrologerkamal.com/tarot-guidance' },
    { slug: 'traditional-puja-remedies', title: 'Traditional Puja Remedies', url: 'https://astrologerkamal.com/traditional-puja-remedies' },
    { slug: 'vastu-guidance', title: 'Vastu Guidance', url: 'https://astrologerkamal.com/vastu-guidance' }
  ]
};
