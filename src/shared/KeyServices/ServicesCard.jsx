const ServicesCard = ({ service }) => {
//   console.log(service);
  const { photo, service_name, description, features_name, features } = service;
  return (
    <div>
      <p>{service.length}</p>
      <div className=" bg-gradient-to-b from-cyan-50 to-blue-200 rounded-xl p-8 space-y-3 shadow-xl h-full">
        <img className="w-12" src={photo} alt={service_name} />
        <h3 className="text-xl font-semibold">{service_name}</h3>
        <p>
        {description}
        </p>
        <p className="font-semibold text-xl">{features_name}: </p>
        <ul className="list-disc">
         {
            features.map((feature,i)=><li key={i}>{feature}</li>)
         }
          
        </ul>
      </div>
    </div>
  );
};

export default ServicesCard;
