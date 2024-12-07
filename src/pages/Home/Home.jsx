import { Helmet } from "react-helmet";
import HeroBanner from "../../components/HeroBanner.jsx/HeroBanner";
import KeyServices from "../../shared/KeyServices/KeyServices";
import FoundingTeam from "../../shared/FoundingTeam/FoundingTeam";

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
      </div>
    </div>
  );
};

export default Home;
