import { useContext, useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ScrollingText = () => {
  const [scrolls, setScroll] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch scrolling texts from server
    fetch("https://shrl-server.vercel.app/scrolling")
      .then((res) => res.json())
      .then((data) => {
        setScroll(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (id) => {
    console.log("Deleting id:", id);
    fetch(`https://shrl-server.vercel.app/scrolling/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Deleted:", data);

        if (data.deletedCount) {
          Swal.fire({
            title: "Good job!",
            text: "Deleted!",
            icon: "success",
          });
        }
        // Remove the deleted item from state
        setScroll(scrolls.filter((scroll) => scroll._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  if (scrolls.length === 0) {
    return;
  }

  return (
    <div>
      {scrolls?.map((scroll) => (
        <div
          className="bg-slate-200 p-2 rounded-lg container mx-auto text-black"
          key={scroll._id}
        >
          <div className="flex items-center">
            <button className="btn btn-warning">Latest</button>
            <Marquee>{scroll?.text}</Marquee>
            {user && (
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    handleDelete(scroll._id);
                  }}
                  className="btn btn-warning"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollingText;
