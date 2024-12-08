

const TeamCard = ({ team }) => {
//   console.log(team);
  const { photo,name,position, about_shrl } = team;
  return (
    <div data-aos="fade-up">
      <div className="bg-gradient-to-b from-cyan-50 to-blue-200 shadow-lg rounded-xl px-3 py-6 lg:p-6  relative flex items-center w-full h-full">
        <div className="absolute -top-14 -left-1">
          <img
            className="rounded-full border-4 border-[#808BAF] w-28 bg-slate-100 "
            src={photo}
            alt=""
          />
        </div>
        <div className="mt-14 md:text-justify">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="font-semibold">{position}</p>
          <br />
          <p>{about_shrl}</p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
