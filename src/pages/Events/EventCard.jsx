import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const EventCard = ({ event, events, setEvents }) => {
  // Added events and setEvents props
  const { heading, date, time, venue, facilitators, photo, _id } = event;
  const { user } = useContext(AuthContext);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/upcoming-events/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Good job!",
            text: "Event Deleted!",
            icon: "success",
          });
          // Remove deleted event from the list
          const updatedEvents = events.filter((e) => e._id !== id);
          setEvents(updatedEvents); // Update parent component's state with the new list
        }
      });
  };

  return (
    <div>
      <div className="card bg-base-100 object-cover object-center w-full  shadow-xl">
        <figure>
          <img className="h-64 w-full object-cover"  src={photo} alt="Event" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{heading}</h2>
          <p>
            <span className="font-semibold">Facilitator:</span> {facilitators}
          </p>
          <p>
            <span className="font-semibold">Date: </span>
            {date}
          </p>
          <p>
            <span className="font-semibold">Time: </span>
            {time}
          </p>
          <p>
            <span className="font-semibold">Venue:</span> {venue}
          </p>
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
