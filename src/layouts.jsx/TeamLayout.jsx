

import TeamMembers from "../pages/Team/TeamMembers";
import HeadingAndTittle from "../components/TextFormat/HeadingAndTittle";

const TeamLayout = () => {


  return (
    <div>
      <HeadingAndTittle heading={`Our Team Members`} />
      <TeamMembers />
    </div>
  );
};

export default TeamLayout;
