import { cn } from "@/utils/styles";

type HeadingProps = {
  headerTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  theme: string;
  children: React.ReactNode;
  className?: string;
};

const Heading: React.FC<HeadingProps> = ({
  headerTag: HeaderTag = "h2",
  theme,
  children,
  className,
}) => (
  <HeaderTag
    className={cn(
      `italic w-full ${
        theme === "light" ? "text-slate-800" : "text-slate-50 break-words"
      }`,
      {
        "text-4xl font-light md:text-6xl": HeaderTag === "h1",
        "text-2xl font-light md:text-4xl": HeaderTag === "h2",
        "text-xl font-light md:text-2xl": HeaderTag === "h3",
        "text-lg": HeaderTag === "h4",
        "text-sm": HeaderTag === "h5",
        "text-xs": HeaderTag === "h6",
      },
      className
    )}
  >
    {children}
  </HeaderTag>
);

export default Heading;
