import AboutHero from "../../components/about/AboutHero";
import SectionHeader from "../../components/about/SectionHeader";
import InfoCard from "../../components/about/InfoCard";
import PillarGrid from "../../components/about/PillarGrid";
import Leadership from "../../components/about/Leadership";
import CallToServe from "../../components/about/CallToServe";
import Sponsors from "../../components/about/Sponsors";
import GovernanceLinks from "../../components/about/GovernanceLinks";

import {
  EXECUTIVE_COMMITTEE,
  TRUSTEES,
  GENERAL_COMMITTEE,
  IMPORTANT_LINKS,
  SPONSORS,
} from "../../data/about";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <AboutHero />

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl grid gap-4 md:grid-cols-2">
          <InfoCard title="Mission" icon="🎯">
            Promote cultural heritage, strengthen community bonds, and support meaningful social
            engagement—while contributing positively to the broader Central Ohio community.
          </InfoCard>
          <InfoCard title="Overview" icon="🌿">
            COMA brings together families, students, and professionals through celebrations,
            language and youth initiatives, and community service.
          </InfoCard>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <SectionHeader
            title="What We Do"
            subtitle="Four pillars that guide our programs and community work."
          />
          <PillarGrid />
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <SectionHeader
            title="Leadership"
            subtitle="COMA is guided by volunteer leaders who serve our community."
          />
         <Leadership
  executive={EXECUTIVE_COMMITTEE}
  trustees={TRUSTEES}
 
  general={GENERAL_COMMITTEE}
/>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <CallToServe />
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <SectionHeader
            title="Sponsors"
            subtitle="We’re grateful for the support that helps power our events and programs."
          />
          <Sponsors sponsors={SPONSORS} />
        </div>
      </section>

      <section className="px-4 pt-6 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <SectionHeader
            title="Governance & Documents"
            subtitle="Access COMA’s bylaws and nonprofit documentation."
          />
          <GovernanceLinks links={IMPORTANT_LINKS} />
          <p className="mt-6 text-center text-xs text-slate-500">
            Put PDFs in <span className="font-mono">/public/docs</span> and link them here.
          </p>
        </div>
      </section>
    </main>
  );
}
