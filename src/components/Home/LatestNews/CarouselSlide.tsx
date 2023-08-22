import React from "react";
import { useEventsSlider } from "./CarouselContext";

interface ICarouselSlide {
  title: string;
  image: string;
  idx: number;
}

// TODO: The styles are not yet final
export default function CarouselSlide({ title, image, idx }: ICarouselSlide) {
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
      const opacity = Math.max(1 - Math.abs(slide.distance / 1.5), 0.25);
      const zIndex = slidesLength - Math.abs(currentSlide - idx);
      const translateX = slideSize * slide.distance;

      return {
        "--img-background": `url(${image})`,
        "--img-opacity": currentSlide === idx ? 1 : opacity,
        "--offset": `${-translateX}px`,
        zIndex: currentSlide === idx ? 1000 : zIndex,
        scale: `1 ${isLastSlide ? 1 : scaleY}`,
      } as React.CSSProperties;
    }
  }

  return (
    <article className="event-slide grid" style={calculateStyle()}>
      <div className="grid translate-x-[--offset] items-end bg-white p-8 before:absolute before:inset-0 before:-z-10 before:bg-[image:var(--img-background)] before:bg-cover before:opacity-[--img-opacity] before:content-['']">
        <h3 className="font-heading text-5xl font-bold text-white">{title}</h3>
      </div>
    </article>
  );
}
