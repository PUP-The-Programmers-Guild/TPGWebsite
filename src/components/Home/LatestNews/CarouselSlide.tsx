import React from "react";

interface ICarouselSlide {
  title: string;
  image: string;
  style?: React.CSSProperties;
}

// TODO: The styles are not yet final
export default function CarouselSlide({ title, image, style }: ICarouselSlide) {
  return (
    <article
      className="keen-slider__slide bg-white before:absolute before:inset-0 before:-z-10 before:bg-[image:var(--image)] before:bg-cover before:opacity-[--img-opacity] before:content-['']"
      style={{ "--image": `url(${image})`, ...style } as React.CSSProperties}
    >
      <div className="grid h-full items-end bg-gray-500/5 p-8">
        <h1 className="font-heading text-5xl font-bold text-white">{title}</h1>
      </div>
    </article>
  );
}
