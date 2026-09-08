import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  ogType?: string;
  ogImage?: string;
}

export function SEOHead({
  title,
  description,
  schema,
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80'
}: SEOHeadProps) {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper to update or create meta tag
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

    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    if (typeof window !== 'undefined') {
      setMeta('og:url', window.location.href, true);
    }
    setMeta('og:type', ogType, true);
    setMeta('og:image', ogImage, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);

    // Remove any canonical link targeting external domain as instructed
    const canonicalLinks = document.querySelectorAll('link[rel="canonical"]');
    canonicalLinks.forEach(link => link.remove());

    // Update Structured Data JSON-LD
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
      const s = document.getElementById('json-ld-schema');
      if (s) s.remove();
    };
  }, [title, description, schema, ogType, ogImage]);

  return null;
}
