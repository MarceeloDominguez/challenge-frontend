import { Character } from "@/types/Character";
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

export async function fetchCharacters(charactersUrl: string[]) {
  try {
    const characterPromises = charactersUrl.map(async (characterUrl) => {
      const resp = await fetch(characterUrl);
      const characterData: Character = await resp.json();
      return characterData;
    });

    const characters = await Promise.all(characterPromises);

    return characters;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCharactersDetails(numberUrl: string) {
  try {
    const resp = await fetch(`https://swapi.dev/api/people/${numberUrl}`);
    const data = await resp.json();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return data;
  } catch (error) {
    console.log(error);
  }
}
