const executives = [
  {
    name: "Full Middle Name Here",
    role1: "Position Regular",
    role2: "Position Regular",
    role3: "Regular",
    imageUrl: "/Placeholder.png",
  },
  {
    name: "Full Middle Name Here",
    role1: "Position Regular",
    role2: "Position Regular",
    role3: "Regular",
    imageUrl: "/Placeholder.png",
  },
  {
    name: "Full Middle Name Here",
    role1: "Position Regular",
    role2: "Position Regular",
    role3: "Regular",
    imageUrl: "/Placeholder.png",
  },
  {
    name: "Full Middle Name Here",
    role1: "Position Regular",
    role2: "Position Regular",
    role3: "Regular",
    imageUrl: "/Placeholder.png",
  },
  {
    name: "Full Middle Name Here",
    role1: "Position Regular",
    role2: "Position Regular",
    role3: "Regular",
    imageUrl: "/Placeholder.png",
  },
  {
    name: "Full Middle Name Here",
    role1: "Position Regular",
    role2: "Position Regular",
    role3: "Regular",
    imageUrl: "/Placeholder.png",
  },
  {
    name: "Full Middle Name Here",
    role1: "Position Regular",
    role2: "Position Regular",
    role3: "Regular",
    imageUrl: "/Placeholder.png",
  },
  {
    name: "Full Middle Name Here",
    role1: "Position Regular",
    role2: "Position Regular",
    role3: "Regular",
    imageUrl: "/Placeholder.png",
  },
];

const committeeHeads = [
  {
    name: "Full Middle Name Here",
    role1: "Position Regular",
    role2: "Position Regular",
    role3: "Regular",
    imageUrl: "/Placeholder.png",
  },
  {
    name: "Full Middle Name Here",
    role1: "Position Regular",
    role2: "Position Regular",
    role3: "Regular",
    imageUrl: "/Placeholder.png",
  },
  {
    name: "Full Middle Name Here",
    role1: "Position Regular",
    role2: "Position Regular",
    role3: "Regular",
    imageUrl: "/Placeholder.png",
  },
  {
    name: "Full Middle Name Here",
    role1: "Position Regular",
    role2: "Position Regular",
    role3: "Regular",
    imageUrl: "/Placeholder.png",
  },
];

export default function Officers() {
  return (
    <div className="min-h-screen bg-[#8A8A8A]">
      <div className="flex flex-col px-60 py-[7.5rem]">
        <div className="pb-16">
          <h1 className="pb-16 font-heading text-[2.5rem] font-semibold text-white">
            The Officers
          </h1>
          <h2 className="pb-8 font-heading text-[2rem] font-semibold text-white">Our Executives</h2>
          <p className="pb-6 font-body text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <ul
            role="list"
            className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {executives.map((executives, idx) => (
              <li key={`${executives.name}-${idx}`}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={executives.imageUrl} alt="" />
                  <div>
                    <p className="text-sm font-semibold leading-7 tracking-tight text-white">
                      {executives.name}
                    </p>
                    <p className="text-[0.75rem] text-white">{executives.role1}</p>
                    <p className="text-[0.75rem] text-white">{executives.role2}</p>
                    <p className="text-[0.75rem] text-white">{executives.role3}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="pb-8 font-heading text-[2rem] font-semibold text-white">
            Our Committee Heads
          </h2>
          <p className="pb-6 font-body text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <ul
          role="list"
          className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {committeeHeads.map((committeeHeads, idx) => (
            <li key={`${committeeHeads.name}-${idx}`}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={committeeHeads.imageUrl} alt="" />
                <div>
                  <p className="text-sm font-semibold leading-7 tracking-tight text-white">
                    {committeeHeads.name}
                  </p>
                  <p className="text-[0.75rem] text-white">{committeeHeads.role1}</p>
                  <p className="text-[0.75rem] text-white">{committeeHeads.role2}</p>
                  <p className="text-[0.75rem] text-white">{committeeHeads.role3}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
