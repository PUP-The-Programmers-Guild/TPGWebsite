import { KeenSliderInstance, useKeenSlider } from "keen-slider/react";
import { createContext, ReactNode, useContext, useState } from "react";

interface ICarouselProvider {
  children: ReactNode[];
}

const CarouselContext = createContext<KeenSliderInstance | null | undefined>(
  null
);

export default function CarouselProvider({ children }: ICarouselProvider) {
  const [slider, setSlider] = useState<KeenSliderInstance>();
  const [slideRef] = useKeenSlider({
    selector: ".event-slide",
    slides: {
      perView: 1.25,
    },
    detailsChanged(slider) {
      setSlider({ ...slider });
    },
  });

  return (
    <CarouselContext.Provider value={slider}>
      <div ref={slideRef} className="keen-slider flex-1">
        {children.slice(0, -1)}
      </div>
      {children.slice(-1)}
    </CarouselContext.Provider>
  );
}

export function useEventsSlider() {
  const slider = useContext(CarouselContext);
  if (slider === null) {
    throw new Error("Child must be a children of CarouselProvider");
  }
  return slider;
}
