import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../../components/Loading";
import MembersCard from "./MembersCard";
import HeadingAndTittle from "../../components/TextFormat/HeadingAndTittle";

const TeamMembers = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/members`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // console.log(data);

  return (
    <div className="container mx-auto mb-12 lg:mb-14 px-2 lg:px-0 py-24 lg:py-24">
      <HeadingAndTittle heading={`Our Team Members`} />
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 mt-12 md:mt-0 gap-4">
        {data?.map((member) => (
          <MembersCard member={member} key={member._id} />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
