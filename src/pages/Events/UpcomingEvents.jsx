import { useLoaderData } from "react-router";
import EventCard from "./EventCard";

import Marquee from "react-fast-marquee";
import ScrollingText from "../../components/TextFormat/ScrollingText";
import { Typewriter } from "react-simple-typewriter";

const UpcomingEvents = () => {
  const upcomingEvents = useLoaderData();


 



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
          <EventCard event={event} key={event._id} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
