import type { PageKey } from "../types";

export default function NavLink({
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