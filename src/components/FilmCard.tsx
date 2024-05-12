import Image from "next/image";
import Link from "next/link";

type FilmCardProps = {
  title: string;
  episode_id: number;
};

export default function FilmCard({ title, episode_id }: FilmCardProps) {
  return (
    <Link
      href={`/film/${episode_id}`}
      className="bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-[#fee200] transition duration-300"
    >
      <Image
        src="/star-wars-films.png"
        alt="imagen de la pelicula"
        width={980}
        height={1200}
        priority
      />
      <div className="p-4 flex flex-col gap-2">
        <h2
          style={{ fontWeight: "800" }}
          className="text-slate-100 md:text-xl text-sm truncate"
        >
          {title}
        </h2>
        <span className="text-gray-400 text-sm">Episodio N° {episode_id}</span>
      </div>
    </Link>
  );
}
