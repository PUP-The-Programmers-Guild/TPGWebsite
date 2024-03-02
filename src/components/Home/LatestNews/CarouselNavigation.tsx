import Button from "@/components/base/Button";
import { cn } from "@/lib/utils";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useEventsSlider } from "./CarouselContext";

export function CarouselNavigation() {
  const slider = useEventsSlider();
  const currentSlide = slider?.track.details.rel ?? 0;

  return (
    <div className="flex items-center gap-4">
      <ArrowButton direction="left" />
      {slider?.slides.map((_, idx) => (
        <button
          key={idx}
          className={cn("h-1 w-16 bg-[#C3A7A7]", currentSlide === idx && "bg-white")}
          onClick={() => slider?.moveToIdx(idx)}
        />
      ))}
      <ArrowButton direction="right" />
    </div>
  );
}

function ArrowButton({ direction }: { direction: string }) {
  const slider = useEventsSlider();
  const currentSlide = slider?.track.details.rel ?? 0;
  const slidesLength = slider?.track.details.slides.length ?? 0;

  function isArrowDisabled() {
    if (direction === "left") return currentSlide === 0;
    return currentSlide === slidesLength - 1;
  }

  return (
    <Button
      intent="none"
      className="text-white disabled:text-[#C3A7A7]"
      disabled={isArrowDisabled()}
      onClick={() => (direction === "left" ? slider?.prev() : slider?.next())}
    >
      {direction === "left" ? (
        <CaretLeft fill="currentColor" size={24} weight="bold" />
      ) : (
        <CaretRight fill="currentColor" size={24} weight="bold" />
      )}
    </Button>
  );
}
