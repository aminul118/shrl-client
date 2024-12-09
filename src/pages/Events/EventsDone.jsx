import { useContext, useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router"; // Import from react-router-dom instead of react-router
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const EventsDone = () => {
  const { user } = useContext(AuthContext);
  const loadedEvents = useLoaderData(); // Correct placement for loadedEvents
  const [events, setEvents] = useState([]); // Initialize with an empty array

  useEffect(() => {
    // Set the state once loadedEvents is available
    setEvents(loadedEvents);
  }, [loadedEvents]); // Ensure that the state is updated whenever loadedEvents changes

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://shrl-server.vercel.app/event/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

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
    <div className="max-w-2xl mx-auto w-full mb-8 lg:mb-12 2xl:mb-16">
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
