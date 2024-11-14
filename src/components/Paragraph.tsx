import { cn } from "@/utils/styles";

type ParagraphProps = {
  text: string[];
  className?: string;
};

const Paragraph: React.FC<ParagraphProps> = (props) => {
  return (
    <div
      className={cn(
        "flex flex-col text-base pl-9 w-full italic",
        props.className
      )}
    >
      {props.text.map((paragraph, index) => (
        <p key={paragraph} className={index > 0 ? "mt-8 " : ""}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Paragraph;
