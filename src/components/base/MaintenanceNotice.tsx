import { cn } from "@/lib/utils";
import { TrafficCone } from "@phosphor-icons/react/dist/ssr/TrafficCone";
import Link from "next/link";

interface IMaintenanceNoticeProps {
  redirectLink: string;
  redirectMessage: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export default function MaintenanceNotice({
  redirectLink,
  redirectMessage,
  className,
  title,
  subtitle,
}: IMaintenanceNoticeProps) {
  const DEFAULT_TITLE = "Under Maintenance";
  return (
    <div
      className={cn(
        `bg--[#052014] flex h-screen flex-col items-center justify-center bg-[#F5FBED] p-16 text-center text-[#052014] md:p-0`,
        `${className}`
      )}
    >
      <div className="flex flex-col flex-nowrap items-center justify-center gap-y-2 md:w-96">
        <TrafficCone size={256} color="#052014" />
        <h1 className="text text--[#F5FBED] text-2xl font-bold md:text-4xl">{title ? title : DEFAULT_TITLE}</h1>
        <p className="flex text-center text-sm md:text-lg">
          {subtitle
            ? subtitle
            : `Shhh! This page is top secret (well, almost). We're working on something special here. Stay tuned
          for an exciting reveal!`}
        </p>
        <Link href={redirectLink}>
          <button className="mt-4 bg-[#052014] px-4 py-1 text-[#F5FBED] md:mt-8 md:px-9 md:py-3">
            <span className="px-2 font-body text-xs font-bold md:px-8 md:text-base">{redirectMessage}</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
