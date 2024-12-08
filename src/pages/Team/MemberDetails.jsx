import { useLoaderData } from "react-router";

const MemberDetails = () => {
  // Fetching details using the loader data
  const details = useLoaderData();
  console.log(details);

  const {
    name,
    photo,
    designation,
    about,
    email,
    phone,
    heading_1,
    work_1,
    heading_2,
    awards,
    heading_3,
    memberships,
  } = details;

  return (
    <div>
      <div className="text-center">
        {/* Profile image */}
        <img
          className="rounded-full border-2 shadow-lg w-36 mx-auto  hover:shadow-2xl hover:bg-slate-500 hover:w-48 transition-all duration-300 ease-in-out"
          src={details?.photo}
          alt={details?.name}
        />

        {/* Member details */}
        <div className="mt-8  px-4 md:px-2 lg:px-0 text-center mx-auto">
          <h1 className="text-xl font-semibold">{details?.name}</h1>
          <p className="mb-2">{details?.designation}</p>
          {about.map((a, i) => (
            <p className="max-w-md mx-auto" key={i}>
              {a}
            </p>
          ))}
          <div className="mt-2">
            <p>Phone: {details?.phone}</p>
            <p>Email: {details?.email}</p>
          </div>
        </div>
      </div>
{/* Details */}
      <div className="mt-14">
        <h1 className="text-2xl">{details?.heading_1}:</h1>
        <div className="mt-6">
            {
                work_1.map((work,i)=> <div className="flex gap-3">

                    <p>{i+1}.</p>
                    <p>{work}</p>
                </div>)
            }
        </div>



      </div>
    </div>
  );
};

export default MemberDetails;
