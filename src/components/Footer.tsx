import { Phone, Mail, Globe, Sparkles, ShieldCheck, Heart, ExternalLink } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { OFFICIAL_MAIN_LINKS, EXTERNAL_SERVICE_LINKS } from '../data/externalLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B132B] text-[#DCE2EE] pt-14 pb-24 lg:pb-12 border-t border-[#1C2951]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#1E2E5B]">
          {/* Brand & Introduction */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#1C2A55] text-[#C59B48] flex items-center justify-center border border-[#C59B48]/40">
                <Sparkles className="w-4 h-4 text-[#C59B48]" />
              </div>
              <span className="font-heading text-xl font-bold text-[#F7F4EC] tracking-tight">
                Astrologer Kamal Shastri
              </span>
            </div>

            <p className="text-sm text-[#A5B0C7] leading-relaxed max-w-md">
              Astrologer Kamal Shastri provides personalized Vedic astrology guidance across areas such as relationships, marriage, career, business, Kundli analysis, numerology, Vastu, and traditional remedial guidance. Founded upon authentic scriptural Jyotish principles without supernatural guarantees.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-[#F7F4EC]">
                <Phone className="w-4 h-4 text-[#C59B48] shrink-0" />
                <a href="tel:+919887952163" className="hover:text-[#C59B48] font-medium transition-colors">
                  +91 9887952163
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-[#A5B0C7]">
                <Globe className="w-4 h-4 text-[#C59B48] shrink-0" />
                <a
                  href={OFFICIAL_MAIN_LINKS.home.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C59B48] flex items-center gap-1.5 transition-colors font-medium text-[#F7F4EC]"
                >
                  <span>Official Website: astrologerkamal.com</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C59B48]" />
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="tel:+919887952163"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C59B48] text-[#0B132B] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Astrologer</span>
              </a>
              <a
                href={OFFICIAL_MAIN_LINKS.home.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#C59B48]/50 text-[#C59B48] hover:bg-[#C59B48]/10 text-xs font-semibold transition-colors"
              >
                <span>Visit Main Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold text-[#F7F4EC] tracking-wider uppercase border-b border-[#1E2E5B] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#A5B0C7]">
              <li>
                <Link href="/" className="hover:text-[#F7F4EC] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F7F4EC] transition-colors">About Astrologer Kamal Shastri</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F7F4EC] transition-colors">All 21 Services</Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-[#F7F4EC] transition-colors">Client Reviews</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F7F4EC] transition-colors">Contact & Booking</Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-[#F7F4EC] transition-colors">Ethical Disclaimer</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#F7F4EC] transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#F7F4EC] transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Core Astrology & Kundli Services */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold text-[#F7F4EC] tracking-wider uppercase border-b border-[#1E2E5B] pb-2">
              Astrology & Marriage
            </h4>
            <ul className="space-y-2 text-xs text-[#A5B0C7]">
              <li>
                <Link href="/kundli" className="hover:text-[#F7F4EC] transition-colors">Vedic Kundli</Link>
              </li>
              <li>
                <Link href="/kundli-analysis" className="hover:text-[#F7F4EC] transition-colors">Kundli Analysis</Link>
              </li>
              <li>
                <Link href="/kundli-matching" className="hover:text-[#F7F4EC] transition-colors">Kundli Matching</Link>
              </li>
              <li>
                <Link href="/marriage-problem-solution" className="hover:text-[#F7F4EC] transition-colors">Marriage Problem Solution</Link>
              </li>
              <li>
                <Link href="/love-problem-solution" className="hover:text-[#F7F4EC] transition-colors">Love Problem Solution</Link>
              </li>
              <li>
                <Link href="/relationship-guidance" className="hover:text-[#F7F4EC] transition-colors">Relationship Guidance</Link>
              </li>
              <li>
                <Link href="/matchmaking" className="hover:text-[#F7F4EC] transition-colors">Vedic Matchmaking</Link>
              </li>
              <li>
                <Link href="/dosha-analysis" className="hover:text-[#F7F4EC] transition-colors">Dosha Analysis & Remedies</Link>
              </li>
            </ul>
          </div>

          {/* Career, Wealth & Guidance Services */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold text-[#F7F4EC] tracking-wider uppercase border-b border-[#1E2E5B] pb-2">
              Career, Wealth & Vastu
            </h4>
            <ul className="space-y-2 text-xs text-[#A5B0C7]">
              <li>
                <Link href="/career-problem-solution" className="hover:text-[#F7F4EC] transition-colors">Career Problem Solution</Link>
              </li>
              <li>
                <Link href="/business-problem-solution" className="hover:text-[#F7F4EC] transition-colors">Business Problem Solution</Link>
              </li>
              <li>
                <Link href="/financial-astrology" className="hover:text-[#F7F4EC] transition-colors">Financial Astrology</Link>
              </li>
              <li>
                <Link href="/life-path-guidance" className="hover:text-[#F7F4EC] transition-colors">Life Path Guidance</Link>
              </li>
              <li>
                <Link href="/vastu-guidance" className="hover:text-[#F7F4EC] transition-colors">Vastu Shastra Guidance</Link>
              </li>
              <li>
                <Link href="/gemstone-consultation" className="hover:text-[#F7F4EC] transition-colors">Gemstone Consultation</Link>
              </li>
              <li>
                <Link href="/traditional-puja-remedies" className="hover:text-[#F7F4EC] transition-colors">Traditional Puja Remedies</Link>
              </li>
              <li>
                <Link href="/child-astrology" className="hover:text-[#F7F4EC] transition-colors">Child Astrology</Link>
              </li>
              <li>
                <Link href="/numerology-guidance" className="hover:text-[#F7F4EC] transition-colors">Numerology Guidance</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Official Website External Links Directory (astrologerkamal.com) */}
        <div className="py-8 border-b border-[#1E2E5B] space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[#C59B48]">
              <Globe className="w-4 h-4" />
              <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-[#F7F4EC]">
                Official Website External Links Directory (astrologerkamal.com)
              </h3>
            </div>
            <a
              href="https://astrologerkamal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#C59B48] hover:text-[#D4AF37] inline-flex items-center gap-1"
            >
              <span>Visit Primary Domain (astrologerkamal.com)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <p className="text-xs text-[#8E9AB6] leading-relaxed">
            All primary authority publications and canonical consultations are maintained on Astrologer Kamal Shastri's primary portal. Use the external links below to explore the official domain resources directly:
          </p>

          {/* Primary Main External Links */}
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-wider text-[#A5B0C7] font-semibold block">
              Primary Official Pages:
            </span>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href="https://astrologerkamal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#142045] text-[#DCE2EE] hover:text-white hover:bg-[#1E2E5B] border border-[#233566] transition-colors"
              >
                <span>astrologerkamal.com/ (Home)</span>
                <ExternalLink className="w-3 h-3 text-[#C59B48]" />
              </a>
              <a
                href="https://astrologerkamal.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#142045] text-[#DCE2EE] hover:text-white hover:bg-[#1E2E5B] border border-[#233566] transition-colors"
              >
                <span>astrologerkamal.com/about</span>
                <ExternalLink className="w-3 h-3 text-[#C59B48]" />
              </a>
              <a
                href="https://astrologerkamal.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#142045] text-[#DCE2EE] hover:text-white hover:bg-[#1E2E5B] border border-[#233566] transition-colors"
              >
                <span>astrologerkamal.com/services</span>
                <ExternalLink className="w-3 h-3 text-[#C59B48]" />
              </a>
              <a
                href="https://astrologerkamal.com/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#142045] text-[#DCE2EE] hover:text-white hover:bg-[#1E2E5B] border border-[#233566] transition-colors"
              >
                <span>astrologerkamal.com/reviews</span>
                <ExternalLink className="w-3 h-3 text-[#C59B48]" />
              </a>
              <a
                href="https://astrologerkamal.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#142045] text-[#DCE2EE] hover:text-white hover:bg-[#1E2E5B] border border-[#233566] transition-colors"
              >
                <span>astrologerkamal.com/contact</span>
                <ExternalLink className="w-3 h-3 text-[#C59B48]" />
              </a>
            </div>
          </div>

          {/* 21 External Service Links */}
          <div className="space-y-2 pt-1">
            <span className="text-[11px] uppercase tracking-wider text-[#A5B0C7] font-semibold block">
              Official Astrology Services External Links (21 Disciplines):
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-xs">
              {Object.entries(EXTERNAL_SERVICE_LINKS).map(([slug, url]) => (
                <a
                  key={slug}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between p-2 rounded-lg bg-[#111A38] text-[#B8C4DC] hover:text-[#F7F4EC] hover:bg-[#1A2750] border border-[#1C2C59] transition-colors group"
                >
                  <span className="truncate pr-1 capitalize">{slug.replace(/-/g, ' ')}</span>
                  <ExternalLink className="w-3 h-3 text-[#C59B48] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Ethical Disclaimer Box */}
        <div className="py-6 border-b border-[#1E2E5B] text-xs text-[#8E9AB6] space-y-2">
          <div className="flex items-center gap-2 text-[#C59B48] font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Ethical Standards & Guidance Notice</span>
          </div>
          <p className="leading-relaxed">
            Astrology consultations with Astrologer Kamal Shastri are intended for personal guidance, self-reflection, and spiritual insight. Astrology is an advisory discipline rooted in classical Indian traditions; it should not substitute for qualified medical diagnosis, psychological therapy, legal counsel, or financial planning from licensed professionals. We do not make supernatural guarantees, instant miracle promises, or fatalistic assertions. Client personal information and birth data are kept strictly private.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#7A86A2]">
          <p>
            © {currentYear} Astrologer Kamal Shastri. All Rights Reserved. Primary official website:{' '}
            <a
              href="https://astrologerkamal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C59B48] hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <span>astrologerkamal.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
          <div className="flex items-center gap-4">
            <Link href="/disclaimer" className="hover:text-[#DCE2EE]">Disclaimer</Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-[#DCE2EE]">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms-and-conditions" className="hover:text-[#DCE2EE]">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
