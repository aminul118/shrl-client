import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import EventCard from "./EventCard";

import ScrollingText from "../../components/TextFormat/ScrollingText";
import { Typewriter } from "react-simple-typewriter";

const UpcomingEvents = () => {
  // State to manage events
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  // Fetch the data initially
  const loaderData = useLoaderData();

  // Set the initial events on load
  useEffect(() => {
    setUpcomingEvents(loaderData);
  }, [loaderData]);

  return (
    <div>
      <h1 className="text-4xl text-red-500 font-bold text-center py-4">
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

      <div className="grid gap-4 py-8 items-center justify-center">
        {upcomingEvents.map((event) => (
          <EventCard
            key={event._id}
            event={event}
            events={upcomingEvents}
            setEvents={setUpcomingEvents} // Pass down setEvents to EventCard
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
