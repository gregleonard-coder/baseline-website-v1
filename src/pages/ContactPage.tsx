import SectionShell from "../components/SectionShell";
import type { StreamType } from "../types";

export default function ContactPage({ defaultStream = "Residential" }: { defaultStream?: StreamType }) {
  return (
    <SectionShell>
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A4A]">Contact</div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#0F1E2F] md:text-5xl">Discuss your project.</h1>
          <p className="mb-8 text-lg leading-8 text-stone-700">
            Tell us a bit about your project and Baseline will help determine the right next step.
          </p>
          <div className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-[#13283D] p-8 text-white shadow-sm">
            <div className="space-y-3 text-sm text-stone-200">
              <div><span className="font-semibold text-white">Email:</span> info@baselinegroup.ca</div>
              <div><span className="font-semibold text-white">Phone:</span> 902-414-5737</div>
              <div><span className="font-semibold text-white">Website:</span> baselinegroup.ca</div>
            </div>
          </div>
        </div>

        <form className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-8 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Full Name</label>
              <input className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none ring-0" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Email Address</label>
              <input className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none ring-0" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Phone Number</label>
              <input className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none ring-0" placeholder="902-000-0000" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Project Stream</label>
              <select defaultValue={defaultStream} className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none ring-0">
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Estimated Budget</label>
              <select className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none ring-0">
                <option>Under $100,000</option>
                <option>$100,000 – $250,000</option>
                <option>$250,000 – $500,000</option>
                <option>$500,000+</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium">Expected Timeline</label>
              <select className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none ring-0">
                <option>Immediate / already underway</option>
                <option>Within 3 months</option>
                <option>3–6 months</option>
                <option>6+ months</option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium">Project Description</label>
            <textarea className="min-h-[140px] w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none ring-0" placeholder="Briefly describe the project, where things stand today, and what kind of support you are looking for." />
          </div>
          <div className="mt-6">
            <button type="button" className="rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:bg-black">
              Submit Project Inquiry
            </button>
          </div>
        </form>
      </div>
    </SectionShell>
  );
}