import { Image as ImageIcon } from "lucide-react";
import SectionShell from "../components/SectionShell";
import { residentialImages } from "../data";
import type { PageKey, StreamType } from "../types";

export default function ResidentialPage({
  goTo,
  goToContact,
}: {
  goTo: (page: PageKey) => void;
  goToContact: (stream: StreamType) => void;
}) {
  return (
    <>
      <section className="border-b border-stone-200 bg-gradient-to-b from-[#EEF3F8] to-white">
        <SectionShell>
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#2E5C89]">Residential</div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#0F1E2F] md:text-5xl">Residential construction advisory for homeowners and investors.</h1>
              <p className="mb-8 text-lg leading-8 text-stone-700">
                Baseline supports residential owners planning renovations, backyard suites, multi-unit conversions, remediation work, and new builds with independent guidance focused on the owner’s interests.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button onClick={() => goToContact("Residential")} className="rounded-2xl bg-[#2E5C89] px-6 py-3 text-sm font-medium text-white hover:bg-[#244A6F]">Book a Residential Clarity Session</button>
                <button onClick={() => goToContact("Residential")} className="rounded-2xl border border-stone-300 px-6 py-3 text-sm font-medium text-stone-900 hover:bg-white">Discuss Your Project</button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {residentialImages.map((image) => (
                <div key={image.src} className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm">
                  <img src={image.src} alt={image.alt} className="h-64 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </SectionShell>
      </section>

      <SectionShell>
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 text-2xl font-semibold text-[#0F1E2F]">What We Help With</div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Major renovations and additions",
                "Repairs and remediation",
                "Backyard suites and ADUs",
                "Multi-unit conversions",
                "New residential builds",
                "Project clarity and owner’s representation",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-sm text-stone-800 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-stone-200 bg-white p-8 shadow-sm">
            <div className="mb-4 flex items-center gap-3 text-lg font-semibold text-[#0F1E2F]"><ImageIcon className="h-5 w-5 text-[#2E5C89]" />How Baseline Helps</div>
            <ul className="space-y-4 text-sm leading-6 text-stone-700">
              <li><span className="font-semibold text-stone-900">Project planning:</span> early feasibility, scope review, and budget discussion before commitments are made.</li>
              <li><span className="font-semibold text-stone-900">Contractor review:</span> quote evaluation, scope gap identification, and owner-side decision support.</li>
              <li><span className="font-semibold text-stone-900">Delivery oversight:</span> progress tracking, documentation, and structured communication during the project.</li>
            </ul>
          </div>
        </div>
      </SectionShell>
    </>
  );
}