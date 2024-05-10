import { Film } from "../types/Films";

export async function fetchFilms() {
  try {
    const resp = await fetch("https://swapi.dev/api/films");
    const listFilms: { results: Film[] } = await resp.json();

    return listFilms.results;
  } catch (error) {
    console.log(error);
  }
}
