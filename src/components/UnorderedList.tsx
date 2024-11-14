import Checkmark from "./Icons/Checkmark";

type UnorderedListProps = {
  items: string[];
};

const UnorderedList: React.FC<UnorderedListProps> = ({ items }) => {
  return (
    <ul className="pl-16 flex flex-col items-start mt-10 w-full md:mt-20">
      {items.map((item, index) => (
        <li
          key={`${item}_${index}`}
          className="inline-flex items-start mt-8 max-w-full first:mt-0 gap-6"
        >
          <Checkmark className="flex-shrink-0 mt-0.5" />
          <span className="break-words italic">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default UnorderedList;
