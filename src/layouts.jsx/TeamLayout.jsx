

import TeamMembers from "../pages/Team/TeamMembers";
import HeadingAndTittle from "../components/TextFormat/HeadingAndTittle";
import { Helmet } from "react-helmet";

const TeamLayout = () => {


  return (
    <div>
      <Helmet>
        <title>Team || SHRL</title>
      </Helmet>
      <HeadingAndTittle heading={`Our Team Members`} />
      <TeamMembers />
    </div>
  );
};

export default TeamLayout;
