import CarouselProvider from "./CarouselContext";
import { CarouselNavigation } from "./CarouselNavigation";
import CarouselSlide from "./CarouselSlide";

interface ILatestNewsEvent {
  title: string;
  image_url: string;
  facebook_url: string;
}

interface ILatestNewsProps {
  events: ILatestNewsEvent[];
}

export default function LatestNews(props: ILatestNewsProps) {
  /** @TODO: fetching data in backend API */
  return (
    <section className="flex justify-center bg-[#052014] py-12">
      <div className="flex max-w-[960px] flex-1 flex-col gap-10 overflow-hidden">
        <h2 className="font-heading text-6xl font-bold leading-[84px] text-[#E6F5D6]">LATEST EVENTS</h2>
        <CarouselProvider>
          {props.events.map((event, idx) => (
            <CarouselSlide key={idx} title={event.title} image={event.image_url} link={event.facebook_url} idx={idx} />
          ))}
          <CarouselNavigation />
        </CarouselProvider>
      </div>
    </section>
  );
}
