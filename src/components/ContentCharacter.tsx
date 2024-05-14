import { fetchCharactersDetails } from "@/lib/data";

interface CharacterData {
  eye_color: string;
  birth_year: string;
  hair_color: string;
  height: string;
  skin_color: string;
  mass: string;
}

type CharacterKey = keyof CharacterData;

type ContentCharacterProps = {
  numberUrl: string;
};

export default async function ContentCharacter({
  numberUrl,
}: ContentCharacterProps) {
  const properties: { name: string; key: CharacterKey }[] = [
    { name: "Color de ojo", key: "eye_color" },
    { name: "Año de cumpleaños", key: "birth_year" },
    { name: "Color de pelo", key: "hair_color" },
    { name: "Altura", key: "height" },
    { name: "Color de piel", key: "skin_color" },
    { name: "Masa", key: "mass" },
  ];

  const renderProperty = (
    data: CharacterData | null,
    property: { name: string; key: CharacterKey }
  ) => (
    <li key={property.key} className="text-gray-400 md:text-lg text-sm">
      {property.name}:{" "}
      {data &&
      (data[property.key] === "n/a" || data[property.key] === "unknown")
        ? "sin especificar"
        : data && data[property.key]}
    </li>
  );

  const data = await fetchCharactersDetails(numberUrl);

  return (
    <div className="flex-1 p-4 flex flex-col gap-2 my-2 md:my-6 lg:my-0">
      <h2
        style={{ fontWeight: "800" }}
        className="text-[#fee200] md:text-6xl text-sm mb-4"
      >
        {data?.name}
      </h2>
      {properties.map((property) => renderProperty(data!, property))}
    </div>
  );
}
