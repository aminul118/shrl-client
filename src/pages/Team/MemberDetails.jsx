import { useLoaderData } from "react-router";

const MemberDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const {
    name,
    designation,
    details_about,
    short_about,
    phone,
    email,
    photo,
    _id,
    heading_1,
    work_1,
    heading_2,
    work_2,
    heading_3,
    wor_3,
  } = details;

  return (
    <section className="container mx-auto mb-8">
      <div>
        {/* Photo Name and details start */}
        <img
          className="rounded-full border-2 shadow-lg w-36 mx-auto  hover:shadow-2xl hover:bg-slate-500 hover:w-48 duration-300 ease-in-out"
          src={photo}
          alt={name}
        />
        <div className="mt-8  md:px-2 text-center mx-auto">
          <h1 className="text-xl font-bold">{name}</h1>
          <p>{designation}</p>
          <div className="mt-4">
            {details_about.map((details, i) => (
              <p key={i}>{details}</p>
            ))}
          </div>
        </div>
        {/* Work Container */}
        <div className="mt-12 md:border shadow-2xl shadow-slate-600 rounded-lg px-8 md:p-12  md:mt-4 mx-auto lg:w-9/12 bg-white pb-10">
          {/* Heading 1 - Work 1 starts */}
          <h1 className="text-2xl font-semibold">{heading_1}</h1>
          <div className="space-y-3 mt-4">
            {work_1.map((one, i) => (
              <div className="flex gap-3">
                <p>{i + 1}.</p>
                <p>{one}</p>
              </div>
            ))}
          </div>
          {/* Heading 1 - Work 1 end */}

          {/* Heading 2 - Work 2 starts */}
          <h1 className="text-2xl font-semibold mt-4">{heading_2}</h1>
          {heading_2 && (
            <div className="space-y-3 mt-4">
              {work_2?.map((two, i) => (
                <div className="flex gap-3">
                  <p>{i + 1}.</p>
                  <p>{two}</p>
                </div>
              ))}
            </div>
          )}

          {/* Heading 2 - Work 3 end */}

          {/* Heading 2 - Work 2 starts */}
          <h1 className="text-2xl font-semibold mt-4">{heading_3}</h1>

          {heading_3 && (
            <div className="space-y-3 mt-4">
              {work_2?.map((three, i) => (
                <div className="flex gap-3">
                  <p>{i + 1}.</p>
                  <p>{three}</p>
                </div>
              ))}
            </div>
          )}

          {/* Heading 2 - Work 3 end */}
        </div>
      </div>
    </section>
  );
};

export default MemberDetails;
