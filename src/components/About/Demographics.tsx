const demographics = [
  ["Members", "+200"],
  ["Courses", "+10"],
  ["Alumnis", "+500"],
  ["Years", "3"],
]

export default function Demographics() {
  return (
    <section className="flex-row px-60 py-[7.5rem] gap-x-[4.56rem] bg-[#8a8a8a]">
      <div className="text-white">
        <h2 className="font-heading text-4xl font-bold mb-10">The Devskolar Community</h2>
        <p className="font-body text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex-row space-y-10 text-white py-16">
        {demographics.map(([category, est]) => (
          <div key={category} className="grid grid-cols-5 gap-x-4">
            <span className="font-heading text-5xl text-right col-span-4">{est}</span>
            <span className="font-heading text-[2rem] text-left">{category}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
