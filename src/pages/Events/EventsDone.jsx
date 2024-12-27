import { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const EventsDone = () => {
  const { user } = useContext(AuthContext);
  const loadedEvents = useLoaderData();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(loadedEvents);
  }, [loadedEvents]);

  const handleDelete = (id) => {
    axios.delete(`${import.meta.env.VITE_BASE_URL}/event/${id}`).then((res) => {
      Swal.fire({
        title: "Good job!",
        text: "Successfully deleted this event!",
        icon: "success",
      });

      // Filter the deleted event from the state
      const dataFilter = events.filter((event) => event._id !== id);
      setEvents(dataFilter);
    });
  };

  return (
    <div className="max-w-2xl mx-auto w-full mb-8 lg:mb-12 2xl:mb-16 pt-24">
      <div className="grid gap-6">
        {events.map((event) => (
          <div key={event._id}>
            <div
              className="card bg-base-100 w-full shadow-xl"
              data-aos="fade-up"
            >
              <figure>
                <img
                  className="w-full h-[500px] object-cover "
                  src={event.photo}
                  alt="Event"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{event.heading}</h2>
                <div className="card-actions">
                  <Link to={`/event/${event._id}`} className="btn btn-warning">
                    Details
                  </Link>
                  {user && (
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="btn btn-error"
                    >
                      Delete
                    </button>
                  )}
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
