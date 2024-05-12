"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="px-4 py-6 flex justify-end gap-4">
      <Link
        className={`${pathname === "/" ? "text-[#fee200]" : "text-slate-100"}`}
        href="/"
      >
        Películas
      </Link>
      <Link
        className={`${
          pathname === "/characters" ? "text-[#fee200]" : "text-slate-100"
        }`}
        href="/characters"
      >
        Personajes
      </Link>
    </nav>
  );
}
