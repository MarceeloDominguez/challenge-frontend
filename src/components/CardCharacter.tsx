import Image from "next/image";
import Link from "next/link";

type Props = {
  numberUrl: string;
  name: string;
  eye_color: string;
  gender: string;
};

export default function CardCharacter({
  eye_color,
  gender,
  name,
  numberUrl,
}: Props) {
  return (
    <Link
      href={`/characterdetails/${numberUrl}`}
      className="bg-slate-900 rounded-md shadow-md hover:shadow-[#fee200] transition duration-300"
    >
      <Image
        src="/character.png"
        alt="imagen de la pelicula"
        width={400}
        height={150}
        priority
        className="rounded-md"
      />
      <div className="p-2 flex flex-col gap-2">
        <h2
          style={{ fontWeight: "800" }}
          className="text-slate-100 md:text-xl text-sm truncate"
        >
          {name}
        </h2>
        <div className="flex flex-col gap-1">
          <span className="text-gray-400 text-sm">
            Color de ojo: {eye_color}
          </span>
          <span className="text-gray-400 text-sm">
            Género: {gender === "n/a" ? "sin género" : gender}
          </span>
        </div>
      </div>
    </Link>
  );
}
