export default function EventsHero() {
  return (
    <div
      className="z-100 grid min-h-screen content-center  px-60"
      style={{
        backgroundImage: `
        radial-gradient(718.21% 485.56% at -44.51% 463.56%,rgba(42, 145, 52, 0.0), rgba(5, 32, 20, 0.85)),
        url("https://s3-alpha-sig.figma.com/img/c998/e40c/2ab6f1d40b821bbbabea787f97d81052?Expires=1700438400&Signature=O07OL~nEucWgw~dmPGOiO3CUXSeFqDsRANoi-ZZOOifAft0XkTaz4fI7WLJbBDItk927T~-bbJu0P~fg5Mctz7LyhfdwDXlIqPyiuZEnATxAhPoAJLUS6Jo3hSfNCMTDKFSqlxb3Y6CEPApRtE4ZN12Mw6xYGs8-ddMb-L5SYLoPEyJ7t5dHVt-RwEUvy0jrxwZjkDH2RQhKcObIQ5ZmVavWTiD85kz3WUxJmKEeobbAjKSlP4wqfZYn6AiUbY-NK1jBNfHlN3fRNPGxCdeR0K8yoeRiUxhdvGI8kGu8E8K6x1pzZaTcxD~a~c60M4-H7dW5UUgXv~3PoI4a1nmFLA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col gap-10">
        <div className="font-heading text-5xl font-bold leading-[140%] text-white">
          Building Connections and Experiences through Tech & Beyond
        </div>
        <div className="flex flex-col gap-20">
          <div className="line text-3xl text-white">
            Empower your growth journey with <br />
            TPG&apos;s diverse tech events.
          </div>
          <a
            href="#"
            className="text- flex max-w-fit flex-row items-center gap-1 bg-white px-6 py-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="19"
              viewBox="0 0 12 19"
              fill="none"
            >
              <path
                d="M6 18.5L11.7735 8.5L0.226498 8.5L6 18.5ZM5 0.5L5 9.5L7 9.5L7 0.5L5 0.5Z"
                fill="black"
              />
            </svg>
            Explore Events
          </a>
        </div>
      </div>
    </div>
  );
}
