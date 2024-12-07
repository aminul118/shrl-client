import { useState } from "react";
import HeadingAndTittle from "../../components/TextFormat/HeadingAndTittle";
import { useEffect } from "react";
import TeamCard from "./TeamCard";

const FoundingTeam = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("foundingTeam.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div>
      <div>
        <HeadingAndTittle
          heading="Founding Team"
          tittle="Our team is the driving force with the mission to lead healthcare with UTLC for women and children. Our success is built on the passion, expertise, and dedication of healthcare professionals, researchers, and innovators who share a common goal—making healthcare accessible, compassionate, and impactful. Meet the people who are making a difference every day."
        />
      </div>
      <div className="grid px-2 md:px-2 lg:px-0  2xl:grid-cols-2 gap-20 container mx-auto mt-12">
        {teams.map((team, i) => (
          <TeamCard team={team} key={i} />
        ))}
      </div>
    </div>
  );
};

export default FoundingTeam;
