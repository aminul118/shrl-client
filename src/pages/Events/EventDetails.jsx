import { useLoaderData } from "react-router";

const EventDetails = () => {
  const event = useLoaderData();
  console.log(event);

  const { heading, date, time, venue, facilitators, photo, details } = event;

  return (
    <div>
      <div className="card card-compact bg-base-100 w-full shadow-xl">
        <figure>
          <img
            className="w-full"
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{heading}</h2>
          <p ><span className="font-semibold">Date:</span> {date}</p>
          <p ><span className="font-semibold">time:</span> {time}</p>
          <p ><span className="font-semibold">venue:</span> {venue}</p>
          <p ><span className="font-semibold">details:</span> {details}</p>
      


        </div>
      </div>
    </div>
  );
};

export default EventDetails;
