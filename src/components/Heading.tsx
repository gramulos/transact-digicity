import { cn } from "@/utils/styles";

type HeadingProps = {
  headerTag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  theme: string;
  children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({
  headerTag: HeaderTag = "h2",
  theme,
  children,
}) => (
  <HeaderTag
    className={cn(
      `italic ${theme === "light" ? "text-slate-800" : "text-slate-50"}`,
      {
        "text-4xl font-light md:text-7xl": HeaderTag === "h1",
        "text-3xl font-light md:text-5xl": HeaderTag === "h2",
        "text-xl font-light md:text-3xl": HeaderTag === "h3",
        "text-lg": HeaderTag === "h4",
        "text-sm": HeaderTag === "h5",
        "text-xs": HeaderTag === "h6",
      }
    )}
  >
    {children}
  </HeaderTag>
);

export default Heading;
