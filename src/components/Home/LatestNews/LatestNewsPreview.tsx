// TODO: The names of these components are not yet final
// TODO: The default styles of these components are not yet final

import { cn } from "@/lib/utils";
import React from "react";

interface ILatestNewsPreview extends React.HTMLAttributes<HTMLElement> {
  image: string;
}

export const LatestNewsPreview = React.forwardRef<
  HTMLElement,
  ILatestNewsPreview
>(({ image, className, children, ...props }, ref) => {
  return (
    <article
      ref={ref}
      className={cn(
        "relative h-72 bg-gray-100 bg-[image:var(--image)] bg-cover text-white",
        className
      )}
      style={{ "--image": `url(${image})` } as React.CSSProperties}
      {...props}
    >
      <div className="flex h-full flex-col justify-end space-y-8 bg-gradient-to-t from-gray-400 from-30% to-transparent p-6">
        {children}
      </div>
    </article>
  );
});
LatestNewsPreview.displayName = "LatestNewsPreview";

export const LatestNewsTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadElement>
>(({ className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn("font-heading text-5xl font-bold", className)}
      {...props}
    />
  );
});
LatestNewsTitle.displayName = "LatestNewsTitle";

export const LatestNewsDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  return (
    <p ref={ref} className={cn("font-body text-xl", className)} {...props} />
  );
});
LatestNewsDescription.displayName = "LatestNewsDescription";
