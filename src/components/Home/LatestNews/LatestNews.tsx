import Button from "@/components/base/Button";
import { cn } from "@/lib/utils";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { TrackDetails, useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import CarouselSlide from "./CarouselSlide";

/** @TODO: some parts here could be separated into own component or custom hook
 *  Initial structure proposed:
 *  <Carousel>
 *    <CarouselSlide />
 *    <CarouselSlide />
 *    <CarouselNavigation>
 *      <ArrowLeft />
 *      <LineButon />
 *      <ArrowRight />
 *    </CarouselNavigation>
 *  </Carousel> 
 */
export default function LatestNews() {
  const [details, setDetails] = useState<TrackDetails>();
  const [slideRef, slider] = useKeenSlider({
    selector: ".event-slide",
    slides: {
      perView: 1.25,
    },
    detailsChanged(slider) {
      setDetails(slider.track.details);
    },
  });
  const currentSlide = details?.rel ?? 0;
  const slidesLength = details?.slides.length ?? 0;

  /** @TODO: to fix the glitchy/jiggly behavior when changing slides, try the following:
   *  - change `renderMode` option to "custom" to manually calculate the transform property
   *  - adjust `transform: translateX()` property to stack them up
   *  - add an offset to each slide which depends to their distance to the beginning of the
   *    viewport and direction when swiping (negative towards left and positive towards right)
   */
  function calculateStyle(idx: number, image = "Placeholder1.png") {
    if (slider.current && details) {
      const slide = details.slides[idx];
      const slideSize = slide.size * slider.current.size;
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

  function isArrowDisabled(direction: "left" | "right") {
    if (direction === "left") return currentSlide === 0;
    return currentSlide === slidesLength - 1;
  }

  return (
    <section className="flex min-h-screen border-y-4 bg-background py-12">
      <div className="mx-auto flex max-w-6xl flex-1 flex-col gap-10">
        <h2 className="font-heading text-5xl font-bold">LATEST EVENTS</h2>
        {/* Events Carousel */}
        <div ref={slideRef} className="keen-slider flex-1">
          {[0, 1, 2, 3].map((idx) => (
            <CarouselSlide
              key={idx}
              title={`Slide ${idx}`}
              style={calculateStyle(idx)}
            />
          ))}
        </div>
        {/* Carousel Navigation */}
        <div className="flex items-center gap-4">
          <Button
            intent="none"
            className="disabled:text-black/50"
            disabled={isArrowDisabled("left")}
            onClick={() => slider.current?.prev()}
          >
            <CaretLeft fill="currentColor" size={40} />
          </Button>
          {slider.current?.slides.map((_, idx) => (
            <button
              key={idx}
              className={cn(
                "h-1 w-24 bg-black/50",
                currentSlide === idx && "bg-black",
              )}
              onClick={() => slider.current?.moveToIdx(idx)}
            />
          ))}
          <Button
            intent="none"
            className="disabled:text-black/50"
            disabled={isArrowDisabled("right")}
            onClick={() => slider.current?.next()}
          >
            <CaretRight fill="currentColor" size={40} />
          </Button>
        </div>
      </div>
    </section>
  );
}
