import { CaretRight } from "@phosphor-icons/react";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { mockDataImage } from "@/mock/mockdataImage";

//https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/basic/free-mode/react-typescript?file=/src/styles.css

export default function HomeNews() {

  const numberSlide = "flex items-center justify-center text-[50px] text-black font-medium min-h-[271px] min-w-[339px] max-h-[339px]"

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    selector: ".keen-slider__newsslide",
    slides: {
      perView: "auto",
      spacing: 34,
      origin: 0.1,
    },
  });
  return (
    <>
      <div className="pb-[4.75rem] pl-[176px] pt-[9.125rem]">
        <div className="mb-[3.688rem] flex items-center justify-start">
          <h2 className="text-5xl">News</h2>
          <CaretRight weight="bold" size={48} />
        </div>
        <p className="mr-[11.125rem] whitespace-pre-wrap text-[20px]">
          The PUP Programmers&apos; Guild is a university wide organization
          composed of different programmers and developers, conducting different
          events and activities related to the fields of programming and
          development.
        </p>
      </div>
      <div className="mb-[10.625rem]">
        <div ref={ref} className="keen-slider">
          {
            mockDataImage.map((item, index) => (
                <Image 
                  key={`newsCarousel-${index}`}
                  src={item.url}
                  alt={item.url}
                  width={339}
                  height={271}
                  className={`keen-slider__newsslide ${numberSlide}`}
                />
            ))
          }
        </div>
      </div>
    </>
  );
}
