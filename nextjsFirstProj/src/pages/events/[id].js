import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../../dummy";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/error-alert/error-alert/error-alert";

const Event = () => {
  const router = useRouter();
  const id = router.query.id;
  const event = getEventById(id);

  if (!event) {
    return (
      <ErrorAlert>
        <p>Not found</p>
      </ErrorAlert>
    );
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
