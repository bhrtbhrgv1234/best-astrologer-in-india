import { useState, FormEvent } from 'react';
import { Phone, Calendar, Clock, MapPin, User, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

interface ConsultationFormProps {
  defaultService?: string;
  title?: string;
  subtitle?: string;
}

export function ConsultationForm({
  defaultService = 'General Kundli & Life Guidance',
  title = 'Schedule Your Astrology Consultation',
  subtitle = 'Provide your birth details below. You can connect directly over phone or generate an instant WhatsApp consultation summary.'
}: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    service: defaultService,
    concern: '',
    preferredLanguage: 'Hindi / English'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const message = `Namaste Astrologer Kamal Shastri ji,\n\nI would like to schedule a consultation.\n*Name:* ${formData.name || 'Not specified'}\n*Phone:* ${formData.phone || 'Not specified'}\n*Date of Birth:* ${formData.birthDate || 'Not specified'}\n*Time of Birth:* ${formData.birthTime || 'Not specified'}\n*Place of Birth:* ${formData.birthPlace || 'Not specified'}\n*Service:* ${formData.service}\n*Key Concern:* ${formData.concern || 'General consultation'}\n*Language:* ${formData.preferredLanguage}`;
    const url = `https://wa.me/919887952163?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#FAF8F5] border border-[#E2DBCF] rounded-2xl p-6 sm:p-8 shadow-md">
      <div className="text-center max-w-xl mx-auto mb-6">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#111D42]">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {submitted ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-4">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h4 className="font-heading text-lg font-bold text-emerald-900">
            Details Prepared for Astrologer Kamal Shastri
          </h4>
          <p className="text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
            To immediately finalize your consultation time slot, please call directly at <strong className="font-bold text-emerald-950">+91 9887952163</strong> or transmit your filled details instantly via WhatsApp.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:+919887952163"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg bg-[#111D42] text-[#F7F4EC] text-sm font-semibold hover:bg-[#1C2C63] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C59B48]" />
              <span>Call Astrologer: +91 9887952163</span>
            </a>

            <button
              onClick={handleWhatsAppDirect}
              className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg bg-[#128C7E] text-white text-sm font-semibold hover:bg-[#075E54] transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send Details on WhatsApp</span>
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Your Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B48]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Mobile / WhatsApp Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 9887952163"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B48]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Date of Birth *
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                <input
                  type="date"
                  required
                  value={formData.birthDate}
                  onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B48]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Exact Time of Birth
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                <input
                  type="time"
                  value={formData.birthTime}
                  onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B48]"
                />
              </div>
              <span className="text-[10px] text-stone-500 mt-0.5 block">Approximate is acceptable if unknown</span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Place of Birth (City, State) *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Jaipur, Rajasthan"
                  value={formData.birthPlace}
                  onChange={(e) => setFormData({ ...formData, birthPlace: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B48]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Area of Guidance / Service
              </label>
              <input
                type="text"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B48]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Preferred Consultation Language
              </label>
              <select
                value={formData.preferredLanguage}
                onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B48]"
              >
                <option value="Hindi">Hindi (हिंदी)</option>
                <option value="English">English</option>
                <option value="Hindi / English">Hindi & English Bilingual</option>
                <option value="Rajasthani / Marwari">Rajasthani / Marwari</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Your Primary Concern or Question
            </label>
            <textarea
              rows={3}
              placeholder="Briefly describe your situation (e.g. career stagnation, marital friction, marriage timing, business launch)..."
              value={formData.concern}
              onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
              className="w-full px-3 py-2 text-sm border border-stone-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B48]"
            ></textarea>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#111D42] text-[#F7F4EC] text-sm font-semibold hover:bg-[#1C2C63] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#C59B48]" />
              <span>Review & Prepare Details</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#128C7E] text-white text-sm font-semibold hover:bg-[#075E54] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Message</span>
            </button>
          </div>

          <div className="pt-2 text-center text-[11px] text-stone-500">
            <span>🔒 Confidentiality Assured: Your birth details are used exclusively for chart analysis.</span>
          </div>
        </form>
      )}
    </div>
  );
}
