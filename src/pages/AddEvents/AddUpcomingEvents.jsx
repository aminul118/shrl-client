import Swal from "sweetalert2";

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
      scrolling,
    };
    console.log(newEvent);

    fetch("http://localhost:5000/upcoming-events", {
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
    <div className="min-h-[calc(100vh-424px)] flex  justify-center items-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-center text-4xl font-bold py-8">
          Add Upcoming Events
        </h1>
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
              required
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
              required
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
              required
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
              required
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
              required
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

          <div className="form-control mt-6 col-span-2">
            <button className="btn btn-primary">Add upcoming Events</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUpcomingEvents;