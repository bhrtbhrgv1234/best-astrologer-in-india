export const SITE_URL = 'https://best-astrologer-in-india.netlify.app';
export const SITE_NAME = 'Best Astrologer in India | Astrologer Kamal Shastri';
export const DEFAULT_OG_IMAGE = 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80';
export const PRIMARY_PHONE = '+919887952163';
export const DISPLAY_PHONE = '+91 9887952163';

/**
 * Normalizes any route path to full canonical URL based on the hosted domain.
 * Examples:
 *   '' -> 'https://best-astrologer-in-india.netlify.app/'
 *   '/' -> 'https://best-astrologer-in-india.netlify.app/'
 *   '/about' -> 'https://best-astrologer-in-india.netlify.app/about'
 *   'about/' -> 'https://best-astrologer-in-india.netlify.app/about'
 *   'kundli-analysis' -> 'https://best-astrologer-in-india.netlify.app/kundli-analysis'
 */
export function getCanonicalUrl(path?: string): string {
  if (!path) {
    return `${SITE_URL}/`;
  }

  // Clean slashes and index.html
  const clean = path.trim().replace(/^\/+|\/+$/g, '');

  if (clean === '' || clean === 'index.html') {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}/${clean}`;
}

/**
 * Builds Schema.org BreadcrumbList for rich snippet enhancement in Google SERPs
 */
export function buildBreadcrumbSchema(items: { label: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: getCanonicalUrl(item.url)
      }))
    ]
  };
}

/**
 * Builds Schema.org Organization / ProfessionalService for Astrologer Kamal Shastri
 */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#organization`,
    name: 'Astrologer Kamal Shastri',
    alternateName: 'Best Astrologer in India - Astrologer Kamal Shastri',
    url: `${SITE_URL}/`,
    logo: DEFAULT_OG_IMAGE,
    image: DEFAULT_OG_IMAGE,
    telephone: PRIMARY_PHONE,
    priceRange: '$$',
    currenciesAccepted: 'INR, USD',
    paymentAccepted: 'UPI, Net Banking, Credit Card, Cash',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Delhi NCR',
      addressLocality: 'New Delhi'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '28.6139',
      longitude: '77.2090'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '09:00',
        closes: '21:00'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '385',
      bestRating: '5',
      worstRating: '1'
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'India'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Worldwide'
      }
    ],
    description: 'Astrologer Kamal Shastri is recognized among the best Vedic astrologers in India, offering accurate Kundli analysis, marriage matchmaking, career counselling, and traditional remedies.',
    knowsAbout: [
      'Vedic Astrology',
      'Kundli Analysis & Janam Kundli Reading',
      'Kundli Matching & Guna Milan',
      'Marriage Problem Solution',
      'Love & Relationship Astrology',
      'Career & Business Problem Solution',
      'Financial Astrology & Wealth Guidance',
      'Vastu Shastra & Directional Harmony',
      'Dosha Nivarana & Traditional Puja Remedies',
      'Panchang & Shubh Muhurat Selection',
      'Certified Gemstone Recommendation',
      'Numerology & Tarot Guidance'
    ]
  };
}

/**
 * Builds Schema.org Person definition for Astrologer Kamal Shastri
 */
export function buildPersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: 'Astrologer Kamal Shastri',
    jobTitle: 'Senior Vedic Astrologer & Spiritual Counselor',
    worksFor: {
      '@id': `${SITE_URL}/#organization`
    },
    telephone: PRIMARY_PHONE,
    url: `${SITE_URL}/about`,
    image: DEFAULT_OG_IMAGE,
    description: 'Renowned Indian Vedic astrologer with deep expertise in Parashari and Jaimini astrology, horoscopic synthesis, and personalized spiritual consultations.'
  };
}

/**
 * Builds Schema.org WebSite structure with Sitelinks search
 */
export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: 'Best Astrologer in India | Astrologer Kamal Shastri',
    description: 'Official Vedic astrology portal of Astrologer Kamal Shastri offering trusted consultations in India and worldwide.',
    inLanguage: 'en-IN'
  };
}
