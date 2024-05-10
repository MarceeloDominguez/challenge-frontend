import { Suspense } from "react";
import ListFilms from "./components/ListFilms";

export default function Home() {
  return (
    <main className="p-4 min-h-screen overflow-hidden">
      <Suspense fallback={<div className="text-red-600">Cargando...</div>}>
        <ListFilms />
      </Suspense>
    </main>
  );
}
