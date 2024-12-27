import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import EventCard from "./EventCard";

import ScrollingText from "../../components/TextFormat/ScrollingText";
import { Typewriter } from "react-simple-typewriter";
import Loading from "../../components/Loading";

const UpcomingEvents = () => {
  // State to manage events and loading status
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State for loading status

  // Fetch the data initially
  const loaderData = useLoaderData();

  // Set the initial events on load
  useEffect(() => {
    if (Array.isArray(loaderData)) {
      setUpcomingEvents(loaderData);
    }
    setIsLoading(false); // Data has loaded, stop the loader
  }, [loaderData]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-2xl lg:text-4xl text-red-500 font-bold text-center py-4 pt-24">
        <Typewriter
          words={["Upcoming Events"]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={80}
          delaySpeed={1000}
        />
      </h1>

      <ScrollingText />

      {/* Check if there are events */}
      {upcomingEvents.length === 0 ? (
        <p className="text-center text-gray-500 py-8">
          No upcoming events found.
        </p>
      ) : (
        <div className="grid gap-4 py-8 items-center justify-center px-2 lg:px-0">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event._id}
              event={event}
              events={upcomingEvents}
              setEvents={setUpcomingEvents} // Ensure this is needed
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvents;
