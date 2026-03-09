import { HardHat } from "lucide-react";
import SectionShell from "../components/SectionShell";
import { commercialImages } from "../data";
import type { PageKey, StreamType } from "../types";

export default function CommercialPage({
  goTo,
  goToContact,
}: {
  goTo: (page: PageKey) => void;
  goToContact: (stream: StreamType) => void;
}) {
  return (
    <>
      <section className="border-b border-stone-200 bg-gradient-to-b from-[#F7F2E8] to-white">
        <SectionShell>
          <div className="grid gap-10 md:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A4A]">Commercial</div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#0F1E2F] md:text-5xl">Commercial construction advisory for private-sector capital projects and rollouts.</h1>
              <p className="mb-8 text-lg leading-8 text-stone-700">
                Baseline works with owners and operators planning fit-ups, upgrades, capital work, and multi-site rollout programs who need better project control, clearer reporting, and an independent advocate focused on the owner’s interests.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button onClick={() => goToContact("Commercial")} className="rounded-2xl bg-[#B08A4A] px-6 py-3 text-sm font-medium text-white hover:bg-[#9C7840]">Book a Commercial Clarity Session</button>
                <button onClick={() => goToContact("Commercial")} className="rounded-2xl border border-stone-300 px-6 py-3 text-sm font-medium text-stone-900 hover:bg-white">Discuss Your Project</button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {commercialImages.map((image) => (
                <div key={image.src} className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm">
                  <img src={image.src} alt={image.alt} className="h-64 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </SectionShell>
      </section>

      <SectionShell>
        <div className="grid gap-10 md:grid-cols-[1.02fr_0.98fr]">
          <div>
            <div className="mb-5 text-2xl font-semibold text-[#0F1E2F]">What We Help With</div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Capital projects and asset upgrades",
                "Commercial fit-ups and tenant improvements",
                "Multi-site commercial rollouts",
                "Budget and scope oversight",
                "Reporting and progress visibility",
                "Owner-focused coordination support",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 px-5 py-4 text-sm text-stone-800 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-stone-200 bg-[#13283D] p-8 text-white shadow-sm">
            <div className="mb-4 flex items-center gap-3 text-lg font-semibold"><HardHat className="h-5 w-5 text-[#D5B170]" />Why Commercial Clients Choose Baseline</div>
            <ul className="space-y-4 text-sm leading-6 text-stone-200">
              <li><span className="font-semibold text-white">Owner-focused:</span> independent from the build contract and focused on the client’s interests.</li>
              <li><span className="font-semibold text-white">Rollout discipline:</span> consistency, visibility, and repeatable reporting across locations.</li>
              <li><span className="font-semibold text-white">Structured delivery:</span> better visibility into cost, schedule, communication, and project decision-making.</li>
              <li><span className="font-semibold text-white">Practical construction fluency:</span> real understanding of how projects are priced, sequenced, and delivered.</li>
            </ul>
          </div>
        </div>
      </SectionShell>
    </>
  );
}