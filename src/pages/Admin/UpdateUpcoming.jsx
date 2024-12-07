import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const UpdateUpcoming = () => {
  const events = useLoaderData();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Event Name</th>
            <th>Date</th>

            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {events.map((event) => (
            <tr key={event._id}>
              <th></th>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className=" h-20 w-20 ">
                      <img
                        src={event.photo}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{event.heading}</div>
                  </div>
                </div>
              </td>
              <td>{event.date}</td>

              <th>
                <button className="btn btn-ghost ">
                  <FaTrash />
                </button>
                <Link
                  to={`/update-events/${event._id}`}
                  className="btn btn-ghost "
                >
                  <FaEdit />
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateUpcoming;
