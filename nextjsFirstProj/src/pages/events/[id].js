import { Fragment } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../../dummy";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/error-alert/error-alert/error-alert";

const Event = (props) => {
  const { event } = props;

  if (!event) {
    return (
      <ErrorAlert>
        <p>this may take some time</p>
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
export async function getStaticProps(context) {
  const { params } = context;
  console.log(params);
  const event = getEventById(params.id);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: { event },
    revalidate: 60,
  };
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "e1" } },
      { params: { id: "e2" } },
      { params: { id: "e3" } },
    ],
    fallback: true,
  };
}
export default Event;
