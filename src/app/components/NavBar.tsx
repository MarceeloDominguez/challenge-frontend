import Link from "next/link";

export default function NavBar() {
  return (
    <div className="px-4 py-6 flex justify-end gap-4">
      <Link
        className="text-slate-100 hover:text-[#fee200] transition duration-300"
        href="/"
      >
        Películas
      </Link>
      <Link
        className="text-slate-100 hover:text-[#fee200] transition duration-300"
        href="/characters"
      >
        Personajes
      </Link>
    </div>
  );
}
