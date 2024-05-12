import { fetchFilms } from "@/lib/data";
import React, { Suspense } from "react";
import ListCharacters from "./ListCharacters";
import Spinner from "./Spinner";

type Props = {
  id: string;
};

export default async function FilmDetails({ id }: Props) {
  const films = await fetchFilms();
  const filterFilm = films?.find((item) => item.episode_id === Number(id));

  return (
    <>
      <div className="p-4 flex flex-col gap-2 my-2 md:my-6 lg:my-0 flex-1 lg:max-w-[50%]">
        <h2
          style={{ fontWeight: "800" }}
          className="text-slate-100 md:text-6xl text-sm"
        >
          {filterFilm?.title}
        </h2>
        <p className="text-slate-100 md:text-xl text-sm truncate">
          Director: {filterFilm?.director}
        </p>
        <span className="text-gray-400 text-sm">
          Episodio N° {filterFilm?.episode_id}
        </span>
        <Suspense fallback={<Spinner />}>
          <ListCharacters charactersUrl={filterFilm?.characters!} />
        </Suspense>
      </div>
    </>
  );
}
