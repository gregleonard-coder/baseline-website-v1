import { useMemo, useState } from "react";
import NavLink from "./components/NavLink";
import HomePage from "./pages/HomePage";
import ResidentialPage from "./pages/ResidentialPage";
import CommercialPage from "./pages/CommercialPage";
import ClarityPage from "./pages/ClarityPage";
import ContactPage from "./pages/ContactPage";
import type { PageKey, StreamType } from "./types";

export default function App() {
  const [activePage, setActivePage] = useState<PageKey>("home");
  const [contactStream, setContactStream] = useState<StreamType>("Residential");

  const goToContact = (stream: StreamType = "Residential") => {
    setContactStream(stream);
    setActivePage("contact");
  };

  const pageTitle = useMemo(() => {
    switch (activePage) {
      case "residential":
        return "Residential";
      case "commercial":
        return "Commercial";
      case "clarity":
        return "Project Clarity Sessions";
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
          <button onClick={() => setActivePage("home")} className="flex items-center gap-3 text-left">
            <img
              src="/assets/logo-dark.png"
              alt="Baseline logo"
              className="h-14 w-auto"
            />
          </button>
          <nav className="hidden gap-2 md:flex">
            <NavLink label="Home" page="home" activePage={activePage} setActivePage={setActivePage} />
            <NavLink label="Residential" page="residential" activePage={activePage} setActivePage={setActivePage} />
            <NavLink label="Commercial" page="commercial" activePage={activePage} setActivePage={setActivePage} />
            <NavLink label="Start Here" page="clarity" activePage={activePage} setActivePage={setActivePage} />
            <NavLink label="Contact" page="contact" activePage={activePage} setActivePage={setActivePage} />
          </nav>
        </div>
      </header>

      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-stone-500">Baseline / {pageTitle}</div>
      </div>

      <main className="bg-white">
        {activePage === "home" && <HomePage goTo={setActivePage} goToContact={goToContact} />}
        {activePage === "residential" && <ResidentialPage goTo={setActivePage} goToContact={goToContact} />}
        {activePage === "commercial" && <CommercialPage goTo={setActivePage} goToContact={goToContact} />}
        {activePage === "clarity" && <ClarityPage goToContact={goToContact} />}
        {activePage === "contact" && <ContactPage defaultStream={contactStream} />}
      </main>
    </div>
  );
}