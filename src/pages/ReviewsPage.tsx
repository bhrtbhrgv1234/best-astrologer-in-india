import { Phone, ShieldCheck, Sparkles, MessageSquare, ExternalLink } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { VERIFIED_REVIEWS } from '../data/reviewsData';
import { buildBreadcrumbSchema, buildOrganizationSchema, getCanonicalUrl } from '../utils/seo';

export function ReviewsPage() {
  const primaryPhone = '+919887952163';
  const displayPhone = '+91 9887952163';

  const breadcrumbs = [
    { label: 'Client Feedback & Reviews', url: '/reviews' }
  ];

  const reviewsSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ItemPage',
      name: 'Client Feedback & Consultation Reviews - Astrologer Kamal Shastri',
      url: getCanonicalUrl('reviews'),
      description: 'Authentic consultation feedback and verified client experiences with Astrologer Kamal Shastri across India.',
      mainEntity: buildOrganizationSchema()
    },
    buildBreadcrumbSchema(breadcrumbs)
  ];

  return (
    <div className="space-y-12 lg:space-y-16 pb-16">
      <SEOHead
        title="Client Reviews & Consultation Feedback | Best Astrologer in India"
        description="Authentic consultation reflections and feedback from clients who consulted with Astrologer Kamal Shastri across India. Ethical, verified, and confidential."
        canonicalPath="/reviews"
        schema={reviewsSchema}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
            Authentic Consultation Reflections
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111D42] tracking-tight leading-[1.2]">
            Client Feedback & Consultation Experiences
          </h1>
          <p className="text-base sm:text-lg text-[#3E4756] leading-relaxed">
            In accordance with our strict ethical standards, we never fabricate reviews, generate artificial star ratings, or publicize private client records. Below are authentic reflections from verified consultation sessions with client initials preserved for complete personal privacy.
          </p>

          <div className="pt-2">
            <a
              href="https://astrologerkamal.com/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#C59B48] bg-white hover:bg-[#FAF0DC] text-[#856123] text-xs font-semibold transition-colors shadow-xs"
            >
              <span>Official Reviews Page on astrologerkamal.com</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C59B48]" />
            </a>
          </div>
        </div>
      </section>

      {/* Ethics & Transparency Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E2DBCF] flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#C59B48] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold text-[#111D42] uppercase tracking-wider">
              Privacy & Ethical Review Statement
            </h4>
            <p className="text-xs text-[#525B6C] leading-relaxed">
              Astrology consultations frequently involve intimate family concerns, marital distress, health matters, and sensitive commercial negotiations. We hold client privacy sacrosanct. Individual names have been initialed to safeguard identity, and feedback reflects personal qualitative experiences regarding timing clarity and counseling demeanor.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VERIFIED_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white border border-[#E2DBCF] rounded-xl p-6 space-y-4 shadow-xs flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#111D42] text-[#C59B48] font-bold text-xs flex items-center justify-center">
                      {review.initials}
                    </div>
                    <div>
                      <span className="font-bold text-sm text-[#111D42] block">
                        {review.name}
                      </span>
                      <span className="text-[11px] text-stone-500">
                        {review.location}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#F4EFE6] text-[#856123]">
                    {review.date}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#9D7729]">
                  Service: {review.serviceReceived}
                </div>

                <p className="text-xs sm:text-sm text-[#4E586E] italic leading-relaxed">
                  "{review.feedback}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#EAE3D6] flex flex-wrap gap-1.5">
                {review.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E2DBCF] text-[#525B6C] font-medium"
                  >
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#111D42] text-[#F7F4EC] rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase font-bold tracking-wider text-[#C59B48]">
              Experience Confidential Vedic Consultation
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-bold">
              Discuss Your Life Questions One-on-One
            </h3>
            <p className="text-xs sm:text-sm text-[#A5B0C7] max-w-xl leading-relaxed">
              Consult with Astrologer Kamal Shastri for objective, scripture-based guidance on your birth chart.
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
