"use client";
import { Character } from "@/types/Character";
import { useEffect, useState } from "react";

type Props = {
  params: { numberUrl: string };
};

export default function CharacterDetailsPage({ params }: Props) {
  const { numberUrl } = params;
  const [data, setData] = useState<Character>();

  useEffect(() => {
    const getCharacter = async () => {
      const resp = await fetch(`https://swapi.dev/api/people/${numberUrl}`);
      const data = await resp.json();

      setData(data);
    };

    getCharacter();
  }, []);

  return (
    <div className="text-red-600">
      {numberUrl} {data?.name}
    </div>
  );
}
