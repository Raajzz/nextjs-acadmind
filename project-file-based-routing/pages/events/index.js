import EventList from "../../components/events/EventList";
import { DUMMY_EVENTS } from "../../dummy-data";
import EventSearch from "../../components/events/EventSearch";

const EventsPage = () => {
  return (
    <>
      <EventSearch />
      <EventList props={DUMMY_EVENTS} />
    </>
  );
};

export default EventsPage;
