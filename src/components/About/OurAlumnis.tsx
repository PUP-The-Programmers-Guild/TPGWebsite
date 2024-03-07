import { useEffect, useState } from "react";
import React from "react";
import SelectComponent from "../base/Select";

const MOCK_ALUMNI_LIST: string[] = `
  Estrella Coleman
  Warren Patrick
  Nicole Contreras
  Karley Patrick
  Cristal Donovan
  Jesse Elliott
  Payton Bright
  Jovan Finley
  Amaya Horne
  Mikaela King
  Lillian Andrews
  Jasiah Schwartz
  Katherine Cox
  Marely Pearson
  Ryker Hayden
  Marley Wolf
  Iyana Alexander
  Denisse Velasquez
  Mya Savage
  Evan Mckinney
  Kaden Wilcox
  Malcolm Tate
  Braylen Colon
  Yamilet Mcconnell
  Katherine Cox
  Marely Pearson
  Ryker Hayden
  Marley Wolf
  Iyana Alexander
  Denisse Velasquez
  Mya Savage
`
  .trim()
  .split("\n");

// Helper function to make different mock data per year
function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Suggestion on how the received data should look like
interface IAlumniData {
  [year: string]: string[];
}

const MOCK_ALUMNI_DATA: IAlumniData = {
  "2020": shuffle(MOCK_ALUMNI_LIST),
  "2021": shuffle(MOCK_ALUMNI_LIST),
  "2022": shuffle(MOCK_ALUMNI_LIST),
  "2023": shuffle(MOCK_ALUMNI_LIST),
  "2024": shuffle(MOCK_ALUMNI_LIST),
  "2025": shuffle(MOCK_ALUMNI_LIST),
};

export default function OurAlumnisPage() {
  const [alumniYear, setAlumniYear] = useState<string>("2024");
  const [alumniInfo, setAlumniInfo] = useState<string[]>(MOCK_ALUMNI_DATA[alumniYear]);

  useEffect(() => {
    setAlumniInfo(MOCK_ALUMNI_DATA[alumniYear]);
  }, [alumniYear]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-[#052014] pb-[240px]">
      <div className="z-10 flex max-w-[960px] flex-col gap-[60px]">
        <h1 className="text-3xl font-bold text-white">Our Alumni</h1>
        <p className="flex items-center  text-xl font-normal text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col gap-[18px]">
            <div className="">
              <SelectComponent selection={Object.keys(MOCK_ALUMNI_DATA)} state={alumniYear} setState={setAlumniYear} />
            </div>
            <hr className="" />
          </div>

          <div className="ml-[120px] grid grid-flow-col grid-rows-12 gap-x-[69px] text-base text-white">
            {alumniInfo.map((alumni, index) => (
              <span key={`ALUMNI_#${index}`} className="text-base text-white">
                {alumni}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
