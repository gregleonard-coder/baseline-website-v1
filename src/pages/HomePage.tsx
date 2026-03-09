import { ArrowRight, Building2, ClipboardList, Home, ShieldCheck } from "lucide-react";
import SectionShell from "../components/SectionShell";
import type { PageKey, StreamType } from "../types";

export default function HomePage({
  goTo,
  goToContact,
}: {
  goTo: (page: PageKey) => void;
  goToContact: (stream: StreamType) => void;
}) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-stone-200 bg-[radial-gradient(circle_at_top_left,_rgba(176,138,74,0.22),_transparent_35%),radial-gradient(circle_at_85%_15%,_rgba(46,92,137,0.28),_transparent_30%),linear-gradient(to_bottom,_#0F1E2F,_#1C344D)] text-white">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="max-w-2xl">
            <button
              onClick={() => goTo("clarity")}
              className="mb-4 inline-flex rounded-full border border-stone-500/60 bg-white/10 px-4 py-1 text-[16px] font-medium uppercase tracking-[0.22em] text-stone-200 transition hover:bg-white/15 hover:text-white"
            >
              Start Here.
            </button>
            <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Construction advisory and representation focused on the owner’s interests.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-8 text-stone-200 md:text-xl">
              We help owners plan, oversee, and deliver projects with clarity while protecting their interests every step of the way.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => goTo("clarity")}
                className="rounded-2xl bg-[#B08A4A] px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition hover:bg-[#C39A56]"
              >
                Book a Baseline Project Clarity Session
              </button>
              <button
                onClick={() => goToContact("Residential")}
                className="rounded-2xl border border-stone-500 px-6 py-3 text-center text-sm font-medium text-white transition hover:border-stone-300 hover:bg-white/10"
              >
                Discuss Your Project
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid w-full max-w-2xl gap-4 md:grid-cols-[1.15fr_0.85fr]">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
                  alt="Construction planning and site oversight"
                  className="h-full min-h-[280px] w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-stone-200">
                    <ShieldCheck className="h-4 w-4" /> What Baseline Delivers
                  </div>
                  <div className="grid gap-3">
                    {[
                      ["Clarity before commitment", "Define scope, identify risk, and create a practical next-step roadmap before construction begins."],
                      ["Protection of the owner’s interests", "Independent guidance that helps owners stay aligned, informed, and protected through delivery."],
                      ["Structured oversight", "Progress visibility, documentation, decision support, and clearer communication across the project."],
                    ].map(([title, desc]) => (
                      <div key={title} className="rounded-2xl border border-white/10 bg-[#0F1E2F]/30 p-4">
                        <div className="mb-1 text-base font-semibold text-white">{title}</div>
                        <div className="text-sm leading-6 text-stone-200">{desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="mb-12 max-w-3xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A4A]">Who We Help</div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#0F1E2F] md:text-4xl">Clarity, structure, and independent support before and during construction.</h2>
          <p className="text-lg leading-8 text-stone-700">
            Baseline works with homeowners, investors, and private-sector commercial operators who need an independent advisor to help define scope, reduce risk, and bring better control to projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-stone-200 bg-gradient-to-b from-[#EEF3F8] to-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-3 text-slate-900"><Home className="h-6 w-6 text-[#2E5C89]" /><div className="text-xl font-semibold">Residential</div></div>
            <p className="mb-4 text-sm leading-6 text-stone-700">
              Renovations, repairs and remediation, backyard suites, multi-unit conversions, and new residential builds.
            </p>
            <button onClick={() => goTo("residential")} className="inline-flex items-center gap-2 text-sm font-medium text-[#183551] underline underline-offset-4">Explore residential services <ArrowRight className="h-4 w-4" /></button>
          </div>
          <div className="rounded-[1.75rem] border border-stone-200 bg-gradient-to-b from-[#F7F2E8] to-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-3 text-slate-900"><Building2 className="h-6 w-6 text-[#B08A4A]" /><div className="text-xl font-semibold">Commercial</div></div>
            <p className="mb-4 text-sm leading-6 text-stone-700">
              Capital projects, fit-ups, asset-related upgrades, and multi-site commercial rollouts for private-sector operators.
            </p>
            <button onClick={() => goTo("commercial")} className="inline-flex items-center gap-2 text-sm font-medium text-[#6B5328] underline underline-offset-4">Explore commercial services <ArrowRight className="h-4 w-4" /></button>
          </div>
          <div className="rounded-[1.75rem] border border-stone-200 bg-gradient-to-b from-stone-100 to-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-3 text-slate-900"><ClipboardList className="h-6 w-6 text-stone-700" /><div className="text-xl font-semibold">Project Clarity</div></div>
            <p className="mb-4 text-sm leading-6 text-stone-700">
              Structured first-step sessions that help owners understand scope, risk, budget, and next steps before construction begins.
            </p>
            <button onClick={() => goTo("clarity")} className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 underline underline-offset-4">Choose a clarity session <ArrowRight className="h-4 w-4" /></button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}