import { Helmet } from "react-helmet";
import KeyServices from "../../shared/KeyServices/KeyServices";
import HeadingAndTittle from "../../components/TextFormat/HeadingAndTittle";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Services || SHRL</title>
      </Helmet>
      <KeyServices />
      <HeadingAndTittle tittle=" At Smart Healthcare and Research Ltd., each of our services is designed with the goal of improving healthcare access, quality, and outcomes for women and children. We are committed to continuous innovation and compassionate care, ensuring that our clients receive the best possible support on their healthcare journey." />
    </div>
  );
};

export default Services;
