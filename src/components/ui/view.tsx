import { cva, type VariantProps } from "@/cva.config";

export const box = cva({
  base: "box",
  variants: {
    margin: { 0: "m-0", 2: "m-2", 4: "m-4", 8: "m-8" },
    padding: { 0: "p-0", 2: "p-2", 4: "p-4", 8: "p-8" },
  },
  defaultVariants: {
    margin: 0,
    padding: 0,
  },
  // compoundVariants: [{ intent: 'primary', size: 'medium', class: 'uppercase' }],
});

export interface ViewProps
  extends React.DetailsHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof box> {}

export function View({
  className,
  margin,
  padding,
  ...props
}: React.PropsWithChildren<ViewProps>) {
  return <div className={box({ margin, padding, className })} {...props} />;
}
