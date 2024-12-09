import { useContext, useEffect, useState } from "react";
import HeadingAndTittle from "../../components/TextFormat/HeadingAndTittle";
import ServicesCard from "./ServicesCard";
import { AuthContext } from "../../providers/AuthProvider";

const KeyServices = () => {
  const { darkMode } = useContext(AuthContext);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("services.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load services. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <section className={`${!darkMode && "bg-combined-bg"} py-8 px-2 lg:px-0`}>
      <div className="container mx-auto">
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
            <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3 lg:gap-6 mt-4">
              {services.map((service, i) => (
                <ServicesCard key={i} service={service} />
              ))}
            </div>
          )}
        </div>

        <div>
          <HeadingAndTittle
            tittle={`At Smart Healthcare and Research Ltd., each of our services is designed with the goal of improving healthcare access, quality, and outcomes for women and children. We are committed to continuous innovation and compassionate care, ensuring that our clients receive the best possible support on their healthcare journey.`}
          />
        </div>
      </div>
    </section>
  );
};

export default KeyServices;
