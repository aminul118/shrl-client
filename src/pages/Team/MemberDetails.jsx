import { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";

const MemberDetails = () => {
  const details = useLoaderData();
  const {darkMode}= useContext(AuthContext)
  console.log(details);
  const {
    name,
    designation,
    details_about,
    social,
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
      <div data-aos="fade-left" data-aos-duration="500" className="text-center">
        {/* Photo Name and details start */}
        <img
          className="rounded-full border-2 shadow-lg w-36 mx-auto hover:shadow-2xl hover:bg-slate-500 hover:w-48 duration-300 ease-in-out"
          src={photo}
          alt={name}
        />
        <div className="mt-8 md:px-2 text-center mx-auto">
          <h1 className="text-xl font-bold">{name}</h1>
          <p>{designation}</p>
          <div className="mt-4 max-w-2xl mx-auto">
            {/* Conditionally render details_about */}
            {details_about && (
              <div>
                {details_about.map((detail, i) => (
                  <p key={i}>{detail}</p>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Social Links */}
        {social && social.length > 0 && (
          <div className="mt-4">
            {social.map((socialName, i) => (
              <div key={i}>
                {socialName?.research_gate && (
                  <a
                    href={socialName.research_gate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 text-blue-600"
                  >
                    Research Gate
                  </a>
                )}
                {socialName?.linkedin && (
                  <a
                    href={socialName.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 text-blue-600"
                  >
                    LinkedIn
                  </a>
                )}
                {socialName?.github && (
                  <a
                    href={socialName.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-4 text-blue-600"
                  >
                    GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Work Container */}
      <div
        className={`${
          darkMode && "bg-slate-800 border-none shadow-none"
        } mt-12 md:border shadow-2xl shadow-slate-600 rounded-lg px-8 md:p-12 md:mt-4 lg:mt-8 mx-auto lg:w-9/12 bg-white pb-10 `}
        data-aos="fade-right"
      >
        {/* Heading 1 - Work 1 starts */}
        {heading_1 && <h1 className="text-2xl font-semibold">{heading_1}</h1>}
        <div className="space-y-3 mt-4">
          {work_1?.map((one, i) => (
            <div key={i} className="flex gap-3">
              <p>{i + 1}.</p>
              <p>{one}</p>
            </div>
          ))}
        </div>
        {/* Heading 1 - Work 1 end */}

        {/* Heading 2 - Work 2 starts */}
        {heading_2 && (
          <h1 className="text-2xl font-semibold mt-4">{heading_2}</h1>
        )}
        {heading_2 && (
          <div className="space-y-3 mt-4">
            {work_2?.map((two, i) => (
              <div key={i} className="flex gap-3">
                <p>{i + 1}.</p>
                <p>{two}</p>
              </div>
            ))}
          </div>
        )}

        {/* Heading 3 - Work 3 starts */}
        {heading_3 && (
          <h1 className="text-2xl font-semibold mt-4">{heading_3}</h1>
        )}
        {heading_3 && (
          <div className="space-y-3 mt-4">
            {wor_3?.map((three, i) => (
              <div key={i} className="flex gap-3">
                <p>{i + 1}.</p>
                <p>{three}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MemberDetails;
