import { VariantProps, cva } from "class-variance-authority";

const customInputStyle = cva('', {
    variants: {
        intent: {
            "default": [
                "box-border",
                "w-full",
                "shadow-black",
                "inline-flex",
                "h-[35px]",
                "appearance-none",
                "items-center",
                "justify-center",
                "px-[10px]",
                "text-[15px]",
                "leading-none",
                "text-black",
                "shadow-[0_0_0_1px]",
                "outline-none",
                "hover:shadow-[0_0_0_1px_black]",
                "focus:shadow-[0_0_0_2px_black]",
                "selection:color-white",
                "selection:bg-black"
            ],
            "checkbox": [
                "box-border",
                "w-[30px]",
                "h-[30px]",
                "flex-none",
                "order-none",
                "grow-0",
                "border-[3px]",
                "border-solid",
                "border-white"
            ]
        }
    },
    defaultVariants: {
        intent: "default"
    }
})

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof customInputStyle> {}

export const FormInput: React.FC<FormInputProps> = ({
    className,
    intent,
    ...props
}) => <input className={customInputStyle({intent, className})} {...props} />;