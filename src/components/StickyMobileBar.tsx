import { Phone, MessageSquare } from 'lucide-react';

export function StickyMobileBar() {
  const phone = '+919887952163';
  const whatsappUrl = `https://wa.me/919887952163?text=${encodeURIComponent('Namaste Astrologer Kamal Shastri ji, I would like to consult with you regarding Vedic astrology guidance.')}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#FAF8F5] border-t border-[#DED7C8] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] p-2.5 px-4 backdrop-blur-md">
      <div className="flex items-center gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#111D42] text-[#F7F4EC] font-semibold text-xs uppercase tracking-wider hover:bg-[#1C2C63] active:scale-98 transition-all shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#C59B48]" />
          <span>Call Astrologer</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#128C7E] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#075E54] active:scale-98 transition-all shadow-xs"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp Query</span>
        </a>
      </div>
    </div>
  );
}
