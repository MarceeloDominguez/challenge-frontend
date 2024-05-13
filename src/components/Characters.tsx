"use client";
import { Character } from "@/types/Character";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import CardCharacter from "./CardCharacter";
import PaginationButtons from "./PaginationButtons";

export default function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGender, setSelectedGender] = useState<string>("Géneros");
  const [selectedEyeColor, setSelectedEyeColor] =
    useState<string>("Color de ojos");
  const [isLoading, setIsLoading] = useState(false);

  const itemsPerPage = 10;

  const genres = Array.from(
    new Set(characters?.map((character: Character) => character.gender))
  ).filter((genres) => genres !== "n/a");

  const eyeColor = Array.from(
    new Set(characters.map((character: Character) => character.eye_color))
  ).filter((character) => character !== "unknown");

  const fetchCharacters = async (url: string): Promise<Character[]> => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const results: Character[] = data.results;
      const nextPage = data.next;

      if (nextPage) {
        const moreCharacter = await fetchCharacters(nextPage);
        return [...results, ...moreCharacter];
      } else {
        return results;
      }
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const apiUrl = "https://swapi.dev/api/people/";
    fetchCharacters(apiUrl)
      .then((allCharacter) => {
        setCharacters(allCharacter);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  const applyFilterByGender = (characterFilter: Character[]) => {
    let filteredResults = characterFilter;

    //filtrar por género
    if (selectedGender && selectedGender !== "Géneros") {
      filteredResults = filteredResults.filter(
        (character: Character) => character.gender === selectedGender
      );
    }

    setFilteredCharacters(filteredResults);
  };

  const applyFilterByEyeColor = (characterFilter: Character[]) => {
    let filteredResults = characterFilter;

    //filtrar por color de ojos
    if (selectedEyeColor && selectedEyeColor !== "Color de ojos") {
      filteredResults = filteredResults.filter(
        (character: Character) => character.eye_color === selectedEyeColor
      );
    }

    setFilteredCharacters(filteredResults);
  };

  useEffect(() => {
    applyFilterByGender(characters);
    setCurrentPage(1);
  }, [selectedGender]);

  useEffect(() => {
    applyFilterByEyeColor(characters);
    setCurrentPage(1);
  }, [selectedEyeColor]);

  const indexOfLastCharacter = currentPage * itemsPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - itemsPerPage;

  const currentCharacter =
    selectedGender === "Géneros" && selectedEyeColor === "Color de ojos"
      ? characters.slice(indexOfFirstCharacter, indexOfLastCharacter)
      : filteredCharacters.slice(indexOfFirstCharacter, indexOfLastCharacter);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedGender(selectedValue);
  };

  const handleEyeColorChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setSelectedEyeColor(selectedValue);
  };

  return (
    <>
      <div className="flex gap-3 md:justify-start justify-center px-4">
        <select
          value={selectedGender}
          onChange={handleGenderChange}
          className="bg-slate-800 h-10 w-40 rounded-lg text-slate-100 text-sm outline-none mb-2 cursor-pointer"
        >
          {["Géneros", ...genres].map((item, index) => (
            <option
              //onChange={() => handleGenderChange}
              key={index}
              className="text-slate-100 text-sm"
            >
              {item}
            </option>
          ))}
        </select>
        <select
          value={selectedEyeColor}
          onChange={handleEyeColorChange}
          className="bg-slate-800 h-10 w-40 rounded-lg text-slate-100 text-sm outline-none mb-2 cursor-pointer"
        >
          {["Color de ojos", ...eyeColor].map((item, index) => (
            <option
              //onChange={() => handleEyeColorChange}
              key={index}
              className="text-slate-100 text-sm"
            >
              {item}
            </option>
          ))}
        </select>
      </div>
      {isLoading && (
        <div className="h-[80vh] flex justify-center items-center">
          <Spinner />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-5 gap-8 p-4">
        {currentCharacter.map((item, index) => {
          const parts = item.url.split("/");
          const numberUrl = parts[parts.length - 2];

          return (
            <CardCharacter
              key={index}
              eye_color={item.eye_color}
              gender={item.gender}
              name={item.name}
              numberUrl={numberUrl}
            />
          );
        })}
      </div>
      <PaginationButtons
        currentCharacter={currentCharacter}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
}
