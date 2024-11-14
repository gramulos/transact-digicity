import { cn } from "@/utils/styles";
import Checkmark from "./Icons/Checkmark";
import RichText, { RichTextElement } from "./RichText";

type UnorderedListProps = {
  items: {
    text: string;
    subItems?: RichTextElement[];
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
          className="inline-flex items-start mt-8 w-full first:mt-0 gap-6"
        >
          {isOrdered ? (
            <span>{`${index + 1}.`}</span>
          ) : (
            <Checkmark
              className={cn(
                "flex-shrink-0 mt-0.5",
                theme === "light" ? "text-blue-600" : "text-slate-50"
              )}
            />
          )}
          <span className="break-words italic">
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
