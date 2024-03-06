import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { CaretDown, CaretUp, Check } from "@phosphor-icons/react";
import React from "react";

const MOCK_ALUMNI: string[] = `
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

export default function OurAlumnisPage() {
  const [alumniYear, setAlumniYear] = useState<string>("2023");

  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-[#052014] py-28">
      <div className="relative z-10 flex max-w-[960px] flex-col gap-14">
        <h1 className="relative font-heading text-3xl font-bold text-white">Our Alumnis</h1>
        <p className="relative flex items-center self-stretch text-xl font-normal text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex flex-col gap-12 self-stretch">
          <div className="flex flex-col gap-5 self-stretch">
            <div className="">
              <Select.Root value={alumniYear} onValueChange={setAlumniYear}>
                <Select.Trigger className="inline-flex h-[35px] items-center justify-center gap-[10px] px-[6px] text-2xl leading-none text-white outline-none">
                  <Select.Value aria-label={alumniYear}>{alumniYear}</Select.Value>
                  <Select.Icon className="text-white">
                    <CaretDown size={32} />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="z-20 overflow-hidden rounded-md bg-white">
                    <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-[#052014]">
                      <CaretUp size={32} />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="p-[5px]">
                      <Select.Group>
                        <SelectItem value="2020">2020</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                      </Select.Group>
                    </Select.Viewport>
                    <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-[#052014]">
                      <CaretDown size={16} />
                    </Select.ScrollDownButton>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
            <hr className="" />
          </div>

          <div className="ml-[120px]  grid grid-flow-col grid-rows-12 gap-x-[69px] text-base text-white">
            {MOCK_ALUMNI.map((alumni, index) => (
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

const SelectItem = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[16px] leading-none text-[#052014] hover:cursor-pointer data-[highlighted]:bg-[#052014] data-[highlighted]:text-white data-[highlighted]:outline-none"
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
          <Check size={16} />
        </Select.ItemIndicator>
      </Select.Item>
    );
  }
);
