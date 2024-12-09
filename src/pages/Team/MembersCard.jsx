import { Link } from "react-router";

const MembersCard = ({ member }) => {
  console.log(member);
  const { name, designation, short_about, phone, email, photo, _id } = member;

  return (
    <div data-aos="fade-up">
      <div className="bg-gradient-to-b from-cyan-50 to-blue-200 shadow-lg rounded-xl px-3 md:py-6 lg:p-6 relative flex items-center mt-6 h-full">
        <div className="absolute -top-14 -left-2">
          <img
            className="rounded-full object-cover border-2 border-[#808BAF] w-20 bg-slate-100"
            src={photo}
            alt={`${name}'s photo`}
          />
        </div>
        <div className="mt-12 md:text-justify">
          <h1 className="text-xl font-bold">{name}</h1>
          <h1 className="font-semibold">{designation}</h1>
          <p className="mt-4">
            {short_about} <br />
            <br />
            E-mail: {email} <br />
            Cell: {phone}
          </p>
          <br />
          <Link
            to={`/member/${_id}`}
            className="underline text-blue-600 font-semibold"
          >
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
