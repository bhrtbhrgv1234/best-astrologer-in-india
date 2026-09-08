import { ShieldAlert, Phone } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { buildBreadcrumbSchema } from '../utils/seo';

export function DisclaimerPage() {
  const primaryPhone = '+919887952163';
  const displayPhone = '+91 9887952163';

  const breadcrumbs = [
    { label: 'Ethical & Legal Disclaimer', url: '/disclaimer' }
  ];

  return (
    <div className="space-y-12 pb-16">
      <SEOHead
        title="Ethical & Legal Disclaimer | Astrologer Kamal Shastri"
        description="Official disclaimer regarding Vedic astrology consultations, spiritual guidance, and ethical standards by Astrologer Kamal Shastri."
        canonicalPath="/disclaimer"
        schema={buildBreadcrumbSchema(breadcrumbs)}
      />

      <Breadcrumbs items={breadcrumbs} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
            Ethical Governance
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111D42]">
            Ethical & Legal Disclaimer
          </h1>
          <p className="text-xs text-stone-500">
            Last Updated: January 2026 | Astrologer Kamal Shastri (astrologerkamal.com)
          </p>
        </div>

        <div className="bg-white border border-[#E2DBCF] rounded-2xl p-6 sm:p-8 space-y-6 text-sm text-[#3E4756] leading-relaxed shadow-xs">
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-amber-900">
            <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm font-medium leading-relaxed">
              Astrology consultations with Astrologer Kamal Shastri are intended strictly for personal guidance, self-reflection, and spiritual insight. Astrology is an interpretive discipline based upon traditional Vedic calculations and should not be used as an absolute or deterministic substitute for professional licensed services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#111D42]">
              1. Not Medical, Psychiatric, or Legal Advice
            </h2>
            <p>
              The guidance provided during any consultation does not constitute medical diagnosis, mental health counseling, psychiatric care, legal representation, or certified financial advisory services. If you are experiencing serious medical conditions, acute psychological distress, or legal disputes, you are urged to seek prompt assistance from qualified and licensed healthcare or legal professionals.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#111D42]">
              2. Absence of Supernatural Guarantees
            </h2>
            <p>
              Astrologer Kamal Shastri strictly disclaims and condemns fraudulent claims commonly seen in commercial astrology, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-[#525B6C]">
              <li>Guarantees of "100% instant reunion with ex-partners or lovers".</li>
              <li>Promises of overnight lottery winnings or unearned financial windfalls.</li>
              <li>Assertions of supernatural spells, black magic removal, or vashikaran claims.</li>
              <li>Fatalistic predictions that deny the power of individual human agency (Purushartha).</li>
            </ul>
            <p>
              Planetary alignments indicate natural cycles, tendencies, and atmospheric karmic pressures; the outcome of any situation depends upon individual effort, environment, and moral choices.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#111D42]">
              3. Nature of Traditional Remedies (Upayas)
            </h2>
            <p>
              Remedial recommendations—including Vedic mantra japa, acts of charity (Dāna), lifestyle discipline, fasting (Vrata), and gemstone consultation—are rooted in traditional Indian cultural practices designed to cultivate inner tranquility, positive mindset, and spiritual clarity. They are elective and non-coercive.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#111D42]">
              4. Accuracy of Birth Information
            </h2>
            <p>
              Astrological chart casting relies upon the precision of the birth coordinates provided by the client. Errors or uncertainties in the exact date, time, or location of birth may alter ascendant degrees, planetary houses, and divisional charts. Clients are encouraged to verify birth times from official hospital or civic records.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#111D42]">
              5. Client Autonomy
            </h2>
            <p>
              All decisions made by the client following a consultation remain entirely the client's own moral, financial, and legal responsibility. By consulting with Astrologer Kamal Shastri, you acknowledge and agree that you exercise your own free will in all life matters.
            </p>
          </div>

          <div className="pt-4 border-t border-[#EAE3D6] text-xs text-stone-500">
            For inquiries regarding our consultation standards, you may contact Astrologer Kamal Shastri at <a href={`tel:${primaryPhone}`} className="text-[#9D7729] font-bold">{displayPhone}</a>.
          </div>
        </div>
      </section>
    </div>
  );
}
