import { useEffect, useState } from "react";
import HeadingAndTittle from "../../components/TextFormat/HeadingAndTittle";
import ServicesCard from "./ServicesCard";

const KeyServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError("Failed to load services.");
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  return (
    <div>
      <div>
        <HeadingAndTittle
          heading="Our Key Services"
          tittle="At Smart Healthcare and Research Ltd., we offer a comprehensive range of services designed to strengthen healthcare for women and children. Our approach combines advanced technology, evidence-based practices, and a deep commitment to patient care."
        />
      </div>
      <div>
        {loading ? (
          <p>Loading services...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3 lg:gap-6">
            {services.map((service, index) => (
              <ServicesCard key={index} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default KeyServices;
