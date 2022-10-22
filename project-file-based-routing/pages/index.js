import { DUMMY_EVENTS } from "../dummy-data";
import FeaturedEventList from "../components/events/FeaturedEventList";

const IndexPage = () => {
  return (
    <div>
      <FeaturedEventList props={DUMMY_EVENTS} />
    </div>
  );
};

export default IndexPage;
