import { useEffect, useState } from "react";
import MembersCard from "./MembersCard";

const TeamMembers = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  console.log(members);
  return (
    <div className="grid grid-cols-2 gap-4 container mx-auto">
      {members?.map((member) => (
        <MembersCard member={member} key={member._id} />
      ))}
    
    </div>
  );
};

export default TeamMembers;
