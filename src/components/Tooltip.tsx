import { ReactNode } from "react";

export default function Tooltip({children} : {children: ReactNode[] | ReactNode}) {
    return (
        <>
          <div
            className="absolute top-full left-1/2 z-20 mt-0 -translate-x-1/2  bg-neutral-700 py-0.5 pb-2.5 px-2.5 text-sm font-semibold text-white hidden group-hover:block w-28 break-words text-center leading-tight"
          >
            <div
              className="absolute top-[-5px] left-1/2 -z-10 h-5 w-5 -translate-x-1/2 rotate-45 bg-neutral-700 "
            ></div>
                {children}
          </div>
        </>
    )
}