import React from "react";

interface ICarouselSlide {
  title: string;
  style?: React.CSSProperties;
}

// TODO: The styles are not yet final
export default function CarouselSlide({ title, style }: ICarouselSlide) {
  return (
    <article className="event-slide grid" style={style}>
      <div className="translate-x-[--offset] bg-white before:absolute before:inset-0 before:-z-10 before:bg-[image:var(--img-background)] before:bg-cover before:opacity-[--img-opacity] before:content-['']">
        <div className="grid h-full items-end bg-gray-500/5 p-8">
          <h3 className="font-heading text-5xl font-bold text-white">
            {title}
          </h3>
        </div>
      </div>
    </article>
  );
}
