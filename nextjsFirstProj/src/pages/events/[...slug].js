import { useRouter } from "next/router";
import { getFilteredEvents } from "dummy";
import List from "@/components/events/list";
import { Fragment } from "react";
import ResultsTitle from "@/components/results-title/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/error-alert/error-alert/error-alert";

const EventsByQuery = () => {
  const router = useRouter();
  const query = router.query;
  const slug = query.slug;

  if (!slug) {
    return <p className="center">Loading...</p>;
  }
  if (slug.length == 2) {
    const [year, month] = slug;
    const yr = Number(year);
    const mnth = Number(month);

    if (isNaN(yr) || isNaN(mnth)) {
      return (
        <ErrorAlert>
          <p>Invalid input, please adjust values</p>
        </ErrorAlert>
      );
    }

    if (yr < 2020 || yr > 2025 || mnth < 1 || mnth > 12) {
      return (
        <ErrorAlert>
          <p>Invalid input, please adjust values</p>
        </ErrorAlert>
      );
    }

    const filteredEvents = getFilteredEvents({ year: yr, month: mnth });

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
  }

  return <div>events by url query params</div>;
};

export default EventsByQuery;
