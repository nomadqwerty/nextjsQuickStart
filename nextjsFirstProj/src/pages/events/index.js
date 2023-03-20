import { getAllEvents } from "../../../dummy";
import { useRouter } from "next/router";
import List from "@/components/events/list";
import EventSearch from "@/components/events/events-search";
const Events = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEvents = (yr, mnth) => {
    const fullPath = `/events/${yr}/${mnth}`;

    router.push(fullPath);
  };

  return (
    <div>
      <EventSearch onSearch={findEvents} />
      <List items={events} />
    </div>
  );
};

export default Events;
