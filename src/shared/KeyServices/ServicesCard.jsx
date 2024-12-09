import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const ServicesCard = ({ service }) => {
  //   console.log(service);
  const { photo, service_name, description, features_name, features } = service;
  const { darkMode } = useContext(AuthContext);
  return (
    <div data-aos="fade-up">
      <p>{service.length}</p>
      <div
        className={`${
          !darkMode && "bg-gradient-to-b"
        }   from-cyan-50 to-blue-200  rounded-xl p-8 space-y-3 shadow-xl h-full bg-slate-800`}
      >
        <img className="w-12" src={photo} alt={service_name} />
        <h3 className="text-xl font-semibold">{service_name}</h3>
        <p>{description}</p>
        <p className="font-semibold text-xl">{features_name}: </p>
        <ul className="list-disc">
          {features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesCard;
