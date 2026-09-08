import { Phone, MessageCircle, Clock, MapPin, Sparkles, ShieldCheck, ExternalLink } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ConsultationForm } from '../components/ConsultationForm';
import { getCanonicalUrl, buildBreadcrumbSchema, buildPersonSchema } from '../utils/seo';

export function ContactPage() {
  const primaryPhone = '+919887952163';
  const displayPhone = '+91 9887952163';

  const breadcrumbs = [
    { label: 'Contact & Consultation Booking', url: '/contact' }
  ];

  const contactSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Best Astrologer in India - Astrologer Kamal Shastri',
      url: getCanonicalUrl('contact'),
      description: 'Contact details and appointment booking for Vedic astrology consultation with Astrologer Kamal Shastri.',
      mainEntity: buildPersonSchema()
    },
    buildBreadcrumbSchema(breadcrumbs)
  ];

  return (
    <div className="space-y-12 lg:space-y-16 pb-16">
      <SEOHead
        title="Contact Astrologer Kamal Shastri | Best Astrologer in India | +91 9887952163"
        description="Book your Vedic astrology consultation with Astrologer Kamal Shastri, among the best astrologers in India. Call +91 9887952163 or submit your birth details online."
        canonicalPath="/contact"
        schema={contactSchema}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
            Direct Astrologer Access
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111D42] tracking-tight leading-[1.2]">
            Contact & Consultation Scheduling
          </h1>
          <p className="text-base sm:text-lg text-[#3E4756] leading-relaxed">
            Connect directly with Astrologer Kamal Shastri for your personalized Vedic astrology consultation. We prioritize direct telephonic and voice communication to ensure clear, private, and unhurried dialogue.
          </p>
        </div>
      </section>

      {/* Contact Cards & Instructions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Phone Card */}
            <div className="bg-[#111D42] text-[#F7F4EC] rounded-2xl p-6 sm:p-8 space-y-5 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#1C2C63] text-[#C59B48] flex items-center justify-center border border-[#C59B48]/30">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#C59B48] font-bold block">
                    Direct Telephone Line
                  </span>
                  <a
                    href={`tel:${primaryPhone}`}
                    className="font-heading text-xl sm:text-2xl font-bold hover:text-[#E6C687] transition-colors"
                  >
                    {displayPhone}
                  </a>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A5B0C7] leading-relaxed">
                Direct phone consultations are available across India and internationally. Call directly to inquire about consultation availability and schedule your appointment.
              </p>

              <div className="pt-2 space-y-2.5">
                <a
                  href={`tel:${primaryPhone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C59B48] text-[#0B132B] font-bold text-xs uppercase tracking-wider hover:bg-[#D4AF37] transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Astrologer Now</span>
                </a>

                <a
                  href="https://astrologerkamal.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-[#C59B48]/50 text-[#E6C687] hover:bg-[#1C2C63] text-xs font-semibold transition-colors"
                >
                  <span>Official Contact: astrologerkamal.com/contact</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C59B48]" />
                </a>
              </div>
            </div>

            {/* Preparation Checklist Card */}
            <div className="bg-white border border-[#E2DBCF] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
              <h3 className="font-heading text-base font-bold text-[#111D42] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C59B48]" />
                <span>What to Prepare Before Calling</span>
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#4E586E]">
                <li className="flex items-start gap-2">
                  <span className="text-[#C59B48] font-bold">1.</span>
                  <span><strong>Date of Birth:</strong> Day, month, and full year of birth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C59B48] font-bold">2.</span>
                  <span><strong>Exact Time of Birth:</strong> Preferably from official birth certificates or hospital records.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C59B48] font-bold">3.</span>
                  <span><strong>Place of Birth:</strong> Exact city or village and district for geographical coordinates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C59B48] font-bold">4.</span>
                  <span><strong>Key Questions:</strong> 2 to 3 specific life areas you wish to focus upon during the session.</span>
                </li>
              </ul>
            </div>

            {/* Confidentiality Commitment */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E2DBCF] flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="text-xs font-bold text-[#111D42]">Complete Client Privacy</h4>
                <p className="text-xs text-[#525B6C] leading-relaxed">
                  Your birth information and consultation discussions are treated with the highest professional discretion and confidentiality.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <ConsultationForm
              defaultService="Comprehensive Vedic Astrology Consultation"
              title="Submit Your Details for Appointment"
              subtitle="Enter your birth coordinates below. You can connect directly over telephone or send formatted details via WhatsApp."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
