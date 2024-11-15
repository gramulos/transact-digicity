import Image from "next/image";
import Panel, { PanelProps } from "./Panel";

type PanelsProps = {
  panels: PanelProps[];
};

const Panels: React.FC<PanelsProps> = (props) => {
  return (
    <div className="flex relative flex-col w-full">
      <Image
        src="/assets/patterns/light/pattern_01.png"
        alt="panels bg"
        width={1440}
        height={810}
        priority
        sizes="100vw"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="container mx-auto px-0 sm:px-8 xl:px-0 flex flex-col sm:flex-row sm:[&>*:first-child]:-top-32 sm:mb-32">
        {props.panels.map((panel) => (
          <Panel
            key={panel.title}
            title={panel.title}
            backgroundImage={panel.backgroundImage}
            theme={panel.theme}
            data={panel.data}
          />
        ))}
      </div>
    </div>
  );
};
export default Panels;
