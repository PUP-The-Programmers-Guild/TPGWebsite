import { cva, VariantProps } from "class-variance-authority"

const customLabelStyle = cva('', {
    variants: {
        intent: {
            default: [
                "text-[15px]",
                "font-medium",
                "leading-[35px]",
                "text-white"
            ]
        }
    },
    defaultVariants: {
        intent: "default"
    }
})

export interface FormLabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof customLabelStyle> {}

export const FormLabel: React.FC<FormLabelProps> = ({ 
    className,
    intent,
    ...props
}) => <label className={customLabelStyle({intent, className})} {...props} />;