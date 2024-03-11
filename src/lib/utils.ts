import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateFormatter(dateranges: string[]) {
  const INPUT_FORMAT = "MM/DD/YYYY";
  const OUTPUT_FORMAT = "MMMM D, YYYY";

  const daterangeCount = dateranges.length;
  if (daterangeCount === 1) {
    const singleDaterange = dateranges[0];
    const dateCount = singleDaterange.split(" - ").length;
    if (dateCount === 1) {
      const parsedDate = dayjs(singleDaterange, INPUT_FORMAT).format(OUTPUT_FORMAT);
      return parsedDate;
    } else {
      const splitDates = singleDaterange.split(" - ");
      const formattedDates = splitDates.map((date) => dayjs(date, INPUT_FORMAT));
      const firstDate = formattedDates[0];
      const lastDate = formattedDates[1];
      if (firstDate.month() === lastDate.month() && firstDate.year() === lastDate.year()) {
        return firstDate.format("MMMM D") + "-" + lastDate.format("D, YYYY");
      } else {
        return formattedDates.map((date) => date.format(OUTPUT_FORMAT));
      }
    }
  } else if (daterangeCount > 1) {
    const parsedDateranges = dateranges.map((daterange, daterange_idx) => {
      const splitDateranges = daterange.split(" - ");
      const firstDate = dayjs(splitDateranges[0], INPUT_FORMAT);
      const lastDate = dayjs(splitDateranges[1], INPUT_FORMAT);

      if (firstDate.month() === lastDate.month()) {
        if (daterange_idx === daterangeCount - 1) {
          return firstDate.format("MMMM D") + "-" + lastDate.format("D, YYYY");
        } else {
          return firstDate.format("MMMM D") + "-" + lastDate.format("D");
        }
      }
    });
    return parsedDateranges.join(", ");
  } else {
    // Add Error Handling for invalid data not following (MM/DD/YYYY) or (MM/DD/YYYY - MM/DD/YYYY) format
  }
}
