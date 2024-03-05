const demographics = [
  ["DevSkolars", "274"],
  ["Courses", "8"],
  ["Alumnis", "+500"],
  ["Years", "3"],
];

export default function Demographics() {
  return (
    <section className="flex flex-row items-center justify-center gap-x-[4.56rem] bg-[#052014] px-60 pb-[164px] pt-60">
      <div className="flex max-w-[960px] flex-col">
        <div className="w-[65%] text-white">
          <h2 className="mb-10 font-heading text-4xl font-bold">The Devskolar Community</h2>
          <p className="font-body text-xl">
            The PUP Programmers&apos; Guild is a university wide organization composed of different programmers and
            developers, conducting different events and activities related to the fields of programming and development.
          </p>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="space-y-10 pt-[72px] text-white">
            {demographics.map(([category, est]) => (
              <div key={category} className="grid grid-cols-5 items-end gap-x-4">
                <span className="col-span-4 text-right font-heading text-5xl">{est}</span>
                <span className="text-left font-heading text-3xl text-[2rem]">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
