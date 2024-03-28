import { useEffect, useState } from "react";
import React from "react";
import SelectComponent from "../base/Select";

export default function OurAlumnisPage() {
  const ALUMNI_YEARS = ["2022", "2023"];
  const [alumniYear, setAlumniYear] = useState<string>("2023");
  const [alumniInfo, setAlumniInfo] = useState<string[]>();

  useEffect(() => {
    async function fetchAlumniData(): Promise<string[]> {
      const alumniData = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_ROOT}/get_alumni/${alumniYear}`).then((res) =>
        res.json()
      );
      return alumniData.alumni[0].alumni;
    }
    fetchAlumniData().then((alumniData) => setAlumniInfo(alumniData));
  }, [alumniYear]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-[#052014] pb-[240px]">
      <div className="z-10 flex w-[960px] flex-col gap-[60px]">
        <h1 className="text-3xl font-bold text-white">Our Alumni</h1>
        <p className="flex items-center  text-xl font-normal text-white">
          We would like to give a toast to our alumnis from different years.
        </p>
        <div className="flex flex-col gap-[48px]">
          <div className="flex flex-col gap-[18px]">
            <div className="">
              <SelectComponent selection={ALUMNI_YEARS} state={alumniYear} setState={setAlumniYear} />
            </div>
            <hr className="" />
          </div>

          <div className="ml-[120px] grid grid-flow-col grid-rows-12 gap-x-[69px] text-base text-white">
            {alumniInfo?.map((alumni, index) => (
              <span key={`ALUMNI_#${index}-YR-${ALUMNI_YEARS}`} className="text-base text-white">
                {alumni}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
