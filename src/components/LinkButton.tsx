import { cn } from "@/utils/styles";
import { Link } from "@/i18n/routing";

type LinkButtonProps = {
  href: string;
  target?: string;
  theme: string;
  text: string;
  className?: string;
};

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <Link
      href={props.href}
      target={props.target}
      className={cn(
        "text-sm text-center px-10 py-4 max-w-full text-slate-50 rounded-full shadow-lg  hover:shadow-md active:shadow-none transition-all duration-300",
        {
          "bg-blue-600 hover:bg-blue-800 active:bg-blue-950 shadow-slate-400":
            props.theme === "light",
          "bg-blue-600 hover:bg-blue-800 active:bg-blue-950 shadow-gray-950":
            props.theme === "dark",
          "bg-sky-950 hover:bg-sky-950 active:bg-sky-900 shadow-blue-900":
            props.theme === "blue",
        },
        props.className
      )}
    >
      {props.text}
    </Link>
  );
};

export default LinkButton;
