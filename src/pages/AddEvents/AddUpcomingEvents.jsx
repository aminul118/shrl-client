import Swal from "sweetalert2";
import HeadingAndTittle from "../../components/TextFormat/HeadingAndTittle";
import { Helmet } from "react-helmet";

const AddUpcomingEvents = () => {
  const handleAddEvents = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const heading = form.get("heading");
    const date = form.get("date");
    const time = form.get("time");
    const venue = form.get("venue");
    const facilitators = form.get("facilitators");
    const photo = form.get("photo");
    const newEvent = {
      heading,
      date,
      time,
      venue,
      facilitators,
      photo,
    };
    console.log(newEvent);

    fetch("https://shrl-server.vercel.app/upcoming-events", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "New Event added!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div
      className="min-h-[calc(100vh-464px)] flex  justify-center items-center"
      data-aos="fade-up"
    >
      <div className="max-w-5xl w-full ">
        <HeadingAndTittle heading={`Add Upcoming Events`} />
        <form
          onSubmit={handleAddEvents}
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
            />
          </div>

          <div className="form-control mt-6 md:col-span-2">
            <button className="btn btn-primary">Add upcoming Events</button>
          </div>
        </form>
      </div>
      <Helmet>
        <title>Add Upcoming Events</title>
      </Helmet>
    </div>
  );
};

export default AddUpcomingEvents;
