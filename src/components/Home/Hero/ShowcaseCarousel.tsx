import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "@/styles/hero-carousel.module.css"

export default function ShowcaseCarousel() {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "snap",
        selector:".keen-slider__heroslide",
        slides: {
          origin:'center',
          perView: 'auto',
          spacing: 45.01,
        },
        created(s) {
          setTimeout(s.update, 0);
        }
      })    
    return (
        <div ref={ref} className="col-span-3 keen-slider" style={{maxWidth:"650px"}} >
            <div className="keen-slider__heroslide hero-slide1">1</div>
            <div className="keen-slider__heroslide hero-slide2">2</div>
            <div className="keen-slider__heroslide hero-slide3">3</div>
            <div className="keen-slider__heroslide hero-slide4">4</div>
            <div className="keen-slider__heroslide hero-slide5">5</div>
            <div className="keen-slider__heroslide hero-slide6">6</div>
        </div>
    )
}