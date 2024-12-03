interface TaleProps {
  title: string;
  region: string;
  children?: React.ReactNode;
  id?: string;
}

const Tale: React.FC<TaleProps> = ({ title, region, children, id }) => {
  return (
    <div id={id}>
      <h1>{region}</h1>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Tale;
