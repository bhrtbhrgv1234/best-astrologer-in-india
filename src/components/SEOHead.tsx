import { useEffect } from 'react';
import { getCanonicalUrl, SITE_NAME, DEFAULT_OG_IMAGE } from '../utils/seo';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  ogType?: string;
  ogImage?: string;
  keywords?: string;
  noindex?: boolean;
}

export function SEOHead({
  title,
  description,
  canonicalPath,
  schema,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  keywords = 'Best Astrologer in India, Astrologer in India, Vedic Astrologer, Kundli Analysis, Kundli Matching, Marriage Problem Solution, Career Astrology, Astrologer Kamal Shastri',
  noindex = false,
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Compute exact canonical URL
    const pathname = canonicalPath !== undefined 
      ? canonicalPath 
      : (typeof window !== 'undefined' ? window.location.pathname : '');
    const canonicalUrl = getCanonicalUrl(pathname);

    // 2. Update Browser Title
    document.title = title;

    // Helper function to safely update or append meta tags
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // 3. Essential Search Engine Directives
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('author', 'Astrologer Kamal Shastri');
    setMeta(
      'robots',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
    setMeta('geo.region', 'IN');
    setMeta('geo.placename', 'India');

    // 4. Open Graph Social Metadata
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:type', ogType, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:image:alt', title, true);
    setMeta('og:site_name', SITE_NAME, true);
    setMeta('og:locale', 'en_IN', true);

    // 5. Twitter Card Metadata
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);
    setMeta('twitter:url', canonicalUrl);

    // 6. Manage Single Canonical Link Element
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 7. Inject Structured Data (Schema.org JSON-LD)
    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup schema script on unmount
      const s = document.getElementById('json-ld-schema');
      if (s) s.remove();
    };
  }, [title, description, canonicalPath, schema, ogType, ogImage, keywords, noindex]);

  return null;
}
