import CarouselProvider from "./CarouselContext";
import { CarouselNavigation } from "./CarouselNavigation";
import CarouselSlide from "./CarouselSlide";
import "keen-slider/keen-slider.min.css";

export default function LatestNews() {
  /** @TODO: fetching data in backend API */
  return (
    <section className="flex justify-center bg-[#052014] py-12">
      <div className="flex max-w-[960px] flex-1 flex-col gap-10 overflow-hidden">
        <h2 className="font-heading text-6xl font-bold leading-[84px] text-[#E6F5D6]">LATEST EVENTS</h2>
        <CarouselProvider>
          {[0, 1, 2, 3].map((idx) => (
            <CarouselSlide
              key={idx}
              title={`Slide ${idx}`}
              image={`https://picsum.photos/920/480?random=${idx}`}
              idx={idx}
            />
          ))}
          <CarouselNavigation />
        </CarouselProvider>
      </div>
    </section>
  );
}
