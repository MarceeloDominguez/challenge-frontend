"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Film } from "./types/Films";

export default function Home() {
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    const getFilms = async () => {
      const resp = await fetch("https://swapi.dev/api/films");
      const listFilms = await resp.json();

      setFilms(listFilms.results);
    };

    getFilms();
  }, []);

  return (
    <main className="p-4 min-h-screen overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-12 gap-8 pb-8">
        {films.map((film) => (
          <div
            key={film.episode_id}
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
                {film.title}
              </h2>
              <span className="text-gray-400 text-sm">
                Episodio {film.episode_id}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
