import React from "react";
import { useEventsSlider } from "./CarouselContext";
import Image from "next/image";

interface ICarouselSlide {
  title: string;
  image: string;
  idx: number;
  link: string;
}

// TODO: The styles are not yet final
export default function CarouselSlide({ title, image, idx, link }: ICarouselSlide) {
  const slider = useEventsSlider();

  /** @TODO: to fix the glitchy/jiggly behavior when changing slides, try the following:
   *  - change `renderMode` option to "custom" to manually calculate the transform property
   *  - adjust `transform: translateX()` property to stack them up
   *  - add an offset to each slide which depends to their distance to the beginning of the
   *    viewport and direction when swiping (negative towards left and positive towards right)
   */
  function calculateStyle() {
    if (slider) {
      const slide = slider.track.details.slides[idx];
      const slideSize = slide.size * slider.size;
      const currentSlide = slider.track.details.rel;
      const slidesLength = slider.slides.length;
      const isLastSlide = currentSlide === idx && currentSlide === slidesLength - 1;

      const scaleY = 1 - Math.abs(0.2 * slide.distance);
      const opacity = Math.min(1 - Math.abs(slide.distance * 1.075), 0.5);
      const zIndex = slidesLength - Math.abs(currentSlide - idx);
      const translateX = slideSize * slide.distance;

      return {
        "--img-background": ``,
        "--img-opacity": currentSlide === idx ? 0.25 : opacity,
        "--offset": `${-translateX}px`,
        zIndex: currentSlide === idx ? 1000 : zIndex,
        scale: `1 ${isLastSlide ? 1 : scaleY}`,
      } as React.CSSProperties;
    }
  }

  function calculateGradient() {
    if (slider) {
      const currentSlide = slider.track.details.rel;
      return currentSlide === idx
        ? ({ backgroundImage: "linear-gradient(206deg, #2BEB61 -72.2%, #052014 74.22%)" } as React.CSSProperties)
        : ({ backgroundImage: "linear-gradient(93deg, #175F35 -96.15%, #052014 125.57%)" } as React.CSSProperties);
    }
  }

  return (
    <article className="event-slide grid min-w-[75%]" style={calculateStyle()}>
      <div className="grid translate-x-[--offset] items-end p-8 before:absolute before:inset-0 before:-z-10 before:bg-cover before:content-[''] ">
        <div className="absolute z-[-2] h-full w-full transition duration-300" style={calculateGradient()}></div>
        <Image
          src={image}
          alt={`Image for ${title}`}
          className="z-[-1] object-cover opacity-[--img-opacity]"
          fill
          loading="lazy"
        />
        <a href={link} rel="noreferrer" target="_blank">
          <h3 className="font-heading text-5xl font-bold text-[#E6F5D6] hover:underline">{title}</h3>
        </a>
      </div>
    </article>
  );
}
