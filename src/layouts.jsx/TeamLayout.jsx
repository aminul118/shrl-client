import TeamMembers from "../pages/Team/TeamMembers";
import { Helmet } from "react-helmet";

const TeamLayout = () => {
  return (
    <div>
      <Helmet>
        <title>Team || SHRL</title>
      </Helmet>
      <TeamMembers />
    </div>
  );
};

export default TeamLayout;
