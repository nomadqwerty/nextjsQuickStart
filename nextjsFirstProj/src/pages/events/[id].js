import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../../dummy";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";

const Event = () => {
  const router = useRouter();
  const id = router.query.id;
  const event = getEventById(id);

  if (!event) {
    return <p>Not found</p>;
  }
  return (
    <div>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </div>
  );
};

export default Event;
