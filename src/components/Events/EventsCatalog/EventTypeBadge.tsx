import { Circle, X } from "@phosphor-icons/react";
import { VariantProps, cva } from "class-variance-authority";

type TEventTypeBadgeVariants = VariantProps<typeof EventTypeBadgeVariants>;
const EventTypeBadgeVariants = cva("flex flex-row items-center p-[8px] rounded-md gap-x-[4px]", {
  variants: {
    type: {
      FLAGSHIP: "bg-[#99D44E]",
      WEBINARS: "bg-[#93C5FD]",
      EXTERNAL: "bg-[#FDE047]",
      PODCAST: "bg-[#EC4899]",
      "TPG-EXCLUSIVE": "bg-[#F97316]",
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
  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick?.();
    }
  };

  return (
    <>
      {onClick !== undefined ? (
        <button className={EventTypeBadgeVariants({ type })} onClick={onClick} tabIndex={0} onKeyDown={onKeyDown}>
          <span className={`text-[10px] font-bold`}>{type}</span>
          {enabled !== undefined && (enabled ? <X size={12} weight="bold" /> : <Circle size={12} weight="fill" />)}
        </button>
      ) : (
        <div className={EventTypeBadgeVariants({ type })} tabIndex={-1}>
          <span className={`text-[10px] font-bold`}>{type}</span>
          {enabled !== undefined && (enabled ? <X size={12} weight="bold" /> : <Circle size={12} weight="fill" />)}
        </div>
      )}
    </>
  );
}
