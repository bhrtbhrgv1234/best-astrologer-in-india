import { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X, ChevronDown, Compass, Sparkles, Heart, Briefcase, ShieldCheck, Sun, ExternalLink } from 'lucide-react';
import { Link, useRouter } from '../context/RouterContext';

export function Navbar() {
  const { currentPath } = useRouter();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  // Click outside listener for services dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceCategories = [
    {
      title: 'Astrology & Kundli',
      icon: Compass,
      color: 'text-amber-700',
      items: [
        { name: 'Vedic Kundli', path: '/kundli' },
        { name: 'In-Depth Kundli Analysis', path: '/kundli-analysis' },
        { name: 'Kundli Matching', path: '/kundli-matching' },
        { name: 'Dosha Analysis & Remedies', path: '/dosha-analysis' },
        { name: 'Panchang Guidance', path: '/panchang' },
        { name: 'Auspicious Muhurat', path: '/muhurat-guidance' },
      ]
    },
    {
      title: 'Relationships & Marriage',
      icon: Heart,
      color: 'text-rose-700',
      items: [
        { name: 'Love Problem Solution', path: '/love-problem-solution' },
        { name: 'Relationship Guidance', path: '/relationship-guidance' },
        { name: 'Marriage Problem Solution', path: '/marriage-problem-solution' },
        { name: 'Vedic Matchmaking', path: '/matchmaking' },
      ]
    },
    {
      title: 'Career & Wealth',
      icon: Briefcase,
      color: 'text-emerald-700',
      items: [
        { name: 'Career Problem Solution', path: '/career-problem-solution' },
        { name: 'Business Problem Solution', path: '/business-problem-solution' },
        { name: 'Financial Astrology', path: '/financial-astrology' },
        { name: 'Life Path Guidance', path: '/life-path-guidance' },
      ]
    },
    {
      title: 'Spiritual & Remedial',
      icon: Sparkles,
      color: 'text-indigo-700',
      items: [
        { name: 'Traditional Puja Remedies', path: '/traditional-puja-remedies' },
        { name: 'Gemstone Consultation', path: '/gemstone-consultation' },
        { name: 'Vastu Shastra Guidance', path: '/vastu-guidance' },
      ]
    },
    {
      title: 'Personal & Family',
      icon: Sun,
      color: 'text-orange-700',
      items: [
        { name: 'Child Astrology', path: '/child-astrology' },
        { name: 'Family Problem Solution', path: '/family-problem-solution' },
        { name: 'Numerology Guidance', path: '/numerology-guidance' },
        { name: 'Tarot Guidance', path: '/tarot-guidance' },
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D5] transition-all">
      {/* Top Banner with phone & trust note */}
      <div className="bg-[#111D42] text-[#F7F4EC] text-xs py-2 px-4 border-b border-[#1E2D5C]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="tracking-wide">Direct Vedic Astrology Consultations | Ethical, Scriptural Guidance</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:+919887952163" 
              className="flex items-center gap-1.5 text-[#E6C687] hover:text-white font-medium transition-colors"
              title="Call Astrologer Kamal Shastri"
            >
              <Phone className="w-3.5 h-3.5 text-[#E6C687]" />
              <span>+91 9887952163</span>
            </a>
            <span className="hidden md:inline text-stone-400">|</span>
            <a
              href="https://astrologerkamal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-[#E6C687] hover:text-white font-semibold transition-colors"
              title="Visit official website astrologerkamal.com"
            >
              <span>astrologerkamal.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#111D42] text-[#C59B48] flex items-center justify-center border border-[#C59B48]/30 group-hover:border-[#C59B48] transition-colors shadow-xs">
            <Sparkles className="w-5 h-5 text-[#C59B48]" />
          </div>
          <div>
            <span className="block font-heading text-lg sm:text-xl font-bold text-[#111D42] tracking-tight group-hover:text-[#9D7729] transition-colors">
              Astrologer Kamal Shastri
            </span>
            <span className="block text-[11px] uppercase tracking-widest text-[#856123] font-semibold">
              Vedic Astrology In India
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#2C3446]">
          <Link 
            href="/" 
            className={`hover:text-[#9D7729] transition-colors ${currentPath === '/' ? 'text-[#9D7729] font-semibold' : ''}`}
          >
            Home
          </Link>

          <Link 
            href="/about" 
            className={`hover:text-[#9D7729] transition-colors ${currentPath === '/about' ? 'text-[#9D7729] font-semibold' : ''}`}
          >
            About
          </Link>

          {/* Mega Menu Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              onMouseEnter={() => setIsServicesOpen(true)}
              className={`flex items-center gap-1.5 hover:text-[#9D7729] transition-colors cursor-pointer py-2 ${
                currentPath.startsWith('/services') || isServicesOpen ? 'text-[#9D7729] font-semibold' : ''
              }`}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180 text-[#9D7729]' : ''}`} />
            </button>

            {/* Mega Menu Panel */}
            {isServicesOpen && (
              <div 
                onMouseLeave={() => setIsServicesOpen(false)}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[900px] bg-[#FAF8F5] border border-[#E2DBCF] rounded-xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="flex justify-between items-center pb-3 mb-4 border-b border-[#EBE4D8]">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C59B48]" />
                    <span className="text-xs font-semibold text-[#111D42] uppercase tracking-wider">
                      Vedic Astrology Consultation Services
                    </span>
                  </div>
                  <Link 
                    href="/services" 
                    className="text-xs font-semibold text-[#9D7729] hover:underline"
                  >
                    View All 21 Services Directory →
                  </Link>
                </div>

                <div className="grid grid-cols-5 gap-6">
                  {serviceCategories.map((category, catIdx) => {
                    const Icon = category.icon;
                    return (
                      <div key={catIdx} className="space-y-2.5">
                        <div className="flex items-center gap-1.5 pb-1 border-b border-[#EAE3D6]">
                          <Icon className={`w-3.5 h-3.5 ${category.color}`} />
                          <h4 className="text-xs font-bold text-[#111D42] tracking-wide">
                            {category.title}
                          </h4>
                        </div>
                        <ul className="space-y-1.5 text-xs">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.path}
                                className={`block py-1 px-1.5 rounded-md hover:bg-[#F2ECE0] text-[#3E4756] hover:text-[#111D42] transition-colors ${
                                  currentPath === item.path ? 'bg-[#EAE1D2] text-[#111D42] font-semibold' : ''
                                }`}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#EAE3D6] bg-[#F4EFE6] -mx-6 -mb-6 p-4 rounded-b-xl flex justify-between items-center text-xs text-[#525B6C]">
                  <span>Need help selecting the right consultation? Call directly for guidance.</span>
                  <a 
                    href="tel:+919887952163" 
                    className="font-semibold text-[#111D42] hover:text-[#9D7729] flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C59B48]" />
                    <span>Talk to Astrologer: +91 9887952163</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          <Link 
            href="/reviews" 
            className={`hover:text-[#9D7729] transition-colors ${currentPath === '/reviews' ? 'text-[#9D7729] font-semibold' : ''}`}
          >
            Reviews
          </Link>

          <Link 
            href="/contact" 
            className={`hover:text-[#9D7729] transition-colors ${currentPath === '/contact' ? 'text-[#9D7729] font-semibold' : ''}`}
          >
            Contact
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href="https://astrologerkamal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#C59B48]/60 text-[#856123] hover:bg-[#C59B48]/10 text-xs font-bold transition-all"
            title="Visit official website: https://astrologerkamal.com/"
          >
            <span>Main Site</span>
            <ExternalLink className="w-3 h-3 text-[#C59B48]" />
          </a>
          <a
            href="tel:+919887952163"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111D42] text-[#F7F4EC] text-sm font-semibold hover:bg-[#1C2C63] transition-all shadow-xs group"
          >
            <Phone className="w-4 h-4 text-[#C59B48] group-hover:scale-110 transition-transform" />
            <span>Call Astrologer</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#111D42] hover:bg-[#EFE9DD] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E2D5] bg-[#FAF8F5] px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-2">
            <Link
              href="/"
              className={`block py-2.5 px-3 rounded-lg text-base font-medium ${
                currentPath === '/' ? 'bg-[#EAE1D2] text-[#111D42] font-semibold' : 'text-[#2C3446]'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`block py-2.5 px-3 rounded-lg text-base font-medium ${
                currentPath === '/about' ? 'bg-[#EAE1D2] text-[#111D42] font-semibold' : 'text-[#2C3446]'
              }`}
            >
              About Astrologer Kamal Shastri
            </Link>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-medium text-[#2C3446]"
              >
                <span>Services (21 Disciplines)</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#9D7729]' : ''}`} />
              </button>

              {mobileServicesOpen && (
                <div className="mt-2 pl-3 space-y-4 border-l-2 border-[#E2DBCF] ml-2">
                  <Link
                    href="/services"
                    className="block py-1 text-sm font-semibold text-[#9D7729]"
                  >
                    View All Services Overview →
                  </Link>
                  {serviceCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
                        {cat.title}
                      </span>
                      {cat.items.map((item, itemIdx) => (
                        <Link
                          key={itemIdx}
                          href={item.path}
                          className={`block py-1 text-sm ${
                            currentPath === item.path ? 'text-[#111D42] font-bold' : 'text-stone-700'
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/reviews"
              className={`block py-2.5 px-3 rounded-lg text-base font-medium ${
                currentPath === '/reviews' ? 'bg-[#EAE1D2] text-[#111D42] font-semibold' : 'text-[#2C3446]'
              }`}
            >
              Client Feedback & Reviews
            </Link>

            <Link
              href="/contact"
              className={`block py-2.5 px-3 rounded-lg text-base font-medium ${
                currentPath === '/contact' ? 'bg-[#EAE1D2] text-[#111D42] font-semibold' : 'text-[#2C3446]'
              }`}
            >
              Contact & Appointments
            </Link>

            <a
              href="https://astrologerkamal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2.5 px-3 rounded-lg text-base font-semibold text-[#856123] bg-[#F4EFE6] border border-[#E5DAC6] hover:bg-[#ECE4D3] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C59B48]" />
                <span>Official Site: astrologerkamal.com</span>
              </span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E8E2D5] space-y-3">
            <a
              href="tel:+919887952163"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#111D42] text-[#F7F4EC] font-semibold text-sm shadow-md"
            >
              <Phone className="w-4 h-4 text-[#C59B48]" />
              <span>Call Astrologer: +91 9887952163</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
