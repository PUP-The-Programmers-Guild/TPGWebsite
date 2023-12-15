import BoxDecoration from "./BoxDecoration";

export default function DevskolarInfo() {
  return (
    <section className="mx-auto grid min-h-screen bg-[#6F5D5D] px-20">
      <div className="relative h-full overflow-hidden">
        <BoxDecoration />
        <div className="relative z-10 mx-auto flex min-h-full max-w-screen-2xl flex-col justify-center gap-8 text-white">
          <h1 className="font-tpgTitle text-8xl">BE A DEVSKOLAR</h1>
          <p className="max-w-prose">
            PUP The Programmers&apos; Guild is a uni-wide organization that is proud to welcome students aboard our
            group as a Devskolar. As a Devskolar, you&apos;ll be able to join various webinars, events, contests, &,
            etc. that are only offered by PUP-TPG and its partnered organization. One will be faced with various
            challenges and difficulties through these activities in return you&apos;ll gain access to a wealth of
            knowledge and opportunities to enhance your career in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
}
