import { fetchFilms } from "@/lib/data";

type Props = {
  params: { id: string };
};

export default async function FilmDetails({ params }: Props) {
  const { id } = params;

  const films = await fetchFilms();

  const filterFilm = films?.find((item) => item.episode_id === Number(id));

  return (
    <div>
      <p className="text-white">{filterFilm?.title}</p>
    </div>
  );
}
