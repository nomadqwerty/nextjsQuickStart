import { useRouter } from "next/router";
import { useEffect } from "react";
import { getFilteredEvents } from "dummy";
import List from "@/components/events/list";
import { Fragment } from "react";
import ResultsTitle from "@/components/results-title/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/error-alert/error-alert/error-alert";

const EventsByQuery = (props) => {
  useEffect(() => {
    console.log(document.querySelector("meta"));
  });
  const filteredEvents = props.filtered;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>no events found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events"> show all events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(yr, mnth);
  return (
    <Fragment>
      <div>
        <ResultsTitle date={date}></ResultsTitle>
        <List items={filteredEvents} />
      </div>
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const [year, month] = params.slug;
  console.log(year, month);

  if (isNaN(year) || isNaN(month)) {
    return {
      props: {
        error: { message: "invalid input" },
      },
    };
  }

  if (year < 2020 || year > 2025 || month < 1 || month > 12) {
    return {
      props: {
        error: { message: "date is out of range" },
      },
    };
  }
  const filtered = getFilteredEvents({ year, month });
  return {
    props: { filtered },
  };
}

export default EventsByQuery;
