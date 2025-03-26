import { cn } from "@/utils/styles";
import { Link } from "@/i18n/routing";
import CompanyForm from "@/components/ApplyForm";

interface FieldConfig {
  label?: string;
  placeholder?: string;
  error?: string;
}

interface FormConfig {
  companyName?: FieldConfig;
  companyWebsite?: FieldConfig;
  companyEmail?: FieldConfig;
  companyPhone?: FieldConfig;
  companyContact?: FieldConfig;
  companyComment?: FieldConfig;
  recaptcha?: FieldConfig;
}

type LinkButtonProps = {
  href: string;
  target?: string;
  theme: string;
  text: string;
  form?: FormConfig;
  className?: string;
};

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  return (
    <>
    {props.href ? (
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
    ):(
      <CompanyForm 
      formConfig={props.form}
      buttonText={props.text}  
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
      )}/>
    )}
      
    </>    
  );
};

export default LinkButton;
