import { Link, useLoaderData } from "react-router";

const EventsDone = () => {
  const events = useLoaderData();
  console.log(events);
  return (
    <div>
      <div className="grid gap-6">
        {events.map((event) => (
          <div key={event._id}>
            <div className="card bg-base-100 w-full shadow-xl">
              <figure>
                <img
                  className="w-full h-[500px] object-cover "
                  src={event.photo}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{event.heading}</h2>
                <div className="card-actions ">
                  <Link to={`/event/${event._id}`} className="btn btn-warning">Details</Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsDone;
