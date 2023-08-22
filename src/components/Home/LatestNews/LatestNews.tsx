import CarouselProvider from "./CarouselContext";
import { CarouselNavigation } from "./CarouselNavigation";
import CarouselSlide from "./CarouselSlide";

export default function LatestNews() {
  /** @TODO: fetching data in backend API */
  return (
    <section className="flex min-h-screen border-y-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-1 flex-col gap-10">
        <h2 className="font-heading text-5xl font-bold">LATEST EVENTS</h2>
        <CarouselProvider>
          {[0, 1, 2, 3].map((idx) => (
            <CarouselSlide
              key={idx}
              title={`Slide ${idx}`}
              image="Placeholder1.png"
              idx={idx}
            />
          ))}
          <CarouselNavigation />
        </CarouselProvider>
      </div>
    </section>
  );
}
