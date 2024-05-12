"use client";
import { Character } from "@/types/Character";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

type Props = {
  characters: Character[] | undefined;
};

export default function SliderCharacters({ characters }: Props) {
  let settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {characters?.map((item, index) => {
        const parts = item.url.split("/");
        const numberUrl = parts[parts.length - 2];

        return (
          <div key={index} className="p-2">
            <Link
              href={`/characterdetails/${numberUrl}`}
              className="mx-1 shadow-md rounded-md"
            >
              <Image
                src="/character.png"
                alt="imagen de la pelicula"
                width={250}
                height={250}
                priority
                className="object-contain rounded-md"
              />
              <p className="text-slate-100 md:text-lg text-sm py-2 truncate">
                {item.name}
              </p>
            </Link>
          </div>
        );
      })}
    </Slider>
  );
}
