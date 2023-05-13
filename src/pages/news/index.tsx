import RoundButton from "@/components/base/RoundButton";
import styles from "../../styles/newspage/news.module.css";

export default function NewsFeedPage() {
  return (
    <>
      <div className="z-100">
        <div className="container mx-auto align-middle">
          <div className="flex h-[calc(100vh_-_3rem)]">
            <div className="flex flex-1 items-center justify-center">
              <div>
                <p className={`${styles.NewsMetaInfo} text-2xl`}>
                  JAN 24 2023 | Author
                </p>
                <p className="Headings-Titles mb-10">
                  SPOTLIGHT STORY
                  <br />
                  re:CONNECT || re:KINDLE 2023
                </p>
                <p className={`${styles.NewsMetaInfo} mb-10`}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptates dignissimos reiciendis eaque voluptas a laudantium
                  obcaecati fugiat cum expedita necessitatibus! Amet eaque
                  officiis blanditiis ratione! Dolor voluptatum numquam sint,
                  maxime natus, sapiente aliquam mollitia assumenda
                  reprehenderit iusto laborum, quis odit accusantium? Reiciendis
                  quas optio molestias quo nisi maxime! Aperiam, illum.
                </p>
                <RoundButton url="#" text="Read" />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div>
                <img
                  src="https://picsum.photos/1200/800"
                  className="float-right w-[95%]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="z-100" id={styles.eventsaccomp}>
        <div className="container mx-auto py-20">
          <p className="Subheadings-1 pb-20 text-5xl text-white">Events</p>
          <div className="flex">
            {newsDataEvents.map((event) => (
              <div className="flex-1">
                <div className="mx-auto w-[95%]">
                  <img src={event.picture} className="mb-5 w-[100%]" alt="" />
                  <p className="Subheadings-1 mb-10 text-3xl text-white">
                    {event.title}
                  </p>
                  <RoundButton url="#" text="Read" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.line} m-auto`} />
        <div className="container mx-auto py-20">
          <p className="Subheadings-1 pb-20 text-5xl text-white">
            Accomplishments
          </p>
          <div className="flex">
            {newsDataAcc.map((event) => (
              <div className="flex-1">
                <div className="mx-auto w-[95%]">
                  <img src={event.picture} className="mb-5 w-[100%]" alt="" />
                  <p className="Subheadings-1 mb-10 text-3xl text-white">
                    {event.title}
                  </p>
                  <RoundButton url="#" text="Read" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Sample Data to Simulate CMS Backend
const newsDataMain = [
  {
    date: "JAN 24 2023",
    title: "Spotlight Story re:Connect || re:Kindle 2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dignissimos reiciendis eaque voluptas a laudantium obcaecati fugiat cum expedita necessitatibus! Amet eaque officiis blanditiis ratione! Dolor voluptatum numquam sint, maxime natus, sapiente aliquam mollitia assumenda reprehenderit iusto laborum, quis odit accusantium? Reiciendis quas optio molestias quo nisi maxime! Aperiam, illum.",
    picture: "news/main1.png",
  },
  {
    date: "FEB 24 2023",
    title: "TPG Look Back",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dignissimos reiciendis eaque voluptas a laudantium obcaecati fugiat cum expedita necessitatibus! Amet eaque officiis blanditiis ratione! Dolor voluptatum numquam sint, maxime natus, sapiente aliquam mollitia assumenda reprehenderit iusto laborum, quis odit accusantium? Reiciendis quas optio molestias quo nisi maxime! Aperiam, illum.",
    picture: "news/main2.png",
  },
  {
    date: "March 24 2023",
    title: "TPG Membership 2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates dignissimos reiciendis eaque voluptas a laudantium obcaecati fugiat cum expedita necessitatibus! Amet eaque officiis blanditiis ratione! Dolor voluptatum numquam sint, maxime natus, sapiente aliquam mollitia assumenda reprehenderit iusto laborum, quis odit accusantium? Reiciendis quas optio molestias quo nisi maxime! Aperiam, illum.",
    picture: "news/main3.png",
  },
];

const newsDataEvents = [
  {
    picture: "news/event1.png",
    title: "Event News #1",
  },
  {
    picture: "news/event2.png",
    title: "Event News #2",
  },
  {
    picture: "news/event3.png",
    title: "Event News #3",
  },
  {
    picture: "news/event4.png",
    title: "Event News #4",
  },
];

const newsDataAcc = [
  {
    picture: "news/accomplishment1.png",
    title: "Accomplishment #1",
  },
  {
    picture: "news/accomplishment2.png",
    title: "Accomplishment #2",
  },
  {
    picture: "news/accomplishment3.png",
    title: "Accomplishment #3",
  },
  {
    picture: "news/accomplishment4.png",
    title: "Accomplishment #4",
  },
];
