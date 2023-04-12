import { getAllEvents } from "../../../dummy";
import { useRouter } from "next/router";
import List from "@/components/events/list";
import EventSearch from "@/components/events/events-search";
const Events = (props) => {
  const router = useRouter();
  const { events } = props;

  const findEvents = (yr, mnth) => {
    const fullPath = `/events/${yr}/${mnth}`;

    router.push(fullPath);
  };
  if (!events) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <EventSearch onSearch={findEvents} />
      <List items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const events = getAllEvents();

  return {
    props: { events },
    revalidate: 1800,
  };
}

export default Events;
