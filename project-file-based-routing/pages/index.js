import { DUMMY_EVENTS } from "../dummy-data";
import FilteredEventList from "../components/events/FilteredEventList";

const IndexPage = () => {
  return (
    <div>
      <FilteredEventList props={DUMMY_EVENTS} />
    </div>
  );
};

export default IndexPage;
