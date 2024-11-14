import { cn } from "@/utils/styles";

type ParagraphProps = {
  text: string[];
  className?: string;
};

const Paragraph: React.FC<ParagraphProps> = (props) => {
  return (
    <div
      className={cn(
        "flex flex-col text-base pl-9 w-full gap-8 italic",
        props.className
      )}
    >
      {props.text.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
};

export default Paragraph;
