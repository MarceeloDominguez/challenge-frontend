import { Suspense } from "react";
import ListFilms from "../components/ListFilms";
import { FilmsCardSkeleton } from "../components/Skeletons";

export default function Home() {
  return (
    <main className="p-4 min-h-screen overflow-hidden">
      <Suspense fallback={<FilmsCardSkeleton />}>
        <ListFilms />
      </Suspense>
    </main>
  );
}
