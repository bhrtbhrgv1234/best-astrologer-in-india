import { Phone, ArrowRight, ShieldCheck, CheckCircle2, HelpCircle, Compass, Sparkles, UserCheck, ExternalLink } from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ConsultationForm } from '../components/ConsultationForm';
import { getServiceBySlug, getRelatedServices } from '../data/servicesData';
import { getServiceExternalUrl } from '../data/externalLinks';
import { NotFoundPage } from './NotFoundPage';
import { getCanonicalUrl, buildBreadcrumbSchema, buildPersonSchema } from '../utils/seo';

interface ServiceDetailPageProps {
  slug: string;
}

export function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const service = getServiceBySlug(slug);
  const primaryPhone = '+919887952163';
  const displayPhone = '+91 9887952163';

  if (!service) {
    return <NotFoundPage />;
  }

  const relatedServicesList = getRelatedServices(service.relatedServices);

  const breadcrumbs = [
    { label: 'Services', url: '/services' },
    { label: service.title, url: `/${service.slug}` }
  ];

  // Specific Structured Data for this individual Service Page
  const serviceSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${getCanonicalUrl(service.slug)}#service`,
      url: getCanonicalUrl(service.slug),
      name: service.title,
      description: service.metaDescription,
      provider: buildPersonSchema(),
      areaServed: {
        '@type': 'Country',
        name: 'India'
      },
      serviceType: service.tag
    },
    buildBreadcrumbSchema(breadcrumbs),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  ];

  return (
    <div className="space-y-12 lg:space-y-16 pb-16">
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/${service.slug}`}
        schema={serviceSchema}
        ogImage={service.heroImage}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* 1. SERVICE SPECIFIC HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF0DC] border border-[#E8D6B5] text-xs font-semibold text-[#856123]">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B48]" />
              <span>{service.tag}</span>
            </div>

            {/* Exactly ONE H1 per page, descriptive & targeted */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111D42] tracking-tight leading-[1.2]">
              {service.h1}
            </h1>

            <p className="text-base sm:text-lg text-[#3E4756] leading-relaxed">
              {service.shortSummary}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={`tel:${primaryPhone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#111D42] text-[#F7F4EC] text-sm font-semibold hover:bg-[#1C2C63] transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 text-[#C59B48]" />
                <span>Talk to Astrologer: {displayPhone}</span>
              </a>

              <a
                href={getServiceExternalUrl(service.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-[#C59B48] bg-white hover:bg-[#FAF0DC]/50 text-[#856123] text-sm font-semibold transition-all shadow-xs group"
                title={`Visit official ${service.title} page on astrologerkamal.com`}
              >
                <span>Official Page</span>
                <ExternalLink className="w-4 h-4 text-[#C59B48] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <p className="text-xs text-stone-500">
              Direct scriptural Vedic guidance. Also accessible on primary portal:{' '}
              <a
                href={getServiceExternalUrl(service.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#856123] font-medium underline inline-flex items-center gap-0.5"
              >
                <span>astrologerkamal.com/{service.slug}</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#DED4C3] bg-white shadow-xl">
              <img
                src={service.heroImage}
                alt={`${service.title} - Astrologer Kamal Shastri`}
                className="w-full h-80 sm:h-96 object-cover"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1200&q=80';
                }}
              />
              <div className="p-4 bg-[#FAF8F5] border-t border-[#EAE3D6] flex items-center justify-between text-xs text-[#856123] font-bold">
                <span>Vedic Consultation in India</span>
                <a
                  href={getServiceExternalUrl(service.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#111D42] hover:text-[#856123] inline-flex items-center gap-1"
                >
                  <span>astrologerkamal.com</span>
                  <ExternalLink className="w-3 h-3 text-[#C59B48]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Domain Resource Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FAF8F5] to-[#F4EFE6] border border-[#E2DBCF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#111D42] text-[#C59B48] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] uppercase font-bold text-[#856123] tracking-wider">
                  Official Domain Link
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#EAE1D2] text-[#111D42] font-semibold">
                  External Resource
                </span>
              </div>
              <h3 className="font-heading text-sm sm:text-base font-bold text-[#111D42]">
                Canonical Publication for {service.title}
              </h3>
              <p className="text-xs text-[#525B6C] max-w-2xl leading-relaxed">
                Explore the primary reference guide and official publication on our external domain:{' '}
                <a
                  href={getServiceExternalUrl(service.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#856123] hover:underline font-semibold"
                >
                  {getServiceExternalUrl(service.slug)}
                </a>
              </p>
            </div>
          </div>
          <a
            href={getServiceExternalUrl(service.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111D42] text-[#F7F4EC] text-xs font-semibold hover:bg-[#1C2C63] transition-colors shadow-xs"
          >
            <span>Visit External Page</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C59B48]" />
          </a>
        </div>
      </section>

      {/* 2. PROBLEM & CONTEXT EXPLANATION SECTION */}
      <section className="bg-white py-14 border-y border-[#E2DBCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
                Situational Understanding
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111D42]">
                {service.problemContext.heading}
              </h2>
              {service.problemContext.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-[#3E4756] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E2DBCF] rounded-xl p-6 space-y-4">
              <h3 className="font-heading text-base font-bold text-[#111D42] border-b border-[#EAE3D6] pb-2">
                Common Triggers for Seeking Guidance
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[#4E586E]">
                {service.problemContext.bulletPoints.map((point, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5">
                    <span className="text-[#C59B48] font-bold mt-0.5">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {service.secondaryImage && (
                <div className="pt-2">
                  <div className="rounded-xl overflow-hidden border border-[#E2DBCF] shadow-xs">
                    <img
                      src={service.secondaryImage}
                      alt={`${service.title} - Vedic Consultation Practice`}
                      className="w-full h-44 object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80';
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLASSICAL VEDIC INSIGHT & PLANETARY FACTORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
            Classical Astrological Framework
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111D42]">
            {service.vedicInsight.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#4E586E] leading-relaxed">
            {service.vedicInsight.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.vedicInsight.planetaryFactors.map((factor, fIdx) => (
            <div key={fIdx} className="p-6 rounded-xl bg-white border border-[#E2DBCF] space-y-2 shadow-xs">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C59B48]" />
                <h3 className="font-heading text-base font-bold text-[#111D42]">
                  {factor.name}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#525B6C] leading-relaxed">
                {factor.significance}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. METHODOLOGY & STEP-BY-STEP PROCESS */}
      <section className="bg-[#FAF8F5] py-14 border-y border-[#E2DBCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
              Consultation Methodology
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111D42]">
              {service.consultationApproach.heading}
            </h2>
            {service.consultationApproach.paragraphs.map((p, idx) => (
              <p key={idx} className="text-sm sm:text-base text-[#4E586E] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.consultationApproach.steps.map((step, sIdx) => (
              <div key={sIdx} className="bg-white border border-[#E2DBCF] rounded-xl p-5 space-y-2 shadow-xs">
                <span className="text-xs font-bold text-[#C59B48] uppercase tracking-wider block">
                  Step 0{sIdx + 1}
                </span>
                <h3 className="font-heading text-base font-bold text-[#111D42]">
                  {step.title}
                </h3>
                <p className="text-xs text-[#525B6C] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHO CAN BENEFIT & WHAT IT COVERS (Split Layout) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Who Can Benefit */}
          <div className="lg:col-span-5 bg-white border border-[#E2DBCF] rounded-xl p-6 lg:p-8 space-y-5 shadow-xs">
            <div className="flex items-center gap-2 text-[#856123]">
              <UserCheck className="w-5 h-5" />
              <h2 className="font-heading text-xl font-bold text-[#111D42]">
                Who May Benefit from This Consultation
              </h2>
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-[#4E586E]">
              {service.whoCanBenefit.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-[#EAE3D6]">
              <a
                href={`tel:${primaryPhone}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#111D42] text-[#F7F4EC] text-xs font-semibold uppercase tracking-wider hover:bg-[#1C2C63] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C59B48]" />
                <span>Discuss Your Concerns</span>
              </a>
            </div>
          </div>

          {/* What the Consultation Covers */}
          <div className="lg:col-span-7 bg-white border border-[#E2DBCF] rounded-xl p-6 lg:p-8 space-y-5 shadow-xs">
            <h2 className="font-heading text-xl font-bold text-[#111D42]">
              What Your Consultation Includes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.whatItCovers.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#FAF8F5] border border-[#EAE3D6] space-y-1.5">
                  <h3 className="font-heading text-sm font-bold text-[#111D42]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#525B6C] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTEXTUAL INTERNAL LINKING & RELATED SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="border-t border-[#E2DBCF] pt-8">
          <div className="space-y-2 mb-6">
            <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
              Related Consultations & Internal Links
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#111D42]">
              Explore Interconnected Astrology Services
            </h2>
            <p className="text-xs sm:text-sm text-[#4E586E]">
              In Vedic astrology, life domains are profoundly interlinked. Explore related consultations that frequently complement {service.title}:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServicesList.map((rel, idx) => (
              <Link
                key={idx}
                href={`/${rel.slug}`}
                className="p-4 rounded-xl bg-white border border-[#E2DBCF] hover:border-[#C59B48] hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-[#856123] block">
                    {rel.tag}
                  </span>
                  <h4 className="font-heading text-sm font-bold text-[#111D42] group-hover:text-[#9D7729] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#6B7588] line-clamp-2 leading-relaxed">
                    {rel.shortSummary}
                  </p>
                </div>
                <div className="pt-3 mt-2 border-t border-[#F0EBE0] flex items-center justify-between text-xs font-semibold text-[#9D7729]">
                  <span className="flex items-center gap-1">
                    <span>Explore Guidance</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <a
                    href={getServiceExternalUrl(rel.slug)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[11px] text-stone-500 hover:text-[#856123] inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-stone-100 hover:bg-[#FAF0DC] transition-colors"
                    title={`External link: astrologerkamal.com/${rel.slug}`}
                  >
                    <span>External</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. UNIQUE SERVICE FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111D42]">
            Questions About {service.title}
          </h2>
        </div>

        <div className="space-y-4 pt-2">
          {service.faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-[#E2DBCF] rounded-xl p-5 space-y-2">
              <h3 className="font-heading text-base font-bold text-[#111D42] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#C59B48] shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#4E586E] leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. INTERACTIVE CONSULTATION FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <ConsultationForm
          defaultService={service.title}
          title={`Consult Regarding ${service.title}`}
          subtitle={`Schedule your consultation with Astrologer Kamal Shastri. Submit your details or directly call ${displayPhone}.`}
        />
      </section>

      {/* 9. SERVICE CONVERSION CALLOUT */}
      <section className="bg-[#111D42] text-[#F7F4EC] py-12 border-t border-[#1E2D5C]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold">
            Speak Directly with Astrologer Kamal Shastri
          </h2>
          <p className="text-xs sm:text-sm text-[#DCE2EE] max-w-xl mx-auto leading-relaxed">
            Gain thoughtful, confidential perspective on your birth chart without delay. Direct phone consultations are conducted with care, respect, and scriptural fidelity.
          </p>
          <div className="pt-2">
            <a
              href={`tel:${primaryPhone}`}
              className="inline-flex items-center justify-center gap-2 py-3 px-8 rounded-xl bg-[#C59B48] text-[#0B132B] font-bold text-xs uppercase tracking-wider hover:bg-[#D4AF37] transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {displayPhone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
