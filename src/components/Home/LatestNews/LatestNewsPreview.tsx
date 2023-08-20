import { cn } from "@/lib/utils";
import React from "react";

interface ILatestNewsPreview extends React.HTMLAttributes<HTMLElement> {
  title: string;
  image: string;
}

// TODO: The styles are not yet final
export default function LatestNewsPreview({
  title,
  image,
  className,
  style,
  ...props
}: ILatestNewsPreview) {
  return (
    <article
      className={cn(
        "bg-white before:absolute before:inset-0 before:-z-10 before:bg-[image:var(--image)] before:bg-cover before:opacity-[--img-opacity] before:content-['']",
        className
      )}
      style={{ "--image": `url(${image})`, ...style } as React.CSSProperties}
      {...props}
    >
      <div className="grid h-full items-end bg-gray-500/5 p-8">
        <h1 className="font-heading text-5xl font-bold text-white">{title}</h1>
      </div>
    </article>
  );
}
