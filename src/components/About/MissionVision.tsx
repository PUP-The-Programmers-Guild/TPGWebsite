const MissionContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
const VisionContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

export default function MissionVision() {
  return (
    <section className="flex px-[15rem] py-[7.5rem] gap-x-[4.56rem]">
      {
        [["Mission", MissionContent], ["Vision", VisionContent]]
        .map(([title, content]) => (
          <div key={title}>
            <div className="flex items-start gap-x-[1.5rem] mb-[2.5rem]" key={title}>
              <h2 className="font-heading text-4xl font-bold">{title}</h2>

              {/* TODO: Icon for mission/vision beside the title */}
              <div className="w-[2.5rem] h-[2.5rem] border border-red-500"></div>
            </div>
            <p className="font-body text-2xl">{content}</p>
          </div>
        ))
      }
    </section>
  )
}
