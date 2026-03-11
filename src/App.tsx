import {
  ArrowRight,
  Building2,
  ClipboardList,
  HardHat,
  Home,
  Image as ImageIcon,
  MapPin,
  ShieldCheck,
  User,
  Menu,
  X,
} from "lucide-react";

const residentialImages = [
  {
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern residential renovation interior",
  },
  {
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    alt: "Contemporary backyard suite exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    alt: "Residential construction planning table with drawings",
  },
];

const commercialImages = [
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    alt: "Commercial office fit-up interior",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    alt: "Commercial building exterior and rollout style project",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    alt: "Commercial project planning meeting",
  },
];

const pages = ["home", "residential", "commercial", "clarity", "about", "contact"] as const;
type PageKey = (typeof pages)[number];
type ProjectStream = "Residential" | "Commercial";

function NavLink({
  label,
  page,
  activePage,
  setActivePage,
}: {
  label: string;
  page: PageKey;
  activePage: PageKey;
  setActivePage: (page: PageKey) => void;
}) {
  const active = activePage === page;
  return (
    <button
      onClick={() => setActivePage(page)}
      className={`rounded-full px-4 py-2 text-sm transition ${
        active ? "bg-white/12 text-white" : "text-stone-300 hover:bg-white/8 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function SectionShell({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">{children}</div>;
}

function HomePage({
  goTo,
  goToContact,
}: {
  goTo: (page: PageKey) => void;
  goToContact: (stream?: ProjectStream) => void;
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

function ResidentialPage({ goToContact }: { goToContact: (stream?: ProjectStream) => void; }) {
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

function CommercialPage({ goToContact }: { goToContact: (stream?: ProjectStream) => void; }) {
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

function ClarityPage({ goToContact }: { goToContact: (stream?: ProjectStream) => void; }) {
  return (
    <>
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
              <div className="mb-5 rounded-2xl border border-stone-200 bg-white p-5">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#2E5C89]">What’s included</div>
                <ul className="space-y-2 text-sm leading-6 text-stone-700">
                  <li>• 30-minute intake call before the meeting</li>
                  <li>• Up to 90-minute consultation / site walkthrough</li>
                  <li>• Feasibility and risk review</li>
                  <li>• Budget and scope discussion</li>
                  <li>• Written summary and action checklist</li>
                </ul>
              </div>
              <div className="mb-5 rounded-2xl border border-stone-200 bg-white p-5">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#2E5C89]">What you take away</div>
                <ul className="space-y-2 text-sm leading-6 text-stone-700">
                  <li>• Clearer understanding of the project scope</li>
                  <li>• Early visibility into likely risks and unknowns</li>
                  <li>• Better expectations around budget and next steps</li>
                  <li>• A practical roadmap to move the project forward</li>
                </ul>
              </div>
              <div className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#2E5C89]">Starting at $950</div>
              <button onClick={() => goToContact("Residential")} className="inline-flex rounded-2xl bg-[#2E5C89] px-5 py-3 text-sm font-medium text-white hover:bg-[#244A6F]">Book a Residential Clarity Session</button>
            </div>

            <div className="rounded-[1.75rem] border border-[#D9C29A] bg-gradient-to-b from-[#F7F2E8] to-white p-8 shadow-sm">
              <div className="mb-3 text-2xl font-semibold text-[#0F1E2F]">Commercial Project Clarity Session</div>
              <p className="mb-5 text-sm leading-6 text-stone-700">
                A structured first step for operators planning fit-ups, capital upgrades, asset improvements, or multi-site rollout programs.
              </p>
              <div className="mb-5 rounded-2xl border border-stone-200 bg-white p-5">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#B08A4A]">What’s included</div>
                <ul className="space-y-2 text-sm leading-6 text-stone-700">
                  <li>• 30-minute intake call before the meeting</li>
                  <li>• Up to 90-minute consultation / project review meeting</li>
                  <li>• Scope, risk, and delivery analysis</li>
                  <li>• Budget and procurement discussion</li>
                  <li>• Written summary and next-step roadmap</li>
                </ul>
              </div>
              <div className="mb-5 rounded-2xl border border-stone-200 bg-white p-5">
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#B08A4A]">What you take away</div>
                <ul className="space-y-2 text-sm leading-6 text-stone-700">
                  <li>• Clearer project definition and priorities</li>
                  <li>• Better visibility into cost drivers and risk areas</li>
                  <li>• Stronger direction on delivery approach and next steps</li>
                  <li>• A practical framework to move the project ahead</li>
                </ul>
              </div>
              <div className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-[#B08A4A]">Starting at $1,500</div>
              <button onClick={() => goToContact("Commercial")} className="inline-flex rounded-2xl bg-[#B08A4A] px-5 py-3 text-sm font-medium text-white hover:bg-[#9C7840]">Book a Commercial Clarity Session</button>
            </div>
          </div>
        </SectionShell>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <section className="border-b border-stone-200 bg-gradient-to-b from-stone-50 to-white">
        <SectionShell>
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A4A]">About Baseline</div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#0F1E2F] md:text-5xl">Independent construction advisory built around clarity, structure, and practical experience.</h1>
              <p className="mb-6 text-lg leading-8 text-stone-700">
                Baseline helps residential owners, investors, and private-sector commercial clients move projects forward with clearer planning, better oversight, and a stronger understanding of risk before and during construction.
              </p>
              <div className="flex items-center gap-3 text-stone-700"><MapPin className="h-5 w-5 text-[#2E5C89]" />Halifax, Nova Scotia</div>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
                alt="Professional project planning discussion"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </SectionShell>
      </section>

      <SectionShell>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-3 text-[#0F1E2F]"><User className="h-5 w-5 text-[#B08A4A]" /><div className="text-xl font-semibold">Who We Are</div></div>
            <p className="text-sm leading-6 text-stone-700">
              Baseline is a construction advisory business focused on helping owners make better decisions before and during project delivery. The emphasis is on independent guidance, clear communication, and practical oversight.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-3 text-[#0F1E2F]"><ClipboardList className="h-5 w-5 text-[#2E5C89]" /><div className="text-xl font-semibold">Past Experience</div></div>
            <p className="text-sm leading-6 text-stone-700">
              Baseline brings experience across project coordination, contractor engagement, owner representation, infrastructure-related business development, and property-focused project planning — with a practical understanding of how projects are priced, sequenced, and delivered.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-sm">
            <div className="mb-4 flex items-center gap-3 text-[#0F1E2F]"><Building2 className="h-5 w-5 text-[#B08A4A]" /><div className="text-xl font-semibold">Where We Work</div></div>
            <p className="text-sm leading-6 text-stone-700">
              Based in Halifax, Nova Scotia, Baseline supports residential projects and private-sector commercial work with the ability to grow into broader project oversight and rollout support over time.
            </p>
          </div>
        </div>
      </SectionShell>
    </>
  );
}

function ContactPage({ defaultStream = "Residential" }: { defaultStream?: ProjectStream }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    stream: defaultStream,
    budget: "Under $100,000",
    timeline: "Immediate / already underway",
    description: "",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, stream: defaultStream }));
  }, [defaultStream]);

  return (
    <SectionShell>
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#B08A4A]">
            Contact
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-[#0F1E2F] md:text-5xl">
            Discuss your project.
          </h1>
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

        <form
          action="https://formspree.io/f/xojkenpe"
          method="POST"
          className="relative rounded-[1.75rem] border border-stone-200 bg-stone-50 p-8 shadow-sm"
        >
          <div style={{ display: "none" }}>
            <label htmlFor="_gotcha">Leave this field empty</label>
            <input
              type="text"
              name="_gotcha"
              id="_gotcha"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">Full Name</label>
              <input
                type="text"
                name="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none ring-0"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none ring-0"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                name="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none ring-0"
                placeholder="902-000-0000"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Project Stream</label>
              <select
                name="Project Stream"
                value={formData.stream}
                onChange={(e) =>
                  setFormData({ ...formData, stream: e.target.value as ProjectStream })
                }
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none ring-0"
              >
                <option>Residential</option>
                <option>Commercial</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Estimated Budget</label>
              <select
                name="Estimated Budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none ring-0"
              >
                <option>Under $100,000</option>
                <option>$100,000 – $250,000</option>
                <option>$250,000 – $500,000</option>
                <option>$500,000+</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">Expected Timeline</label>
              <select
                name="Expected Timeline"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none ring-0"
              >
                <option>Immediate / already underway</option>
                <option>Within 3 months</option>
                <option>3–6 months</option>
                <option>6+ months</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium">Project Description</label>
            <textarea
              name="Project Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="min-h-[140px] w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none ring-0"
              placeholder="Tell us about your project, where it stands today, and what kind of support you’re looking for."
              required
            />
          </div>

          <input type="hidden" name="_subject" value="Baseline Project Inquiry" />
          <input type="hidden" name="_replyto" value={formData.email} />

          <div className="mt-6">
            <button
              type="submit"
              className="rounded-2xl bg-stone-900 px-6 py-3 text-sm font-medium text-white hover:bg-black"
            >
              Submit Project Inquiry
            </button>
          </div>
        </form>
      </div>
    </SectionShell>
  );
}

function BaselineLogo() {
  return (
    <img
      src="/assets/logo-dark.png"
      alt="Baseline logo"
      className="h-20 w-auto md:h-28"
    />
  );
}

export default function App() {
  const [activePage, setActivePage] = useState<PageKey>(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";
    return pages.includes(hash as PageKey) ? (hash as PageKey) : "home";
  });
  const [contactStream, setContactStream] = useState<ProjectStream>("Residential");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const goTo = (page: PageKey) => {
  setActivePage(page);
  setMobileMenuOpen(false);
  window.history.pushState({ page }, "", `#${page}`);
  };

  const goToContact = (stream: ProjectStream = "Residential") => {
  setContactStream(stream);
  setActivePage("contact");
  setMobileMenuOpen(false);
  window.history.pushState({ page: "contact", stream }, "", "#contact");
  };

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace("#", "");
      if (pages.includes(hash as PageKey)) {
        setActivePage(hash as PageKey);
      } else {
        setActivePage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  const pageTitle = useMemo(() => {
    switch (activePage) {
      case "residential":
        return "Residential";
      case "commercial":
        return "Commercial";
      case "clarity":
        return "Project Clarity Sessions";
      case "about":
        return "About";
      case "contact":
        return "Contact";
      default:
        return "Home";
    }
  }, [activePage]);

  return (
    <div className="min-h-screen bg-[#0F1E2F] text-slate-900">
     <header className="sticky top-0 z-50 border-b border-[#1F334A] bg-[#0F1E2F]/95 backdrop-blur">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
    <button onClick={() => goTo("home")} className="flex items-center gap-3 text-left">
      <BaselineLogo />
    </button>

    <nav className="hidden gap-2 md:flex">
      <NavLink label="Home" page="home" activePage={activePage} setActivePage={goTo} />
      <NavLink label="Residential" page="residential" activePage={activePage} setActivePage={goTo} />
      <NavLink label="Commercial" page="commercial" activePage={activePage} setActivePage={goTo} />
      <NavLink label="Start Here" page="clarity" activePage={activePage} setActivePage={goTo} />
      <NavLink label="About" page="about" activePage={activePage} setActivePage={goTo} />
      <NavLink label="Contact" page="contact" activePage={activePage} setActivePage={goTo} />
    </nav>

    <button
      className="rounded-xl border border-white/10 p-2 text-white md:hidden"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      aria-label="Toggle menu"
    >
      {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>
  </div>

  {mobileMenuOpen && (
    <div className="border-t border-[#1F334A] bg-[#0F1E2F] px-6 pb-4 pt-4 md:hidden">
      <div className="flex flex-col gap-2">
        <button
          onClick={() => goTo("home")}
          className="rounded-xl px-4 py-3 text-left text-white hover:bg-white/10"
        >
          Home
        </button>
        <button
          onClick={() => goTo("residential")}
          className="rounded-xl px-4 py-3 text-left text-white hover:bg-white/10"
        >
          Residential
        </button>
        <button
          onClick={() => goTo("commercial")}
          className="rounded-xl px-4 py-3 text-left text-white hover:bg-white/10"
        >
          Commercial
        </button>
        <button
          onClick={() => goTo("clarity")}
          className="rounded-xl px-4 py-3 text-left text-white hover:bg-white/10"
        >
          Start Here
        </button>
        <button
          onClick={() => goTo("about")}
          className="rounded-xl px-4 py-3 text-left text-white hover:bg-white/10"
        >
          About
        </button>
        <button
          onClick={() => goTo("contact")}
          className="rounded-xl px-4 py-3 text-left text-white hover:bg-white/10"
        >
          Contact
        </button>
      </div>
    </div>
  )}
</header>

      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-stone-500">Baseline / {pageTitle}</div>
      </div>

      <main className="bg-white">
        {activePage === "home" && <HomePage goTo={goTo} goToContact={goToContact} />}
        {activePage === "residential" && <ResidentialPage goToContact={goToContact} />}
        {activePage === "commercial" && <CommercialPage goToContact={goToContact} />}
        {activePage === "clarity" && <ClarityPage goToContact={goToContact} />}
        {activePage === "about" && <AboutPage />}
        {activePage === "contact" && <ContactPage defaultStream={contactStream} />}
      </main>
    </div>
  );
}
