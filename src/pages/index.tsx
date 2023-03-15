import Container from "@/components/Container";
import HeroCarousel from "@/components/Home/Hero/HeroCarousel";

export default function IndexPage() {
    return (
        <>
            <div className="min-h-[calc(100vh_-_rem)]">
                <HeroCarousel />
            </div>
            <div className="z-100 min-h-[400vh]">
                <h1 className="text-2xl underline">
                    About Us
                </h1>
            </div>
            <div className="z-100 min-h-[100vh]">
                <h1 className="text-2xl underline">
                    News
                </h1>
            </div>
            <div className="z-100 min-h-[200vh]">
                <h1 className="text-2xl underline">
                    FAQ
                </h1>
            </div>
            <div className="z-100 min-h-[100vh]">
                <h1 className="text-2xl underline">
                    Contact Us
                </h1>
            </div>
        </>
    )
}