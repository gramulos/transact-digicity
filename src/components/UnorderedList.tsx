import { cn } from "@/utils/styles";
import Checkmark from "./Icons/Checkmark";
import RichText, { RichTextElement } from "./RichText";

type UnorderedListProps = {
  items: {
    text: string;
    subItems?: RichTextElement[];
    outline?: boolean;
    disableListStyle?: boolean;
  }[];
  theme?: string;
  isOrdered?: boolean;
};

const UnorderedList: React.FC<UnorderedListProps> = ({
  items,
  theme,
  isOrdered,
}) => {
  return (
    <ul className="pl-16 flex flex-col items-start w-full">
      {items.map((item, index) => (
        <li
          key={`${item.text}_${index}`}
          className={cn(
            "inline-flex items-start mt-8 w-full first:mt-0 gap-6",
            { "border border-blue-600 rounded-3xl py-6": item.outline }
          )}
        >
          {!item.disableListStyle && isOrdered && (
            <span>{`${index + 1}.`}</span>
          )}
          {!item.disableListStyle && (
            <Checkmark
              className={cn(
                "flex-shrink-0 mt-0.5",
                theme === "light" ? "text-blue-600" : "text-slate-50"
              )}
            />
          )}
          <span
            className={cn("break-words italic", {
              "pr-6 pl-11": item.disableListStyle,
            })}
          >
            {item.text}
            {item.subItems && (
              <div className="-ml-9 flex flex-col items-start w-full gap-6 mt-6">
                <RichText data={item.subItems} />
              </div>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default UnorderedList;
