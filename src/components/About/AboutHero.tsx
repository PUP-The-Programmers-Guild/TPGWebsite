import { mockDataImage } from "@/mock/mockdataImage";
import { ArrowDown } from "@phosphor-icons/react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    selector: ".aboutHeroCarouselSlide",
    slides: {
      origin: "center",
      perView: 1.378,
      spacing: 31,
    },
    created(s) {
      setTimeout(s.update, 0);
    },
  });

  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-[#052014] ">
      <div className="flex max-w-[960px] flex-row justify-around gap-[64px] pb-[158.54px] pt-[121px]">
        <div className="mt-[10px] h-full">
          <p className="mb-[40px] ml-[6.5px] font-heading text-4xl font-bold leading-[49px] text-white">
            Coding is <br />
            for everyone
          </p>
          <p className="mb-[24.5px] ml-[6.5px] font-body text-2xl leading-7 text-white">
            Hear more about our advocacy and community.
          </p>
          <Link href="#missionvision">
            <button className="mb-[71px] flex items-center justify-center gap-[10px] bg-white px-[25px] py-[12px] hover:bg-[#DFF2C8]">
              <ArrowDown size={20} weight="fill" />
              <span className="font-body text-base font-bold uppercase">Learn more</span>
            </button>
          </Link>
        </div>

        <div className="relative max-w-[450px] overflow-visible">
          <div className="pointer-events-none absolute left-[213px] top-[-35px] z-[100] flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#FFEA49] shadow-[0_0_30px_15px_rgba(255,234,73,1)]">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19.2857 16.9714L27 24.6857L24.6857 27L16.9714 19.2857V18.0669L16.5549 17.6349C14.796 19.1469 12.5126 20.0571 10.0286 20.0571C7.36883 20.0571 4.81802 19.0006 2.9373 17.1198C1.05658 15.2391 0 12.6883 0 10.0286C0 7.36883 1.05658 4.81802 2.9373 2.9373C4.81802 1.05658 7.36883 0 10.0286 0C12.6883 0 15.2391 1.05658 17.1198 2.9373C19.0006 4.81802 20.0571 7.36883 20.0571 10.0286C20.0571 12.5126 19.1469 14.796 17.6349 16.5549L18.0669 16.9714H19.2857ZM10.0286 2.31429L9.18 2.36057C8.80971 3.16286 8.23886 4.52057 7.82229 6.17143H12.2349C11.8183 4.52057 11.2474 3.16286 10.8771 2.36057C10.5994 2.31429 10.3217 2.31429 10.0286 2.31429ZM16.7091 6.17143C15.7989 4.58229 14.3331 3.348 12.5743 2.74629C12.9446 3.564 13.4229 4.752 13.7777 6.17143H16.7091ZM3.348 6.17143H6.27943C6.63429 4.752 7.11257 3.564 7.48286 2.74629C5.724 3.348 4.25829 4.58229 3.348 6.17143ZM2.31429 10.0286C2.31429 10.8 2.43771 11.6177 2.66914 12.3429H5.97086L5.78571 10.0286L5.97086 7.71429H2.66914C2.43771 8.43943 2.31429 9.25714 2.31429 10.0286ZM17.388 12.3429C17.6194 11.6177 17.7429 10.8 17.7429 10.0286C17.7429 9.25714 17.6194 8.43943 17.388 7.71429H14.0863C14.2097 8.48571 14.2714 9.25714 14.2714 10.0286C14.2714 10.8 14.2097 11.5714 14.0863 12.3429H17.388ZM7.51371 7.71429L7.32857 10.0286L7.51371 12.3429H12.5434C12.6669 11.5714 12.7286 10.8 12.7286 10.0286C12.7286 9.25714 12.6669 8.48571 12.5434 7.71429H7.51371ZM10.0286 17.7429C10.3063 17.7429 10.584 17.7429 10.8463 17.6966C11.232 16.8943 11.8183 15.5366 12.2349 13.8857H7.82229C8.23886 15.5366 8.82514 16.8943 9.21086 17.6966L10.0286 17.7429ZM16.7091 13.8857H13.7777C13.4229 15.3051 12.9446 16.4931 12.5743 17.3109C14.3331 16.7091 15.7989 15.4749 16.7091 13.8857ZM3.348 13.8857C4.25829 15.4749 5.724 16.7091 7.48286 17.3109C7.11257 16.4931 6.63429 15.3051 6.27943 13.8857H3.348Z"
                fill="#FAFCFE"
              />
            </svg>
          </div>
          <div className="pointer-events-none absolute left-[349px] top-[32px] z-[100] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#FFEA49] shadow-[0_0_30px_15px_rgba(255,234,73,1)]">
            <svg width="38" height="33" viewBox="0 0 38 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.6228 0L24.1967 0.733334L17.3772 33L13.8033 32.2667L20.6228 0ZM32.8397 16.5L26.2937 9.91833V4.73L38 16.5L26.2937 28.2517V23.0633L32.8397 16.5ZM0 16.5L11.7063 4.73V9.91833L5.16027 16.5L11.7063 23.0633V28.2517L0 16.5Z"
                fill="#FAFCFE"
              />
            </svg>
          </div>
          <div className="pointer-events-none absolute left-0 top-[188px] z-[100] flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#FFEA49] shadow-[0_0_30px_15px_rgba(255,234,73,1)]">
            <svg width="40" height="39" viewBox="0 0 40 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M28.72 23.4C28.88 22.113 29 20.826 29 19.5C29 18.174 28.88 16.887 28.72 15.6H35.48C35.8 16.848 36 18.1545 36 19.5C36 20.8455 35.8 22.152 35.48 23.4M25.18 34.242C26.38 32.0775 27.3 29.7375 27.94 27.3H33.84C31.92 30.5175 28.86 33.0135 25.18 34.242ZM24.68 23.4H15.32C15.12 22.113 15 20.826 15 19.5C15 18.174 15.12 16.8675 15.32 15.6H24.68C24.86 16.8675 25 18.174 25 19.5C25 20.826 24.86 22.113 24.68 23.4ZM20 35.022C18.34 32.682 17 30.0885 16.18 27.3H23.82C23 30.0885 21.66 32.682 20 35.022ZM12 11.7H6.16C8.06 8.463 11.14 5.967 14.8 4.758C13.6 6.9225 12.7 9.2625 12 11.7ZM6.16 27.3H12C12.7 29.7375 13.6 32.0775 14.8 34.242C11.14 33.0135 8.06 30.5175 6.16 27.3ZM4.52 23.4C4.2 22.152 4 20.8455 4 19.5C4 18.1545 4.2 16.848 4.52 15.6H11.28C11.12 16.887 11 18.174 11 19.5C11 20.826 11.12 22.113 11.28 23.4M20 3.9585C21.66 6.2985 23 8.9115 23.82 11.7H16.18C17 8.9115 18.34 6.2985 20 3.9585ZM33.84 11.7H27.94C27.3 9.2625 26.38 6.9225 25.18 4.758C28.86 5.9865 31.92 8.463 33.84 11.7ZM20 0C8.94 0 0 8.775 0 19.5C0 24.6717 2.10714 29.6316 5.85786 33.2886C7.71504 35.0993 9.91982 36.5357 12.3463 37.5157C14.7728 38.4956 17.3736 39 20 39C25.3043 39 30.3914 36.9455 34.1421 33.2886C37.8929 29.6316 40 24.6717 40 19.5C40 16.9392 39.4827 14.4035 38.4776 12.0377C37.4725 9.67182 35.9993 7.52216 34.1421 5.71142C32.285 3.90068 30.0802 2.46432 27.6537 1.48435C25.2272 0.504382 22.6264 0 20 0Z"
                fill="#FAFCFE"
              />
            </svg>
          </div>
          <div className="pointer-events-none absolute left-[30px] top-[272px] z-[100] flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#FFEA49] shadow-[0_0_30px_15px_rgba(255,234,73,1)]">
            <svg width="54" height="36" viewBox="0 0 54 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 4.5H45V27H9M45 31.5C46.1935 31.5 47.3381 31.0259 48.182 30.182C49.0259 29.3381 49.5 28.1935 49.5 27V4.5C49.5 2.0025 47.475 0 45 0H9C6.5025 0 4.5 2.0025 4.5 4.5V27C4.5 28.1935 4.97411 29.3381 5.81802 30.182C6.66193 31.0259 7.80653 31.5 9 31.5H0V36H54V31.5H45Z"
                fill="#FAFCFE"
              />
            </svg>
          </div>
          <div className="pointer-events-none absolute left-[300px] top-[285px] z-[100] flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#FFEA49] shadow-[0_0_30px_15px_rgba(255,234,73,1)]">
            <svg width="34" height="19" viewBox="0 0 34 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 0C18.315 0 19.5762 0.483189 20.5061 1.34327C21.4359 2.20335 21.9583 3.36987 21.9583 4.58621C21.9583 5.80254 21.4359 6.96906 20.5061 7.82914C19.5762 8.68923 18.315 9.17241 17 9.17241C15.685 9.17241 14.4238 8.68923 13.4939 7.82914C12.5641 6.96906 12.0417 5.80254 12.0417 4.58621C12.0417 3.36987 12.5641 2.20335 13.4939 1.34327C14.4238 0.483189 15.685 0 17 0ZM7.08333 3.27586C7.87667 3.27586 8.61333 3.47241 9.25083 3.82621C9.03833 5.7 9.63333 7.56069 10.8517 9.01517C10.1433 10.2731 8.72667 11.1379 7.08333 11.1379C5.95616 11.1379 4.87516 10.7238 4.07813 9.98656C3.2811 9.24935 2.83333 8.24947 2.83333 7.2069C2.83333 6.16432 3.2811 5.16445 4.07813 4.42723C4.87516 3.69002 5.95616 3.27586 7.08333 3.27586ZM26.9167 3.27586C28.0438 3.27586 29.1248 3.69002 29.9219 4.42723C30.7189 5.16445 31.1667 6.16432 31.1667 7.2069C31.1667 8.24947 30.7189 9.24935 29.9219 9.98656C29.1248 10.7238 28.0438 11.1379 26.9167 11.1379C25.2733 11.1379 23.8567 10.2731 23.1483 9.01517C24.3667 7.56069 24.9617 5.7 24.7492 3.82621C25.3867 3.47241 26.1233 3.27586 26.9167 3.27586ZM7.79167 16.7069C7.79167 13.9945 11.9142 11.7931 17 11.7931C22.0858 11.7931 26.2083 13.9945 26.2083 16.7069V19H7.79167V16.7069ZM0 19V17.0345C0 15.2131 2.6775 13.68 6.30417 13.2345C5.46833 14.1255 4.95833 15.3572 4.95833 16.7069V19H0ZM34 19H29.0417V16.7069C29.0417 15.3572 28.5317 14.1255 27.6958 13.2345C31.3225 13.68 34 15.2131 34 17.0345V19Z"
                fill="#FAFCFE"
              />
            </svg>
          </div>
          <div className="margin-[100px] absolute left-1/2 top-1/2 h-[1px] w-[1px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-white shadow-[0_0_250px_100px_rgba(255,_235,_132,_0.7)]"></div>
          <div ref={ref} className="keen-slider">
            <div className="absolute z-40 h-full w-full bg-[linear-gradient(to_right,_rgba(5,32,20,0.8),_rgba(0,0,0,0)_35px,_rgba(0,0,0,0)_415px,_rgba(5,32,20,0.8))]"></div>
            {mockDataImage.map((item, index) => (
              <Image
                className="aboutHeroCarouselSlide z-1 flex h-[293px] max-w-[318px] items-center justify-center"
                key={`heroslider-${index}`}
                src={item.url}
                alt={`${item.url}`}
                height={293}
                width={318}
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
