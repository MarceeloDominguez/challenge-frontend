import FilmCard from "./FilmCard";
import { fetchFilms } from "../lib/data";

export default async function ListFilms() {
  const films = await fetchFilms();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-12 gap-8 pb-8">
      {films?.map((film) => (
        <FilmCard
          title={film.title}
          episode_id={film.episode_id}
          key={film.episode_id}
        />
      ))}
    </div>
  );
}
