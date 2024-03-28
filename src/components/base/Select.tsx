import * as Select from "@radix-ui/react-select";
import { CaretDown, CaretUp, Check } from "@phosphor-icons/react";
import React from "react";

interface ISelectComponentProps {
  selection: string[];
  state: string;
  setState: (value: string) => void;
}

export default function SelectComponent(props: ISelectComponentProps) {
  return (
    <>
      <Select.Root value={props.state} onValueChange={props.setState}>
        <Select.Trigger
          className="inline-flex h-[35px] items-center justify-center gap-[2px] text-2xl leading-none text-white outline-none"
          aria-label="Select Alumni Year to display"
        >
          <Select.Value aria-label={props.state}>{props.state}</Select.Value>
          <Select.Icon className="text-white">
            <CaretDown size={32} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="z-20 overflow-hidden rounded-md bg-white">
            <Select.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-[#052014]">
              <CaretUp size={16} />
            </Select.ScrollUpButton>
            <Select.Viewport className="p-[5px]">
              <Select.Group>
                {props.selection.map((item, index) => (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-[#052014]">
              <CaretDown size={16} />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
}

const SelectItem = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string; value: string }>(
  ({ children, className, value, ...props }, forwardedRef) => {
    return (
      <Select.Item
        value={value}
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

SelectItem.displayName = "SelectItem";
