import { useEffect, useState } from "react";
import React from "react";
import SelectComponent from "../base/Select";
import {
  MOCK_ALUMNI_2020,
  MOCK_ALUMNI_2021,
  MOCK_ALUMNI_2022,
  MOCK_ALUMNI_2023,
  MOCK_ALUMNI_2024,
  MOCK_ALUMNI_2025,
} from "@/mock/mockAlumni";

// Suggestion on how the received data should look like
interface IAlumniData {
  [year: string]: string[];
}

const MOCK_ALUMNI_DATA: IAlumniData = {
  "2020": MOCK_ALUMNI_2020,
  "2021": MOCK_ALUMNI_2021,
  "2022": MOCK_ALUMNI_2022,
  "2023": MOCK_ALUMNI_2023,
  "2024": MOCK_ALUMNI_2024,
  "2025": MOCK_ALUMNI_2025,
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
