import { Phone, ShieldCheck, Sparkles, CheckCircle2, ArrowRight, BookOpen, Compass, ExternalLink } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { buildBreadcrumbSchema, buildPersonSchema } from '../utils/seo';

export function AboutPage() {
  const primaryPhone = '+919887952163';
  const displayPhone = '+91 9887952163';

  const breadcrumbs = [
    { label: 'About Astrologer Kamal Shastri', url: '/about' }
  ];

  const aboutSchema = [
    buildPersonSchema(),
    buildBreadcrumbSchema(breadcrumbs)
  ];

  return (
    <div className="space-y-12 lg:space-y-16 pb-16">
      <SEOHead
        title="About Astrologer Kamal Shastri | Best Astrologer in India"
        description="Learn about Astrologer Kamal Shastri, widely recognized among the best Vedic astrologers in India, his classical Parashari philosophy, and ethical consultation standards."
        canonicalPath="/about"
        schema={aboutSchema}
      />

      <Breadcrumbs items={breadcrumbs} />

      {/* Main Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
              Ethical Vedic Astrology Practice
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111D42] tracking-tight leading-[1.2]">
              About Astrologer Kamal Shastri
            </h1>
            <p className="text-base sm:text-lg text-[#3E4756] leading-relaxed">
              Astrologer Kamal Shastri provides personalized astrology guidance across areas such as relationships, marriage, career, business, Kundli analysis, numerology, Vastu, and traditional remedial guidance.
            </p>
            <p className="text-sm sm:text-base text-[#4E586E] leading-relaxed">
              Rooted in the venerable lineage of classical Indian Jyotish—including the foundational teachings of Maharishi Parashara and Sage Jaimini—his consultations are dedicated to bringing clarity, calm, and practical wisdom to individuals facing complex life decisions.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${primaryPhone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#111D42] text-[#F7F4EC] font-semibold text-sm hover:bg-[#1C2C63] transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 text-[#C59B48]" />
                <span>Call Consultation: {displayPhone}</span>
              </a>

              <a
                href="https://astrologerkamal.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#C59B48] bg-white hover:bg-[#FAF0DC]/50 text-[#856123] font-semibold text-sm transition-all shadow-xs"
                title="Visit official About page on astrologerkamal.com"
              >
                <span>Official About Page</span>
                <ExternalLink className="w-4 h-4 text-[#C59B48]" />
              </a>
            </div>

            <p className="text-xs text-stone-500">
              Official external profile URL:{' '}
              <a
                href="https://astrologerkamal.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#856123] font-mono underline inline-flex items-center gap-1 font-semibold"
              >
                <span>https://astrologerkamal.com/about</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-[#DED4C3] bg-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80"
                alt="Astrologer Kamal Shastri Vedic manuscripts and consultation sanctuary"
                className="w-full h-80 sm:h-96 object-cover"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&w=1000&q=80';
                }}
              />
              <div className="p-5 bg-[#FAF8F5] border-t border-[#EAE3D6] space-y-1">
                <span className="text-xs font-bold text-[#856123] uppercase tracking-wider block">
                  Core Principle
                </span>
                <p className="font-heading text-sm font-semibold text-[#111D42]">
                  Clarity over confusion. Ethical counsel over fear-mongering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Philosophy Section */}
      <section className="bg-white py-14 border-y border-[#E2DBCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
              Foundational Philosophy
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111D42]">
              Jyotish as an Awakening of Consciousness
            </h2>
            <p className="text-sm sm:text-base text-[#4E586E] leading-relaxed">
              The word "Jyotish" derives from the Sanskrit root *Jyoti*, meaning divine light. It is not an instrument of fatalism or superstition. Instead, it was conceptualized by ancient rishis as an eye of the Vedas (Vedanga)—a cosmic diagnostic lens that reveals the subtle weather patterns of human life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E8E1D4] space-y-3">
              <Compass className="w-6 h-6 text-[#C59B48]" />
              <h3 className="font-heading text-base font-bold text-[#111D42]">
                A Compass, Not a Cage
              </h3>
              <p className="text-xs sm:text-sm text-[#525B6C] leading-relaxed">
                A birth chart indicates karmic tendencies and natural predispositions (Prarabdha Karma), but human free will (Purushartha) and conscious effort always dictate your response.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E8E1D4] space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#C59B48]" />
              <h3 className="font-heading text-base font-bold text-[#111D42]">
                Freedom from Fear
              </h3>
              <p className="text-xs sm:text-sm text-[#525B6C] leading-relaxed">
                Astrology should liberate the mind, not enslave it with manufactured dread. We demystify alleged doshas and provide honest, calm explanations.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E8E1D4] space-y-3">
              <Sparkles className="w-6 h-6 text-[#C59B48]" />
              <h3 className="font-heading text-base font-bold text-[#111D42]">
                Sattvic Actionable Upayas
              </h3>
              <p className="text-xs sm:text-sm text-[#525B6C] leading-relaxed">
                Remedies should be accessible, spiritually enriching, and focused on personal ethical growth, disciplined prayer, and genuine charitable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
            Scope of Consultation
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111D42]">
            Comprehensive Areas of Astrological Guidance
          </h2>
          <p className="text-sm text-[#4E586E]">
            Clients consult with Astrologer Kamal Shastri across multiple essential domains of daily and spiritual life:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl border border-[#E2DBCF] bg-white space-y-2">
            <h4 className="font-heading text-sm font-bold text-[#111D42]">Kundli & Life Blueprint</h4>
            <p className="text-xs text-[#525B6C] leading-relaxed">
              Ascendant evaluation, 12 house balances, planetary dignities, and active Vimshottari Mahadasha/Antardasha timelines.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[#E2DBCF] bg-white space-y-2">
            <h4 className="font-heading text-sm font-bold text-[#111D42]">Marriage & Compatibility</h4>
            <p className="text-xs text-[#525B6C] leading-relaxed">
              Ashtakoot Guna Milan, D9 Navamsha harmony, Mangal Dosha verification, and emotional friction resolution.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[#E2DBCF] bg-white space-y-2">
            <h4 className="font-heading text-sm font-bold text-[#111D42]">Career & Enterprise</h4>
            <p className="text-xs text-[#525B6C] leading-relaxed">
              10th house Karma Bhava, Dashamsha (D10) vocational analysis, job promotions, business partnership compatibility.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-[#E2DBCF] bg-white space-y-2">
            <h4 className="font-heading text-sm font-bold text-[#111D42]">Vastu & Space Harmony</h4>
            <p className="text-xs text-[#525B6C] leading-relaxed">
              Non-destructive residential and commercial Vastu balancing according to the five elements (Pancha Mahabhutas).
            </p>
          </div>
        </div>

        <div className="text-center pt-2">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9D7729] hover:underline"
          >
            <span>Explore all 21 specific service disciplines</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Professional Values & Code of Ethics */}
      <section className="bg-[#FAF8F5] py-14 border-t border-[#E2DBCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[#E2DBCF] rounded-2xl p-8 lg:p-12 space-y-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
                Code of Conduct
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111D42]">
                Our Professional Commitments to You
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#111D42]">No Fabricated Credentials or Claims</h4>
                  <p className="text-xs text-[#525B6C] leading-relaxed">
                    We do not advertise fake awards, celebrity endorsements, or exaggerated statistical claims. Our work stands on genuine astrological scholarship and client satisfaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#111D42]">Uncompromising Client Confidentiality</h4>
                  <p className="text-xs text-[#525B6C] leading-relaxed">
                    Every consultation is conducted in strict privacy. Your birth details, questions, and personal disclosures are never shared with third parties.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#111D42]">No Commercialized Fear-Mongering</h4>
                  <p className="text-xs text-[#525B6C] leading-relaxed">
                    We will never frighten you with exaggerated claims of curses or black magic to sell expensive talismans or rituals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#111D42]">Respect for Free Will & Responsibility</h4>
                  <p className="text-xs text-[#525B6C] leading-relaxed">
                    Astrology serves to inform your conscience, not to replace your rational judgment. We support you in making mature, empowered decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EAE3D6] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-stone-600">
                  Ready to schedule a personal consultation session?
                </span>
                <p className="font-heading text-sm font-bold text-[#111D42]">
                  Speak directly with Astrologer Kamal Shastri
                </p>
              </div>
              <a
                href={`tel:${primaryPhone}`}
                className="px-6 py-2.5 rounded-lg bg-[#111D42] text-[#F7F4EC] text-xs font-bold uppercase tracking-wider hover:bg-[#1C2C63] transition-colors"
              >
                Call: {displayPhone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
