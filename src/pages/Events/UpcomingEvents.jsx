import { useLoaderData } from "react-router";
import EventCard from "./EventCard";

import Marquee from "react-fast-marquee";
import ScrollingText from "../../components/TextFormat/ScrollingText";

const UpcomingEvents = () => {
  const upcomingEvents = useLoaderData();


 



  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-4">Upcoming Events</h1>
      <ScrollingText/>

     

      <div className="grid gap-4 py-8 items-center justify-center">
        {upcomingEvents.map((event) => (
          <EventCard event={event} key={event._id} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
