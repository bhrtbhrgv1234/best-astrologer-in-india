import { useState } from 'react';
import { Phone, ArrowRight, Compass, Heart, Briefcase, Sparkles, Sun, ShieldCheck, ExternalLink } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ALL_SERVICES } from '../data/servicesData';
import { CATEGORIES } from '../data/categories';
import { ServiceCategory } from '../types';
import { getServiceExternalUrl } from '../data/externalLinks';

export function ServicesIndexPage() {
  const primaryPhone = '+919887952163';
  const displayPhone = '+91 9887952163';
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');

  const breadcrumbs = [
    { label: 'Astrology Services Directory', url: '/services' }
  ];

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Vedic Astrology Services by Astrologer Kamal Shastri',
    description: 'Comprehensive directory of 21 personalized Vedic astrology consultation services in India.',
    itemListElement: ALL_SERVICES.map((service, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: service.title,
      url: `/${service.slug}`
    }))
  };

  const filteredServices = selectedCategory === 'all'
    ? ALL_SERVICES
    : ALL_SERVICES.filter(s => s.category === selectedCategory);

  const getCategoryIcon = (catId: ServiceCategory) => {
    switch (catId) {
      case 'astrology': return Compass;
      case 'relationships': return Heart;
      case 'career': return Briefcase;
      case 'spiritual': return Sparkles;
      case 'guidance': return Sun;
    }
  };

  return (
    <div className="space-y-12 lg:space-y-16 pb-16">
      <SEOHead
        title="Astrology Consultation Services in India | Astrologer Kamal Shastri"
        description="Explore 21 personalized Vedic astrology services by Astrologer Kamal Shastri. Expert consultations for Kundli, marriage, career, business, Vastu, and remedies."
        canonicalPath="/services"
        schema={servicesSchema}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
            Comprehensive Consultation Directory
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111D42] tracking-tight leading-[1.2]">
            Vedic Astrology Consultation Services
          </h1>
          <p className="text-base sm:text-lg text-[#3E4756] leading-relaxed">
            Astrologer Kamal Shastri provides detailed, scripture-based consultations across 21 specialized disciplines. Each service is individually tailored to your unique birth coordinates and active planetary cycles.
          </p>

          <div className="mt-4 p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DBCF] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#C59B48] shrink-0" />
              <span className="text-xs text-[#525B6C]">
                Official external catalog on primary portal: <strong className="text-[#111D42]">https://astrologerkamal.com/services</strong>
              </span>
            </div>
            <a
              href="https://astrologerkamal.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#111D42] text-[#F7F4EC] text-xs font-semibold hover:bg-[#1C2C63] transition-colors shrink-0 shadow-xs"
            >
              <span>Visit External Catalog</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C59B48]" />
            </a>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2 pt-2 border-t border-[#EAE3D6]">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#111D42] text-[#F7F4EC] shadow-xs'
                : 'bg-white border border-[#DDD4C4] text-[#3E4756] hover:bg-[#F4EFE6]'
            }`}
          >
            All 21 Disciplines
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#111D42] text-[#F7F4EC] shadow-xs'
                  : 'bg-white border border-[#DDD4C4] text-[#3E4756] hover:bg-[#F4EFE6]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Categorized Editorial Layout */}
      {selectedCategory === 'all' ? (
        // Render Grouped by Category for editorial richness
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {CATEGORIES.map((cat) => {
            const catServices = ALL_SERVICES.filter(s => s.category === cat.id);
            const Icon = getCategoryIcon(cat.id);

            return (
              <section key={cat.id} className="space-y-6 pt-4 border-t border-[#E2DBCF] first:border-t-0 first:pt-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#111D42] text-[#C59B48] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#111D42]">
                        {cat.name}
                      </h2>
                      <p className="text-xs text-[#525B6C]">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-stone-500">
                    {catServices.length} Specialized Services
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catServices.map((service, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-[#E2DBCF] rounded-xl overflow-hidden shadow-xs hover:border-[#C59B48] transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={service.heroImage}
                            alt={`${service.title} - Astrologer Kamal Shastri`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.src = 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=600&q=80';
                            }}
                          />
                          <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold text-[#856123] uppercase tracking-wider border border-[#E5DEC9]">
                            {service.tag}
                          </div>
                        </div>

                        <div className="p-5 space-y-2">
                          <h3 className="font-heading text-base font-bold text-[#111D42] group-hover:text-[#9D7729] transition-colors">
                            <Link href={`/${service.slug}`}>
                              {service.title}
                            </Link>
                          </h3>
                          <p className="text-xs text-[#525B6C] line-clamp-3 leading-relaxed">
                            {service.shortSummary}
                          </p>
                        </div>
                      </div>

                      <div className="p-5 pt-0 flex items-center gap-2">
                        <Link
                          href={`/${service.slug}`}
                          className="flex-1 inline-flex items-center justify-between py-2 px-3 rounded-lg bg-[#FAF8F5] border border-[#E4DCCE] text-xs font-semibold text-[#111D42] hover:bg-[#111D42] hover:text-[#F7F4EC] transition-colors"
                        >
                          <span>Service Guide</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <a
                          href={getServiceExternalUrl(service.slug)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-2 rounded-lg border border-[#DDD4C4] text-stone-600 hover:text-[#856123] hover:border-[#C59B48] text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                          title={`Official external link: astrologerkamal.com/${service.slug}`}
                        >
                          <span>Site</span>
                          <ExternalLink className="w-3 h-3 text-[#C59B48]" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        // Render filtered grid when user selects a specific category
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2DBCF] rounded-xl overflow-hidden shadow-xs hover:border-[#C59B48] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={service.heroImage}
                      alt={`${service.title} - Astrologer Kamal Shastri`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-[#FAF8F5]/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold text-[#856123] uppercase tracking-wider border border-[#E5DEC9]">
                      {service.tag}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-heading text-base font-bold text-[#111D42] group-hover:text-[#9D7729] transition-colors">
                      <Link href={`/${service.slug}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-xs text-[#525B6C] line-clamp-3 leading-relaxed">
                      {service.shortSummary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center gap-2">
                  <Link
                    href={`/${service.slug}`}
                    className="flex-1 inline-flex items-center justify-between py-2 px-3 rounded-lg bg-[#FAF8F5] border border-[#E4DCCE] text-xs font-semibold text-[#111D42] hover:bg-[#111D42] hover:text-[#F7F4EC] transition-colors"
                  >
                    <span>Read Guidance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={getServiceExternalUrl(service.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-2 rounded-lg border border-[#DDD4C4] text-stone-600 hover:text-[#856123] hover:border-[#C59B48] text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                    title={`Official external link: astrologerkamal.com/${service.slug}`}
                  >
                    <span>Site</span>
                    <ExternalLink className="w-3 h-3 text-[#C59B48]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Consultation Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#111D42] text-[#F7F4EC] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-[#C59B48]">
              Personalized Astrological Advisory
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold">
              Unsure which consultation fits your situation?
            </h3>
            <p className="text-xs sm:text-sm text-[#A5B0C7] max-w-xl leading-relaxed">
              Call directly to speak with Astrologer Kamal Shastri. We will review your primary questions and recommend the ideal chart analysis for your needs.
            </p>
          </div>

          <a
            href={`tel:${primaryPhone}`}
            className="shrink-0 inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[#C59B48] text-[#0B132B] font-bold text-xs uppercase tracking-wider hover:bg-[#D4AF37] transition-colors shadow-md"
          >
            <Phone className="w-4 h-4" />
            <span>Call: {displayPhone}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
