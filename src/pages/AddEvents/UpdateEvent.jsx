import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateEvent = () => {
  const event = useLoaderData();
  // console.log(event);

  const { heading, date, time, venue, facilitators, photo, _id } = event;

  const handleUpdateEvents = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const heading = form.get("heading");
    const date = form.get("date");
    const time = form.get("time");
    const venue = form.get("venue");
    const facilitators = form.get("facilitators");
    const photo = form.get("photo");
    const updateEvent = {
      heading,
      date,
      time,
      venue,
      facilitators,
      photo,
    };
    // console.log(updateEvent);

    fetch(`https://shrl-server.vercel.app/upcoming-events/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Event Updated!",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="min-h-[calc(100vh-464px)] flex  justify-center items-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-bold text-center">Update your Event</h1>

        <form
          onSubmit={handleUpdateEvents}
          className="card-body grid lg:grid-cols-2 items-center "
        >
          {/* Heading / Event Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Heading / Event Name</span>
            </label>
            <input
              type="text"
              name="heading"
              placeholder="Events Heading"
              className="input input-bordered"
              defaultValue={heading}
            />
          </div>
          {/* Event Date */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Event Date</span>
            </label>
            <input
              type="text"
              name="date"
              placeholder="Events Date"
              className="input input-bordered"
              defaultValue={date}
            />
          </div>
          {/* Event Time */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Event Time</span>
            </label>
            <input
              type="text"
              name="time"
              placeholder="Events Time"
              className="input input-bordered"
              defaultValue={time}
            />
          </div>
          {/* Venue */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Venue</span>
            </label>
            <input
              type="text"
              name="venue"
              placeholder="Venue"
              className="input input-bordered"
              defaultValue={venue}
            />
          </div>
          {/* Facilitators */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Facilitators</span>
            </label>
            <input
              type="text"
              name="facilitators"
              placeholder="Facilitators"
              className="input input-bordered"
              defaultValue={facilitators}
            />
          </div>
          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              defaultValue={photo}
            />
          </div>

          <div className="form-control mt-6 md:col-span-2">
            <button className="btn btn-primary">Update upcoming Events</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEvent;
