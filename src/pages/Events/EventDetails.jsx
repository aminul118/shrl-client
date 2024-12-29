import { useLoaderData } from "react-router";

const EventDetails = () => {
  const event = useLoaderData();
  // console.log(event);

  const { heading, date, time, venue, facilitators, photo, details } = event;

  return (
    <div className="w-full max-w-2xl mx-auto pt-24 mb-8">
      <div className="card card-compact bg-base-100 w-full ">
        <figure>
          <img className="w-full" src={photo} alt={heading} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{heading}</h2>
          {date && (
            <p>
              <span className="font-semibold">Date:</span> {date}
            </p>
          )}
          {time && (
            <p>
              <span className="font-semibold">Time:</span> {time}
            </p>
          )}
          {venue && (
            <p>
              <span className="font-semibold">Venue:</span> {venue}
            </p>
          )}
          <p className="text-justify">
            <span className="font-semibold ">Details:</span>
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
