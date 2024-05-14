import { Suspense } from "react";
import ContentCharacter from "@/components/ContentCharacter";
import Image from "next/image";
import Spinner from "@/components/Spinner";

type Props = {
  params: { numberUrl: string };
};

export default function CharacterDetailsPage({ params }: Props) {
  const { numberUrl } = params;

  return (
    <div className="p-4 lg:flex gap-5 overflow-hidden">
      <div className="flex p-4 flex-1 lg:h-[86vh] justify-center">
        <Image
          src="/character.png"
          alt="imagen de la pelicula"
          width={800}
          height={430}
          priority
          className="object-contain"
        />
      </div>
      <Suspense
        fallback={
          <div className="flex-1 p-4 pt-10">
            <Spinner />
          </div>
        }
      >
        <ContentCharacter numberUrl={numberUrl} />
      </Suspense>
    </div>
  );
}
