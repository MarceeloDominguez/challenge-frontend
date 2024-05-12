import FilmDetails from "@/components/FilmDetails";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export default function FilmDetailsPage({ params }: Props) {
  const { id } = params;

  return (
    <div className="p-4 lg:flex gap-5 overflow-hidden">
      <div className="flex p-4 flex-1 lg:h-[86vh] justify-center">
        <Image
          src="/star-wars-films.png"
          alt="imagen de la pelicula"
          width={550}
          height={430}
          priority
          className="object-contain"
        />
      </div>
      <FilmDetails id={id} />
    </div>
  );
}
