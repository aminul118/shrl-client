import { useLoaderData } from "react-router";
import EventCard from "./EventCard";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const UpcomingEvents = () => {
  const upcomingEvents = useLoaderData();
  const [scroll, setScroll] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/scrolling")
      .then((res) => res.json())
      .then((data) => {
        setScroll(data); // Assuming data is an array with the scrolling text.
      });
  }, []);

  // Ensure `scroll[0]` exists and contains `scrolling`
  const scrollingText = scroll?.[0]?.scrolling || "";

  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-4">Upcoming Events</h1>

      {/* Only render the marquee if scrolling text is available */}
      {scrollingText && (
        <div className="bg-gray-200 p-2">
          <Marquee>{scrollingText}</Marquee>
        </div>
      )}

      <div className="grid gap-4 py-8 items-center justify-center">
        {upcomingEvents.map((event) => (
          <EventCard event={event} key={event._id} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
