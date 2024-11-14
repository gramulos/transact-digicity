type ParagraphProps = {
  text: string[];
};

const Paragraph: React.FC<ParagraphProps> = (props) => {
  return (
    <div className="flex flex-col text-base pl-9 mt-10 w-full md:mt-20 italic">
      {props.text.map((paragraph, index) => (
        <p key={index} className={index > 0 ? "mt-8 " : ""}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Paragraph;
