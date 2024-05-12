import { fetchCharacters } from "@/lib/data";
import SliderCharacters from "./SliderCharacters";

type Props = {
  charactersUrl: string[];
};

export default async function ListCharacters({ charactersUrl }: Props) {
  const characters = await fetchCharacters(charactersUrl);

  return (
    <>
      <h2 className="text-slate-100 md:text-lg text-sm md:mt-12 mt-8">
        Personajes
      </h2>
      <div className="py-4 px-6">
        <SliderCharacters characters={characters} />
      </div>
    </>
  );
}
