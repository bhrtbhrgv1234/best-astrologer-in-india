import { ShieldCheck } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

export function PrivacyPolicyPage() {
  const breadcrumbs = [
    { label: 'Privacy Policy', url: '/privacy-policy' }
  ];

  return (
    <div className="space-y-12 pb-16">
      <SEOHead
        title="Privacy Policy | Astrologer Kamal Shastri"
        description="Privacy policy outlining how birth information, telephone numbers, and consultation discussions are safeguarded by Astrologer Kamal Shastri."
        canonicalPath="/privacy-policy"
      />

      <Breadcrumbs items={breadcrumbs} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
            Data Protection & Confidentiality
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111D42]">
            Privacy Policy
          </h1>
          <p className="text-xs text-stone-500">
            Last Updated: January 2026 | Astrologer Kamal Shastri (astrologerkamal.com)
          </p>
        </div>

        <div className="bg-white border border-[#E2DBCF] rounded-2xl p-6 sm:p-8 space-y-6 text-sm text-[#3E4756] leading-relaxed shadow-xs">
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-900">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm font-medium leading-relaxed">
              We respect your right to total privacy. Personal details provided for horoscopic chart casting—such as your date, exact time, place of birth, and intimate personal concerns—are held in the strictest confidence and are never monetized or distributed.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#111D42]">
              1. Information We Collect
            </h2>
            <p>
              When you contact Astrologer Kamal Shastri for consultation services, we may collect the following details strictly necessary for generating your Vedic horoscope:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-[#525B6C]">
              <li>Full Name</li>
              <li>Contact phone number / WhatsApp number</li>
              <li>Date of birth, exact time of birth, and city/place of birth</li>
              <li>Partner's birth coordinates (in cases of Kundli matching or marital guidance)</li>
              <li>Specific questions or topics of inquiry shared during the consultation</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#111D42]">
              2. How Your Information Is Used
            </h2>
            <p>
              Your birth data is used exclusively to calculate planetary longitudes, ascendant houses, divisional charts (Vargas), and active Dasha sequences. We do not use your information for unsolicited commercial telemarketing, advertising networks, or third-party mailing lists.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#111D42]">
              3. Non-Disclosure & Confidentiality
            </h2>
            <p>
              Consultations are strictly one-on-one. Astrologer Kamal Shastri does not disclose client names, birth charts, or personal situations to third parties without explicit written authorization, unless compelled by applicable law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#111D42]">
              4. Contact Regarding Privacy
            </h2>
            <p>
              If you have any questions regarding your personal information or wish to request the deletion of your consultation records, please contact us directly by phone at +91 9887952163.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
