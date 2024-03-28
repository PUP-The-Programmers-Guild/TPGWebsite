import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateFormatter(start_date: string, end_date: string) {
  const OUTPUT_FORMAT = "MMMM D, YYYY";
  const startDateObject = dayjs(start_date);
  const endDateObject = dayjs(end_date);

  if (startDateObject.month() === endDateObject.month()) {
    if (startDateObject.year() === endDateObject.year()) {
      if (startDateObject.date() === endDateObject.date()) {
        return startDateObject.format(OUTPUT_FORMAT);
      } else {
        return startDateObject.format("MMMM D") + " - " + endDateObject.format("D, YYYY");
      }
    } else {
      return startDateObject.format(OUTPUT_FORMAT) + " - " + endDateObject.format(OUTPUT_FORMAT);
    }
  } else {
    if (startDateObject.year() === endDateObject.year()) {
      return startDateObject.format("MMMM D") + " - " + endDateObject.format("MMMM D, YYYY");
    } else {
      return startDateObject.format(OUTPUT_FORMAT) + " - " + endDateObject.format(OUTPUT_FORMAT);
    }
  }
}
