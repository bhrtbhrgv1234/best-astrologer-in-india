import { Phone, ArrowLeft, Home, Sparkles } from 'lucide-react';
import { Link } from '../context/RouterContext';
import { SEOHead } from '../components/SEOHead';

export function NotFoundPage() {
  const primaryPhone = '+919887952163';
  const displayPhone = '+91 9887952163';

  return (
    <div className="py-16 sm:py-24 text-center px-4">
      <SEOHead
        title="Page Not Found | Best Astrologer in India"
        description="The requested page could not be found. Return to Astrologer Kamal Shastri home or browse our 21 Vedic astrology consultation disciplines."
        canonicalPath="/404"
        noindex={true}
      />

      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#111D42] text-[#C59B48] flex items-center justify-center mx-auto">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-heading font-extrabold text-[#111D42]">404</span>
          <h1 className="font-heading text-2xl font-bold text-[#111D42]">
            Consultation Page Not Found
          </h1>
          <p className="text-sm text-[#4E586E] leading-relaxed">
            The astrology service or article you are looking for may have been updated or moved. You can return to the homepage or explore all 21 consultation disciplines.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg bg-[#111D42] text-[#F7F4EC] text-xs font-bold uppercase tracking-wider hover:bg-[#1C2C63] transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-[#C59B48]" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg bg-white border border-[#D5CBB9] text-[#111D42] text-xs font-bold uppercase tracking-wider hover:bg-[#F2ECE0] transition-colors"
          >
            <span>All 21 Services</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-[#EAE3D6] text-xs text-stone-500">
          Need immediate assistance? Call Astrologer Kamal Shastri directly: <a href={`tel:${primaryPhone}`} className="text-[#9D7729] font-bold">{displayPhone}</a>
        </div>
      </div>
    </div>
  );
}
