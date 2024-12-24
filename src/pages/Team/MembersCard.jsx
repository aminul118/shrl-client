import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";

const MembersCard = ({ member }) => {
  // console.log(member);
  const { name, designation, short_about, phone, email, photo, _id } = member;
  const { darkMode } = useContext(AuthContext);

  return (
    <div data-aos="fade-up" className="mb-8 mt-8 md:mt-0 ">
      <div
        className={`${
          !darkMode && "bg-gradient-to-b"
        } from-cyan-50 to-blue-200 shadow-lg rounded-xl p-3 md:py-6 lg:p-6 relative flex flex-col h-full mt-6 bg-slate-800`}
      >
        {/* Photo */}
        <div className="flex justify-center -mt-16 mb-4">
          <img
            className={`${
              darkMode && "bg-slate-800"
            } rounded-full object-cover border-2 border-[#808BAF] w-24 bg-slate-100`}
            src={photo}
            alt={`${name}'s photo`}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-between h-full">
          <div className="text-center">
            {/* Name and Designation */}
            <h1 className="text-xl font-bold">{name}</h1>
            <h2 className="font-semibold text-lg">{designation}</h2>
          </div>

          {/* Short About */}
          <div className="flex-1 mt-4 ">
            <p>{short_about}</p>
          </div>

          {/* Contact Info */}
          <div className="mt-2 ">
            {email && <p> E-mail: {email}</p>}
            {phone && <p> Cell: {phone}</p>}
          </div>

          {/* Portfolio Link */}
          <div className="mt-4 flex ">
            <Link
              to={`/member/${_id}`}
              className="underline text-blue-600 font-semibold "
            >
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
