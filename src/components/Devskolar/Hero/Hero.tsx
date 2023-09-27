import HeroSteps from "./HeroSteps";

export default function HeroSection() {
  return (
    <div className="relative h-screen overflow-hidden bg-white">
      <div className="flex items-center justify-between">
        <div className="w-1/2 p-16">
          <h1 className="pt-20 text-4xl">
            <span className="text-7xl text-black">BE A </span> <br />
            <span className="text-8xl font-bold text-green-500">DEV</span>
            <span className="text-8xl font-bold">SKOLAR</span>
          </h1>
          <div className="py-4">
            <button className="mx-auto inline-block max-w-xs rounded-2xl bg-gray-800 px-4 py-2 text-white">
              Join Now!
            </button>
          </div>
        </div>
      </div>
      <HeroSteps />
    </div>
  );
}
