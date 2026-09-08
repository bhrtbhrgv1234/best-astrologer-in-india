import { SEOHead } from '../components/SEOHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { buildBreadcrumbSchema } from '../utils/seo';

export function TermsPage() {
  const breadcrumbs = [
    { label: 'Terms & Conditions', url: '/terms-and-conditions' }
  ];

  return (
    <div className="space-y-12 pb-16">
      <SEOHead
        title="Terms & Conditions | Astrologer Kamal Shastri"
        description="Terms and conditions governing Vedic astrology consultation services and website usage with Astrologer Kamal Shastri."
        canonicalPath="/terms-and-conditions"
        schema={buildBreadcrumbSchema(breadcrumbs)}
      />

      <Breadcrumbs items={breadcrumbs} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#856123] font-bold block">
            Service Agreement
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#111D42]">
            Terms & Conditions of Service
          </h1>
          <p className="text-xs text-stone-500">
            Last Updated: January 2026 | Astrologer Kamal Shastri (astrologerkamal.com)
          </p>
        </div>

        <div className="bg-white border border-[#E2DBCF] rounded-2xl p-6 sm:p-8 space-y-6 text-sm text-[#3E4756] leading-relaxed shadow-xs">
          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#111D42]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the website astrologerkamal.com or booking an astrology consultation with Astrologer Kamal Shastri, you confirm that you have read, understood, and agreed to be bound by these Terms and Conditions and the Ethical Disclaimer.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#111D42]">
              2. Eligibility
            </h2>
            <p>
              Consultations are provided exclusively to individuals aged 18 years and older. Inquiries regarding minor children (such as child education tendencies or birth star analysis) must be conducted with the child's legal parent or guardian.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#111D42]">
              3. Nature of Advisory Service
            </h2>
            <p>
              Vedic astrology is an ancient interpretive knowledge system. Interpretations, timing indications, and remedial suggestions represent an informed astrological perspective based upon classical shastras and cannot be guaranteed as definitive foreknowledge of future events.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#111D42]">
              4. Code of Conduct
            </h2>
            <p>
              Consultations must be conducted in an atmosphere of mutual respect. We reserve the right to decline or terminate a consultation if a client engages in abusive, threatening, or unlawful communication.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg font-bold text-[#111D42]">
              5. Contact
            </h2>
            <p>
              For any questions regarding these terms, you may reach out to Astrologer Kamal Shastri at +91 9887952163.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
