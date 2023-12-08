import { Circle, X } from "@phosphor-icons/react";
import { VariantProps, cva } from "class-variance-authority";

type TEventTypeBadgeVariants = VariantProps<typeof EventTypeBadgeVariants>;
const EventTypeBadgeVariants = cva("flex flex-row items-center py-1 px-2 rounded-md gap-x-2", {
  variants: {
    type: {
      FLAGSHIP: "bg-[#D2FF85]",
      WEBINARS: "bg-[#85E2FF]",
      EXTERNAL: "bg-[#FFEB90]",
      PODCAST: "bg-[#E794FF]",
      "TPG-EXCLUSIVE": "bg-[#FFBC78]",
    },
  },
});

interface IEventTypeBadgeProps
  extends Omit<TEventTypeBadgeVariants, "type">,
    Required<Pick<TEventTypeBadgeVariants, "type">> {
  onClick?: () => void;
  enabled?: boolean;
}

export default function EventTypeBadge({ type, enabled, onClick }: IEventTypeBadgeProps) {
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick?.();
    }
  };

  return (
    <div
      className={EventTypeBadgeVariants({ type })}
      onClick={onClick}
      role={onClick ? "button" : "div"}
      tabIndex={onClick ? 0 : -1}
      onKeyDown={onKeyDown}
    >
      <span className={`text-xs font-bold`}>{type}</span>
      {enabled !== undefined && (enabled ? <X size={20} weight="bold" /> : <Circle size={20} weight="fill" />)}
    </div>
  );
}
