import { Phone, ArrowRight, ShieldCheck, Sparkles, Compass, Heart, Briefcase, Sun, CheckCircle, HelpCircle, ExternalLink } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { SEOHead } from '../components/SEOHead';
import { ConsultationForm } from '../components/ConsultationForm';
import { ALL_SERVICES } from '../data/servicesData';
import { VERIFIED_REVIEWS } from '../data/reviewsData';
import { EXTERNAL_SITE_LINKS } from '../data/externalLinks';
import { buildOrganizationSchema, buildPersonSchema, buildWebSiteSchema } from '../utils/seo';

export function HomePage() {
  const primaryPhone = '+919887952163';
  const displayPhone = '+91 9887952163';

  const coreServices = ALL_SERVICES.slice(0, 8);

  const faqs = [
    {
      question: 'Who is Astrologer Kamal Shastri?',
      answer: 'Astrologer Kamal Shastri is a respected practitioner of classical Vedic astrology in India, offering personalized consultations across Kundli analysis, marriage, career, business, relationships, Vastu Shastra, and traditional spiritual remedies. His consultations focus on grounded, practical perspective without sensationalist guarantees.'
    },
    {
      question: 'How does a phone consultation work?',
      answer: 'You can directly call +91 9887952163 or submit your birth data (date, exact time, and location of birth). Astrologer Kamal Shastri casts your horoscopic charts manually, calculates your active planetary cycles (Dashas), and conducts a private one-on-one phone consultation to address your life concerns.'
    },
    {
      question: 'What information do I need to prepare before my consultation?',
      answer: 'You will need your exact date of birth, time of birth (from hospital or birth records), and city/town of birth. If you are consulting for marriage or relationship guidance, having the partner\'s birth details is also helpful.'
    },
    {
      question: 'Does Astrologer Kamal Shastri promise guaranteed instant results?',
      answer: 'No. Authentic Vedic astrology is a contemplative diagnostic science of time, karmic tendencies, and planetary influences. Astrologer Kamal Shastri strictly avoids unethical claims like "100% guaranteed results" or magical overnight fixes. Instead, you receive honest, scripture-based insights and practical, sattvic remedies to navigate challenges constructively.'
    },
    {
      question: 'Can astrology help with career transitions and business stagnation?',
      answer: 'Yes. By examining the 10th house (Karma Bhava), Dashamsha (D10) chart, active Mahadashas, and transits of Jupiter and Saturn, an astrology consultation clarifies whether an obstacle is a temporary transit pressure or a signal to pivot toward different vocational sectors.'
    },
    {
      question: 'Are consultations confidential?',
      answer: 'All consultations with Astrologer Kamal Shastri are held in strict privacy. Your birth details, personal situations, and discussions are kept completely confidential.'
    }
  ];

  // Core structured data for the Best Astrologer in India homepage
  const homepageSchema = [
    buildOrganizationSchema(),
    buildPersonSchema(),
    buildWebSiteSchema(),
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
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
    <div className="space-y-16 lg:space-y-24">
      <SEOHead
        title="Best Astrologer in India | Astrologer Kamal Shastri - Vedic Consultation"
        description="Consult with the Best Astrologer in India, Astrologer Kamal Shastri. Personalized guidance for Kundli analysis, marriage, career, relationship, and life path."
        canonicalPath="/"
        schema={homepageSchema}
      />

      {/* 1. HERO SECTION: Refined, Editorial Indian Astrology Aesthetic */}
      <section className="relative overflow-hidden bg-[#FAF8F5] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAE1D2] border border-[#D8CEBC] text-xs font-semibold text-[#856123]">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B48]" />
                <span>Traditional Parashari & Jaimini Wisdom</span>
              </div>

              <div className="space-y-3">
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111D42] tracking-tight leading-[1.15]">
                  Personalized Vedic Astrology Guidance by <span className="text-[#9D7729]">Astrologer Kamal Shastri</span>
                </h1>
                <p className="text-base sm:text-lg text-[#3E4756] leading-relaxed max-w-2xl">
                  A trusted, thoughtful astrology consultation service in India. Providing grounded, scripture-based insight into your Kundli, marriage compatibility, career path, business growth, and family harmony—without fear-mongering or supernatural claims.
                </p>
              </div>

              {/* Primary CTA Block */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={`tel:${primaryPhone}`}
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-[#111D42] text-[#F7F4EC] text-sm sm:text-base font-semibold hover:bg-[#1C2C63] transition-all shadow-md group"
                >
                  <Phone className="w-4 h-4 text-[#C59B48] group-hover:scale-110 transition-transform" />
                  <span>Call Astrologer: {displayPhone}</span>
                </a>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#D5CBB9] text-[#111D42] text-sm sm:text-base font-semibold hover:bg-[#F2ECE0] transition-colors"
                >
                  <span>Explore 21 Services</span>
                  <ArrowRight className="w-4 h-4 text-[#9D7729]" />
                </Link>

                <a
                  href="https://astrologerkamal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-[#C59B48] bg-[#FAF8F5] text-[#856123] text-sm font-semibold hover:bg-[#FAF0DC] transition-colors"
                  title="Official website external link: https://astrologerkamal.com/"
                >
                  <span>Official Site</span>
                  <ExternalLink className="w-4 h-4 text-[#C59B48]" />
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[#EAE3D6] text-xs sm:text-sm text-[#4E586E]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C59B48] shrink-0" />
                  <span>100% Confidential</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#C59B48] shrink-0" />
                  <span>Manual Chart Casting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#C59B48] shrink-0" />
                  <span>Sattvic Remedies</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative Frame */}
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#C59B48]/20 to-[#111D42]/10 blur-xs"></div>
                <div className="relative rounded-2xl overflow-hidden border border-[#DED4C3] bg-white shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=1000&q=80"
                    alt="Astrologer Kamal Shastri Vedic astrology consultation manuscripts and charts"
                    className="w-full h-80 sm:h-96 object-cover"
                    loading="eager"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1000&q=80';
                    }}
                  />
                  <div className="p-6 bg-[#FAF8F5] border-t border-[#EAE3D6] space-y-2">
                    <div className="flex items-center justify-between text-xs text-[#856123] font-semibold uppercase tracking-wider">
                      <span>Astrology Consultation</span>
                      <span>India</span>
                    </div>
                    <p className="font-heading text-base font-bold text-[#111D42]">
                      "Astrology is a divine compass designed to awaken conscious understanding, not to breed fatalism."
                    </p>
                    <p className="text-xs text-stone-500">
                      — Astrologer Kamal Shastri
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ASTROLOGER INTRODUCTION & ETHICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white border border-[#E2DBCF] rounded-2xl p-8 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
                Professional Consultation Philosophy
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111D42]">
                Meet Astrologer Kamal Shastri
              </h2>
              <p className="text-sm sm:text-base text-[#3E4756] leading-relaxed">
                Astrologer Kamal Shastri provides personalized astrology guidance across areas such as relationships, marriage, career, business, Kundli analysis, numerology, Vastu, and traditional remedial guidance.
              </p>
              <p className="text-sm sm:text-base text-[#3E4756] leading-relaxed">
                Recognizing that every individual possesses unique karma, challenges, and aspirations, our consultations reject one-size-fits-all computerized predictions. Every chart is analyzed manually with reference to both the primary birth chart (D1) and divisional harmonics such as Navamsha (D9) and Dashamsha (D10).
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-[#111D42]">
                <span className="px-3 py-1.5 rounded-md bg-[#F4EFE6] border border-[#E5DECة] border-[#E5DEC9]">
                  Strict Privacy Assured
                </span>
                <span className="px-3 py-1.5 rounded-md bg-[#F4EFE6] border border-[#E5DEC9]">
                  Classical Shastric Alignment
                </span>
                <span className="px-3 py-1.5 rounded-md bg-[#F4EFE6] border border-[#E5DEC9]">
                  No Exploitative Rituals
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#FAF8F5] border border-[#E5DDD0] rounded-xl p-6 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#111D42] text-[#C59B48] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-[#111D42]">
                Discuss Your Life Concern Directly
              </h3>
              <p className="text-xs text-[#586274] leading-relaxed">
                Speak directly with Astrologer Kamal Shastri for clear, calm, and confidential guidance.
              </p>
              <a
                href={`tel:${primaryPhone}`}
                className="inline-block w-full py-2.5 px-4 rounded-lg bg-[#111D42] text-[#F7F4EC] text-xs font-bold uppercase tracking-wider hover:bg-[#1C2C63] transition-colors"
              >
                Call: {displayPhone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. AREAS OF ASTROLOGY GUIDANCE (5 Primary Domains) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
            Comprehensive Consultation Disciplines
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111D42]">
            Core Areas of Vedic Astrology Consultation
          </h2>
          <p className="text-sm text-[#4E586E]">
            A structured approach combining classical astronomical calculation with compassionate, mature counseling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Kundli & Horoscope */}
          <div className="bg-white border border-[#E2DBCF] rounded-xl p-6 space-y-4 hover:border-[#C59B48] transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] text-[#856123] flex items-center justify-center group-hover:bg-[#111D42] group-hover:text-[#C59B48] transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#111D42]">
              Kundli & Horoscope Analysis
            </h3>
            <p className="text-xs sm:text-sm text-[#4E586E] leading-relaxed">
              Detailed study of the 12 houses, planetary placements, active Mahadashas, and transit (Gochar) effects to clarify life timing and natural strengths.
            </p>
            <div className="pt-2">
              <Link href="/kundli-analysis" className="text-xs font-bold text-[#9D7729] hover:underline flex items-center gap-1">
                <span>Learn about Kundli Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Marriage & Relationships */}
          <div className="bg-white border border-[#E2DBCF] rounded-xl p-6 space-y-4 hover:border-[#C59B48] transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] text-rose-700 flex items-center justify-center group-hover:bg-[#111D42] group-hover:text-rose-400 transition-colors">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#111D42]">
              Marriage & Relational Harmony
            </h3>
            <p className="text-xs sm:text-sm text-[#4E586E] leading-relaxed">
              Ashtakoot Gun Milan, Mangal Dosha verification, in-law family friction, and emotional compatibility counseling across D1 and D9 charts.
            </p>
            <div className="pt-2">
              <Link href="/marriage-problem-solution" className="text-xs font-bold text-[#9D7729] hover:underline flex items-center gap-1">
                <span>Explore Marriage Guidance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 3: Career & Business */}
          <div className="bg-white border border-[#E2DBCF] rounded-xl p-6 space-y-4 hover:border-[#C59B48] transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] text-emerald-700 flex items-center justify-center group-hover:bg-[#111D42] group-hover:text-emerald-400 transition-colors">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#111D42]">
              Career & Business Trajectory
            </h3>
            <p className="text-xs sm:text-sm text-[#4E586E] leading-relaxed">
              Navigating professional stagnation, job transitions, appraisals, commercial partnership synergy, and expansion timing through the 10th house and D10 chart.
            </p>
            <div className="pt-2">
              <Link href="/career-problem-solution" className="text-xs font-bold text-[#9D7729] hover:underline flex items-center gap-1">
                <span>Explore Career Astrology</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4: Dosha Analysis & Remedies */}
          <div className="bg-white border border-[#E2DBCF] rounded-xl p-6 space-y-4 hover:border-[#C59B48] transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] text-amber-700 flex items-center justify-center group-hover:bg-[#111D42] group-hover:text-amber-400 transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#111D42]">
              Ethical Dosha Analysis
            </h3>
            <p className="text-xs sm:text-sm text-[#4E586E] leading-relaxed">
              Rigorous, non-superstitious evaluation of Manglik Dosha, Kalsarpa Yoga, Pitra Dosha, and Shani Sade Sati with accessible sattvic remedies.
            </p>
            <div className="pt-2">
              <Link href="/dosha-analysis" className="text-xs font-bold text-[#9D7729] hover:underline flex items-center gap-1">
                <span>View Dosha Diagnostics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 5: Vastu & Space Harmony */}
          <div className="bg-white border border-[#E2DBCF] rounded-xl p-6 space-y-4 hover:border-[#C59B48] transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] text-indigo-700 flex items-center justify-center group-hover:bg-[#111D42] group-hover:text-indigo-400 transition-colors">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#111D42]">
              Vedic Vastu Shastra Guidance
            </h3>
            <p className="text-xs sm:text-sm text-[#4E586E] leading-relaxed">
              Non-destructive spatial harmonization for residential and commercial premises, balancing the 5 elements without wall demolitions.
            </p>
            <div className="pt-2">
              <Link href="/vastu-guidance" className="text-xs font-bold text-[#9D7729] hover:underline flex items-center gap-1">
                <span>Discover Vastu Guidance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 6: Traditional Pujas & Gemstones */}
          <div className="bg-white border border-[#E2DBCF] rounded-xl p-6 space-y-4 hover:border-[#C59B48] transition-colors group">
            <div className="w-10 h-10 rounded-lg bg-[#F4EFE6] text-purple-700 flex items-center justify-center group-hover:bg-[#111D42] group-hover:text-purple-400 transition-colors">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-heading text-lg font-bold text-[#111D42]">
              Traditional Pujas & Gemstones
            </h3>
            <p className="text-xs sm:text-sm text-[#4E586E] leading-relaxed">
              Scriptural Graha Shanti rituals, targeted mantra japa, and natural, certified gemstone recommendations based strictly on functional benefics.
            </p>
            <div className="pt-2">
              <Link href="/gemstone-consultation" className="text-xs font-bold text-[#9D7729] hover:underline flex items-center gap-1">
                <span>View Gemstone & Puja Guidance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SERVICES SHOWCASE WITH REAL DIVERSE LAYOUTS */}
      <section className="bg-[#F4EFE6] py-16 border-y border-[#E2DBCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
                Featured Consultations
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111D42]">
                Dedicated Astrology Service Pages
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs font-bold uppercase tracking-wider text-[#9D7729] hover:text-[#111D42] flex items-center gap-1"
            >
              <span>View Directory of All 21 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, idx) => (
              <div key={idx} className="bg-white border border-[#DDD4C4] rounded-xl overflow-hidden shadow-xs flex flex-col justify-between">
                <div>
                  <img
                    src={service.heroImage}
                    alt={`${service.title} - Astrologer Kamal Shastri`}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#856123] block">
                      {service.tag}
                    </span>
                    <h3 className="font-heading text-base font-bold text-[#111D42] line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#525B6C] line-clamp-3 leading-relaxed">
                      {service.shortSummary}
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <Link
                    href={`/${service.slug}`}
                    className="inline-flex items-center justify-between w-full py-2 px-3 rounded-lg bg-[#FAF8F5] border border-[#E4DCCE] text-xs font-semibold text-[#111D42] hover:bg-[#111D42] hover:text-[#F7F4EC] transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CONSULT ASTROLOGER KAMAL SHASTRI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
              Ethical Practice & Standards
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111D42]">
              Why Consult Astrologer Kamal Shastri?
            </h2>
            <p className="text-sm sm:text-base text-[#3E4756] leading-relaxed">
              In a crowded digital environment filled with automated bot predictions, fearful claims, and exploitative commercial ceremonies, Astrologer Kamal Shastri upholds an honest, dignity-centered consultation standard.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#111D42] text-[#C59B48] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111D42]">Rigorous Manual Calculation</h4>
                  <p className="text-xs text-[#4E586E] leading-relaxed">
                    Every chart is cast manually using precise planetary ephemerides and cross-checked against harmonic divisional charts (Navamsha, Dashamsha, Saptamsha).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#111D42] text-[#C59B48] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111D42]">Zero Supernatural Claims</h4>
                  <p className="text-xs text-[#4E586E] leading-relaxed">
                    We strictly reject claims of "guaranteed returns of lovers", "overnight wealth magic", or fatalistic curses. Astrology illuminates natural tendencies, while your conscious choices always shape your actions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#111D42] text-[#C59B48] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111D42]">Accessible, Sattvic Remedies</h4>
                  <p className="text-xs text-[#4E586E] leading-relaxed">
                    Guidance centers on personal discipline, specific mantra japa, acts of charity (Dāna), lifestyle moderation, and genuine mental clarity rather than costly commercial rituals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#111D42] text-[#C59B48] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111D42]">Complete Confidentiality</h4>
                  <p className="text-xs text-[#4E586E] leading-relaxed">
                    Your personal circumstances, marital discussions, and birth data remain completely confidential between you and Astrologer Kamal Shastri.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#DED4C3] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1000&q=80"
                alt="Astrologer Kamal Shastri consultation room and Vedic charts"
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="p-6 bg-[#FAF8F5] border-t border-[#EAE3D6] flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#856123] uppercase tracking-wider block">
                    Direct Line to Astrologer
                  </span>
                  <a href={`tel:${primaryPhone}`} className="font-heading text-lg font-bold text-[#111D42] hover:text-[#9D7729]">
                    {displayPhone}
                  </a>
                </div>
                <a
                  href={`tel:${primaryPhone}`}
                  className="px-4 py-2 rounded-lg bg-[#111D42] text-[#F7F4EC] text-xs font-semibold uppercase tracking-wider hover:bg-[#1C2C63] transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STEP-BY-STEP CONSULTATION PROCESS */}
      <section className="bg-white py-16 border-y border-[#E2DBCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
              Clear & Transparent Flow
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111D42]">
              How Your Astrology Consultation Works
            </h2>
            <p className="text-sm text-[#4E586E]">
              From your initial birth information to personalized remedial guidance, here is our 4-step consultation structure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] space-y-3 relative">
              <span className="text-3xl font-heading font-extrabold text-[#C59B48]/50">01</span>
              <h3 className="font-heading text-base font-bold text-[#111D42]">
                Provide Birth Details
              </h3>
              <p className="text-xs text-[#525B6C] leading-relaxed">
                Submit your date of birth, exact time of birth, and place of birth via phone call or the consultation form.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] space-y-3 relative">
              <span className="text-3xl font-heading font-extrabold text-[#C59B48]/50">02</span>
              <h3 className="font-heading text-base font-bold text-[#111D42]">
                Manual Chart Casting
              </h3>
              <p className="text-xs text-[#525B6C] leading-relaxed">
                Astrologer Kamal Shastri personally casts your D1, D9, and relevant divisional charts and evaluates active Mahadashas.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] space-y-3 relative">
              <span className="text-3xl font-heading font-extrabold text-[#C59B48]/50">03</span>
              <h3 className="font-heading text-base font-bold text-[#111D42]">
                Direct Consultation
              </h3>
              <p className="text-xs text-[#525B6C] leading-relaxed">
                A dedicated, unhurried one-on-one telephone session to discuss your queries, career hurdles, relationship dynamics, or choices.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#FAF8F5] border border-[#EAE3D6] space-y-3 relative">
              <span className="text-3xl font-heading font-extrabold text-[#C59B48]/50">04</span>
              <h3 className="font-heading text-base font-bold text-[#111D42]">
                Remedial Roadmap
              </h3>
              <p className="text-xs text-[#525B6C] leading-relaxed">
                Receive practical, grounded advice including favorable timing windows, specific mantra sadhana, and ethical charity recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. AUTHENTIC CLIENT FEEDBACK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
            Authentic Consultation Feedback
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111D42]">
            Reflections from Verified Consultations
          </h2>
          <p className="text-xs sm:text-sm text-[#4E586E]">
            Client anonymity is respected. Below are reflections on consultation tone, timing accuracy, and professional guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VERIFIED_REVIEWS.slice(0, 3).map((review) => (
            <div key={review.id} className="bg-white border border-[#E2DBCF] rounded-xl p-6 space-y-4 shadow-xs flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#EAE3D6] pb-3">
                  <div>
                    <span className="font-bold text-sm text-[#111D42] block">{review.name}</span>
                    <span className="text-[11px] text-stone-500">{review.location}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-sm bg-[#F4EFE6] text-[#856123]">
                    {review.date}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#9D7729] block">
                  Service: {review.serviceReceived}
                </span>
                <p className="text-xs sm:text-sm text-[#4E586E] italic leading-relaxed">
                  "{review.feedback}"
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#EAE3D6]">
                {review.highlights.map((h, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded-full bg-stone-100 text-stone-600 font-medium">
                    ✓ {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#9D7729] hover:underline"
          >
            <span>Read More Verified Feedback On Reviews Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 8. INTERACTIVE CONSULTATION FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <ConsultationForm
          defaultService="Vedic Kundli & Comprehensive Life Guidance"
          title="Connect with Astrologer Kamal Shastri"
          subtitle="Submit your birth data below or directly call +91 9887952163 to discuss your concerns."
        />
      </section>

      {/* OFFICIAL EXTERNAL WEB DIRECTORY */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF8F5] border border-[#E2DBCF] rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#C59B48]" />
              <span className="text-xs uppercase tracking-widest text-[#856123] font-bold">
                Official Web Portal Directory
              </span>
            </div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#111D42]">
              astrologerkamal.com External Reference Links
            </h2>
            <p className="text-xs sm:text-sm text-[#525B6C] max-w-2xl leading-relaxed">
              Direct external links to the original web portal articles, profile, and consultation disciplines on the official domain.
            </p>
          </div>

          {/* Core Portal Pages */}
          <div className="space-y-3 pt-2 border-t border-[#EAE3D6]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111D42]">
              Main Website Pages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {EXTERNAL_SITE_LINKS.mainPages.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white border border-[#E2DBCF] hover:border-[#C59B48] hover:bg-[#FAF0DC]/40 transition-colors flex items-center justify-between text-xs font-semibold text-[#111D42] shadow-2xs group"
                >
                  <span className="truncate">{item.label}</span>
                  <ExternalLink className="w-3 h-3 text-[#C59B48] group-hover:translate-x-0.5 transition-transform shrink-0 ml-1" />
                </a>
              ))}
            </div>
          </div>

          {/* All 21 Service Pages */}
          <div className="space-y-3 pt-4 border-t border-[#EAE3D6]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#111D42]">
              Official Service Pages (21 Consultations)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs">
              {EXTERNAL_SITE_LINKS.services.map((item) => (
                <a
                  key={item.slug}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 px-3 rounded-lg bg-white border border-[#E4DCCE] hover:border-[#C59B48] hover:bg-[#FAF0DC]/30 transition-colors flex items-center justify-between text-[#3E4756] hover:text-[#111D42] group"
                >
                  <span className="truncate">{item.title}</span>
                  <ExternalLink className="w-3 h-3 text-[#C59B48] group-hover:translate-x-0.5 transition-transform shrink-0 ml-2" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. DETAILED FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
            Frequently Asked Questions
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#111D42]">
            Common Inquiries About Astrology Consultations in India
          </h2>
        </div>

        <div className="space-y-4 pt-4">
          {faqs.map((faq, idx) => (
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

      {/* 10. STRONG FINAL CONSULTATION CTA */}
      <section className="bg-[#111D42] text-[#F7F4EC] py-14 border-t border-[#1E2D5C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-[#1C2C63] text-xs font-semibold text-[#E6C687] uppercase tracking-wider">
            Direct Vedic Astrology Guidance
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Ready to Gain Clarity on Your Life Decisions?
          </h2>
          <p className="text-sm sm:text-base text-[#DCE2EE] max-w-2xl mx-auto leading-relaxed">
            Speak directly with Astrologer Kamal Shastri. Experience calm, grounded, and ethical astrological consultation tailored to your unique birth chart.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${primaryPhone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl bg-[#C59B48] text-[#0B132B] font-bold text-sm uppercase tracking-wider hover:bg-[#D4AF37] transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Astrologer: {displayPhone}</span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition-colors border border-white/20"
            >
              <span>View Appointment Info</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
