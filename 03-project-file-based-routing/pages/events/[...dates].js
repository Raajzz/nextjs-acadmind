import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getFilteredEvents } from "../../dummy-data";
import ErrorAlert from "../../components/ui/ErrorAlert";

const EventsFilterPage = () => {
  const router = useRouter();
  const filteredParams = router.query.dates;

  if (!filteredParams) {
    return <p className="center">Loading...</p>;
  }

  const [year, month] = filteredParams;
  const numYear = Number(year);
  const numMonth = Number(month);

  if (
    isNaN(year) ||
    isNaN(month) ||
    numYear < 2020 ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <ErrorAlert>
        <p>Request params are not proper!</p>
      </ErrorAlert>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <ErrorAlert>
        <p>No events found for the chosen filter</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSearch />
      <EventList props={filteredEvents} />
    </>
  );
};

export default EventsFilterPage;
