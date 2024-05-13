import { Character } from "@/types/Character";

type Props = {
  prevPage: () => void;
  nextPage: () => void;
  currentPage: number;
  currentCharacter: Character[];
  itemsPerPage: number;
};

export default function PaginationButtons({
  prevPage,
  nextPage,
  currentCharacter,
  currentPage,
  itemsPerPage,
}: Props) {
  return (
    <div className="flex md:justify-end justify-center gap-6 pt-2 pb-10 px-4">
      <button
        style={{ fontWeight: "800" }}
        className={`bg-slate-900 text-slate-100 text-sm h-10 w-32 rounded-md ${
          currentPage === 1 ? "opacity-40" : "opacity-100"
        }`}
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        Atrás
      </button>
      <button
        style={{ fontWeight: "800" }}
        className={`bg-slate-900 text-slate-100 text-sm h-10 w-32 rounded-md ${
          currentCharacter.length < itemsPerPage ? "opacity-40" : "opacity-100"
        }`}
        onClick={nextPage}
        disabled={currentCharacter.length < itemsPerPage}
      >
        Siguiente
      </button>
    </div>
  );
}
