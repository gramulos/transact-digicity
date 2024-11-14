import { cn } from "@/utils/styles";
import Checkmark from "./Icons/Checkmark";

type UnorderedListProps = {
  items: string[];
  theme?: string;
};

const UnorderedList: React.FC<UnorderedListProps> = ({ items, theme }) => {
  return (
    <ul className="pl-16 flex flex-col items-start w-full">
      {items.map((item, index) => (
        <li
          key={`${item}_${index}`}
          className="inline-flex items-start mt-8 max-w-full first:mt-0 gap-6"
        >
          <Checkmark
            className={cn(
              "flex-shrink-0 mt-0.5",
              theme === "light" ? "text-blue-600" : "text-slate-50"
            )}
          />
          <span className="break-words italic">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default UnorderedList;
