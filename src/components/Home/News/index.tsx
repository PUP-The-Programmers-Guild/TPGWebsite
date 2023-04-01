import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { CaretRight } from "@phosphor-icons/react"

//https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/basic/free-mode/react-typescript?file=/src/styles.css

export default function HomeNews() {

    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "snap",
        selector: ".keen-slider__newsslide",
        slides: {
          perView: 'auto',
          spacing: 34,
          origin: 0.1
        },
      })    
    return (
        <>
            <div className="pt-[9.125rem] pb-[4.75rem] pl-[176px]">
                <div className="items-center justify-start mb-[3.688rem] flex">
                    <h2 className="text-5xl">News</h2>
                    <CaretRight weight="bold" size={48}/>
                </div>
                <p className="whitespace-pre-wrap text-[20px] mr-[11.125rem]">
                    The PUP Programmers&apos; Guild is a university wide organization composed of different programmers and 
                    developers, conducting different events and activities related to the fields of programming and development.
                </p>
            </div>
            <div className="mb-[10.625rem]">
                <div ref={ref} className="keen-slider">
                    <div className="keen-slider__newsslide number-slide1">1</div>
                    <div className="keen-slider__newsslide number-slide2">2</div>
                    <div className="keen-slider__newsslide number-slide3">3</div>
                    <div className="keen-slider__newsslide number-slide4">4</div>
                    <div className="keen-slider__newsslide number-slide5">5</div>
                    <div className="keen-slider__newsslide number-slide6">6</div>
                </div>
            </div>
        </>
    )
}