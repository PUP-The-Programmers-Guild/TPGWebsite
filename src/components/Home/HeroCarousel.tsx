import { CaretDown } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

// Inf. Loop Move, Lazy load

// Mock Data, pictures will be fetched from sanity
const images = [
  "https://images.unsplash.com/photo-1590004953392-5aba2e72269a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004845575-cc18b13d1d0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
  "https://images.unsplash.com/photo-1590005176489-db2e714711fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80",
];

export default function HeroCarousel() {
  const [opacities, setOpacities] = useState<number[]>([]);
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      slides: images.length,
      loop: true,
      renderMode: "performance",
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map((slide) => slide.portion);
        setOpacities(new_opacities);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section className="relative -z-10 min-h-screen">
      <h1 className="absolute left-1/2 top-1/2 z-10 w-3/4  -translate-x-1/2 -translate-y-1/2 text-center font-heading text-8xl uppercase leading-[96.02px] text-white">
        Empowering the next generation of coders
      </h1>
      <button className="absolute bottom-[3%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
        <CaretDown size={91} weight="bold" />
      </button>

      <div ref={sliderRef} className="relative -z-10 min-h-screen min-w-full overflow-hidden">
        {images.map((src, idx) => (
          <div key={idx} className="absolute -z-10 min-h-full min-w-full" style={{ opacity: opacities[idx] }}>
            <Image
              src={src}
              alt="an image"
              fill
              className="absolute h-full w-full bg-transparent object-cover brightness-50"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
