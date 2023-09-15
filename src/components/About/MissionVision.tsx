const MissionContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
const VisionContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`

export default function MissionVision() {
  return (
    <section className="flex px-60 py-[7.5rem] gap-x-[4.56rem]">
      {
        [["Mission", MissionContent], ["Vision", VisionContent]]
        .map(([title, content]) => (
          <div>
            <div className="flex items-start gap-x-6 mb-10" key={title}>
              <h2 className="font-heading text-4xl font-bold">{title}</h2>

              {/* TODO: Icon for mission/vision beside the title */}
              <div className="w-10 h-10 border border-red-500"></div>
            </div>
            <p className="font-body text-2xl">{content}</p>
          </div>
        ))
      }
    </section>
  )
}
