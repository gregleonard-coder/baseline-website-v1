import SectionShell from "../components/SectionShell";
import type { StreamType } from "../types";

export default function ClarityPage({
  goToContact,
}: {
  goToContact: (stream: StreamType) => void;
}) {
  return (
    <section className="border-b border-stone-200 bg-gradient-to-b from-white to-stone-50">
      <SectionShell>
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A4A]">Project Clarity Sessions</div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#0F1E2F] md:text-5xl">Choose the Clarity Session that fits your project.</h1>
          <p className="text-lg leading-8 text-stone-700">
            Baseline offers tailored Project Clarity pathways for residential owners and commercial operators who need a stronger foundation before construction begins.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.75rem] border border-[#B8CCDF] bg-gradient-to-b from-[#EEF3F8] to-white p-8 shadow-sm">
            <div className="mb-3 text-2xl font-semibold text-[#0F1E2F]">Residential Project Clarity Session</div>
            <p className="mb-5 text-sm leading-6 text-stone-700">
              A structured first step for homeowners and investors planning renovations, backyard suites, multi-unit conversions, remediation projects, or new builds.
            </p>
            <ul className="mb-6 space-y-2 text-sm leading-6 text-stone-700">
              <li>• Intake call and on-site walkthrough</li>
              <li>• Feasibility and risk review</li>
              <li>• Budget and scope discussion</li>
              <li>• Written summary and action checklist</li>
            </ul>
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#2E5C89]">Starting at $950</div>
            <button onClick={() => goToContact("Residential")} className="inline-flex rounded-2xl bg-[#2E5C89] px-5 py-3 text-sm font-medium text-white hover:bg-[#244A6F]">Book a Residential Clarity Session</button>
          </div>

          <div className="rounded-[1.75rem] border border-[#D9C29A] bg-gradient-to-b from-[#F7F2E8] to-white p-8 shadow-sm">
            <div className="mb-3 text-2xl font-semibold text-[#0F1E2F]">Commercial Project Clarity Session</div>
            <p className="mb-5 text-sm leading-6 text-stone-700">
              A structured first step for operators planning fit-ups, capital upgrades, asset improvements, or multi-site rollout programs.
            </p>
            <ul className="mb-6 space-y-2 text-sm leading-6 text-stone-700">
              <li>• Intake discussion and project review</li>
              <li>• Scope, risk, and delivery analysis</li>
              <li>• Budget and procurement discussion</li>
              <li>• Written summary and next-step roadmap</li>
            </ul>
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#B08A4A]">Starting at $1,500</div>
            <button onClick={() => goToContact("Commercial")} className="inline-flex rounded-2xl bg-[#B08A4A] px-5 py-3 text-sm font-medium text-white hover:bg-[#9C7840]">Book a Commercial Clarity Session</button>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}