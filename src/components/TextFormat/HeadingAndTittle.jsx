const HeadingAndTittle = ({ heading, tittle }) => {
  return (
    <div className="text-center max-w-4xl mx-auto space-y-3 lg:py-10 ">
      <h1 className="text-3xl lg:text-5xl font-bold">{heading}</h1>
      <p>{tittle}</p>
    </div>
  );
};

export default HeadingAndTittle;
