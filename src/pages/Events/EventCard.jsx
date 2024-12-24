import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const EventCard = ({ event, events, setEvents }) => {
  const { heading, date, time, venue, facilitators, photo, _id } = event;
  const { user, darkMode } = useContext(AuthContext);

  const handleDelete = (id) => {
    fetch(`https://shrl-server.vercel.app/upcoming-events/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Event Deleted!",
            text: "The event was successfully removed.",
            icon: "success",
          });

          // Real-time update: Remove the deleted event from the local state
          setEvents((prevEvents) => prevEvents.filter((e) => e._id !== id));
        } else {
          Swal.fire({
            title: "Error",
            text: "Failed to delete the event.",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      });
  };

  return (
    <div>
      <div
        className={`${
          darkMode && "bg-slate-800"
        } card bg-base-100 object-cover object-center w-full border lg:p-4`}
      >
        <figure>
          <img
            className=" rounded-lg  lg:h-[600px] object-cover"
            src={photo}
            alt={heading}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{heading}</h2>
          {facilitators && (
            <p>
              <span className="font-semibold">Facilitator:</span> {facilitators}
            </p>
          )}
          {date && (
            <p>
              <span className="font-semibold">Date: </span>
              {date}
            </p>
          )}
          {time && (
            <p>
              <span className="font-semibold">Time: </span>
              {time}
            </p>
          )}
          {venue && (
            <p>
              <span className="font-semibold">Venue:</span> {venue}
            </p>
          )}
        </div>
        {user && (
          <div className="p-6">
            <Link to={`/update-events/${_id}`} className="btn btn-primary">
              Update
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn ml-2 btn-warning"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
