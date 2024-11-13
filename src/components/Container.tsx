type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div
      className={`container mx-auto z-0 p-8 xl:py-16 xl:px-0 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Container;
