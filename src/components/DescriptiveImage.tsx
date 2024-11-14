import Image from "next/image";
import Paragraph from "./Paragraph";

export type DescriptiveImageProps = {
  img: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  p: string[];
};

const DescriptiveImage: React.FC<DescriptiveImageProps> = (props) => {
  return (
    <div className="flex flex-col gap-6">
      <Image
        src={props.img.src}
        alt={props.img.alt}
        width={props.img.width}
        height={props.img.height}
      />
      <Paragraph className="pl-0 text-center gap-0" text={props.p} />
    </div>
  );
};

export default DescriptiveImage;
