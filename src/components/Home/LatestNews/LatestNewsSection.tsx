import { cn } from "@/lib/utils";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { TrackDetails, useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import LatestNewsPreview from "./LatestNewsPreview";

// TODO: some parts here could be separated into own component or custom hook
export default function LatestNewsSection() {
  const [details, setDetails] = useState<TrackDetails>();
  const [slideRef, slider] = useKeenSlider({
    loop: false,
    slides: {
      perView: 1.25,
    },
    detailsChanged(slider) {
      setDetails(slider.track.details);
    },
  });
  const currentSlide = details?.rel ?? 0;
  const slidesLength = details?.slides.length ?? 0;

  // TODO: to fix the glitchy thing when changing slides through touch, try to mess with the translateX instead of right property
  function calculateStyle(idx: number) {
    if (details) {
      const slide = details.slides[idx];
      const scaleY = 1 - Math.abs(0.2 * slide.distance);
      const right = 100 - (100 - 85 * slide.distance);

      let zIndex = 1000;
      if (currentSlide !== idx) {
        zIndex = slidesLength - Math.abs(currentSlide - idx);
      }

      let opacity = Math.max(1 - Math.abs(slide.distance / 1.5), 0.25);
      if (currentSlide === idx && currentSlide === slidesLength - 1) {
        opacity = 1;
      }

      return {
        "--img-opacity": opacity,
        zIndex,
        right: `${right}%`,
        scale: `1 ${scaleY}`,
      };
    }
  }

  function isArrowDisabled(direction: "left" | "right") {
    if (!slider.current) return true;
    if (direction === "left") return currentSlide === 0;
    return currentSlide === slidesLength - 1;
  }

  return (
    <section className="flex min-h-screen border-y-4 bg-background py-12">
      <div className="mx-auto flex max-w-6xl flex-1 flex-col gap-10">
        <h2 className="font-heading text-5xl font-bold">LATEST EVENTS</h2>
        {/* Events Carousel */}
        <div ref={slideRef} className="keen-slider relative flex-1">
          {[0, 1, 2, 3].map((idx) => (
            <LatestNewsPreview
              key={idx}
              image="Placeholder1.png"
              title={`Slide ${idx}`}
              className="keen-slider__slide"
              style={calculateStyle(idx)}
            />
          ))}
        </div>
        {/* Carousel Navigation */}
        <div className="flex items-center gap-4">
          <button
            className="disabled:text-black/50"
            onClick={() => slider.current?.prev()}
            disabled={isArrowDisabled("left")}
          >
            <CaretLeft fill="currentColor" size={40} />
          </button>
          {slider.current?.slides.map((_, idx) => (
            <button
              key={idx}
              className={cn(
                "h-1 w-24 bg-black/50",
                currentSlide === idx && "bg-black"
              )}
              onClick={() => slider.current?.moveToIdx(idx)}
            />
          ))}
          <button
            className="disabled:text-black/50"
            onClick={() => slider.current?.next()}
            disabled={isArrowDisabled("right")}
          >
            <CaretRight fill="currentColor" size={40} />
          </button>
        </div>
      </div>
    </section>
  );
}
