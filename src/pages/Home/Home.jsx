import { Helmet } from "react-helmet";
import HeroBanner from "../../components/HeroBanner.jsx/HeroBanner";
import KeyServices from "../../shared/KeyServices/KeyServices";
import FoundingTeam from "../../shared/FoundingTeam/FoundingTeam";
import Contact from "../Contact/Contact";
import Faq from "../../shared/Faq/Faq";
import CommitmentsSection from "../../shared/CommitmentsSection/CommitmentsSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || SHRL</title>
      </Helmet>
      <HeroBanner />
      <div className="space-y-10">
        <KeyServices />
        <FoundingTeam />
        <CommitmentsSection/>
        <Faq/>
        <Contact/>
      </div>
    </div>
  );
};

export default Home;
