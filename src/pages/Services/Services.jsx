import { Helmet } from "react-helmet";
import KeyServices from "../../shared/KeyServices/KeyServices";
import HeadingAndTittle from "../../components/TextFormat/HeadingAndTittle";
import CommitmentsSection from "../../shared/CommitmentsSection/CommitmentsSection";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>Services || SHRL</title>
      </Helmet>
      <KeyServices />
      <CommitmentsSection/>
    </div>
  );
};

export default Services;
