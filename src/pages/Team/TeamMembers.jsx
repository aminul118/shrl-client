import { useEffect, useState } from "react";
import MembersCard from "./MembersCard";

const TeamMembers = () => {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    fetch("https://shrl-server.vercel.app/members")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
        setIsLoading(false); // Stop loader when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching members:", error);
        setIsLoading(false); // Stop loader even if there's an error
      });
  }, []);

  return (
    <div className="container mx-auto mb-12 lg:mb-14 px-2 lg:px-0">
      {isLoading ? (
        <div className="flex justify-center items-center mt-12">
          {/* Loader (Can replace with a spinner component or custom loader) */}
          <div >
            <span className="loading loading-bars loading-lg"></span>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 mt-12 md:mt-0 gap-4">
          {members?.map((member) => (
            <MembersCard member={member} key={member._id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeamMembers;
