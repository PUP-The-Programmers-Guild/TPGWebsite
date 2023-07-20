import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// TODO: Configure style definition for each variants of button
// NOTE: This current style is not final yet as it may subject to changes
// This was copied from shadcn/ui button component https://ui.shadcn.com/docs/components/button
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-body text-2xl ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      intent: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-12 py-4",
        sm: "px-8 py-3 rounded-sm",
        lg: "px-6 py-2 rounded-lg",
        rounded: "px-14 py-4 rounded-full",
      },
    },
    defaultVariants: {
      intent: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ intent, size, className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ intent, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
