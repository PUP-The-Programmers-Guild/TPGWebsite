import RoundButton from "@/components/base/RoundButton";

export default function NewsFeedPage() {
  return (
    <>
      {/* Spotlight Story */}
      <div className="container mx-auto grid grid-cols-2 gap-8 py-14">
        {/* Spotlight Metadata */}
        <div className="grid justify-items-start">
          <p className="text-2xl font-light">JAN 24 2023 | Author</p>
          <p className="Headings-Titles">
            SPOTLIGHT STORY re:CONNECT || re:KINDLE 2023
          </p>
          <p className="my-10 font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            dignissimos reiciendis eaque voluptas a laudantium obcaecati fugiat
            cum expedita necessitatibus! Amet eaque officiis blanditiis ratione!
            Dolor voluptatum numquam sint, maxime natus, sapiente aliquam
            mollitia assumenda reprehenderit iusto laborum, quis odit
            accusantium? Reiciendis quas optio molestias quo nisi maxime!
            Aperiam, illum.
          </p>
          <RoundButton url="#" text="Read" />
        </div>

        {/* Spotlight Image */}
        <img
          className="my-auto"
          src="https://picsum.photos/1200/800"
          alt="the spotlight picture"
        />
      </div>

      {/* TODO: The styles of the events and accomplishments container is the same, maybe converge to only one? */}
      {/* Events and Accomplishments */}
      <div className="divide-y-4 divide-white bg-[#293c4b] text-white">
        {/* Events */}
        <div className="container mx-auto space-y-20 py-20">
          <p className="Subheadings-1 text-5xl">Events</p>
          <div className="flex gap-4">
            {newsDataEvents.map((event) => (
              <div className="grid justify-items-start">
                <img src={event.picture} alt="" />
                <p className="Subheadings-1 my-5 text-3xl">{event.title}</p>
                <RoundButton url="#" text="Read" />
              </div>
            ))}
          </div>
        </div>

        {/* Accomplishments */}
        <div className="container mx-auto space-y-20 py-20">
          <p className="Subheadings-1 text-5xl">Accomplishments</p>
          <div className="flex gap-4">
            {newsDataAcc.map((event) => (
              <div className="grid justify-items-start">
                <img src={event.picture} alt="" />
                <p className="Subheadings-1 my-5 text-3xl">{event.title}</p>
                <RoundButton url="#" text="Read" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Sample Data to Simulate CMS Backend
const newsDataEvents = [
  {
    title: "Event News #1",
    picture: "news/event1.png",
  },
  {
    title: "Event News #2",
    picture: "news/event2.png",
  },
  {
    title: "Event News #3",
    picture: "news/event3.png",
  },
  {
    title: "Event News #4",
    picture: "news/event4.png",
  },
];

const newsDataAcc = [
  {
    title: "Accomplishment #1",
    picture: "news/accomplishment1.png",
  },
  {
    title: "Accomplishment #2",
    picture: "news/accomplishment2.png",
  },
  {
    title: "Accomplishment #3",
    picture: "news/accomplishment3.png",
  },
  {
    title: "Accomplishment #4",
    picture: "news/accomplishment4.png",
  },
];
