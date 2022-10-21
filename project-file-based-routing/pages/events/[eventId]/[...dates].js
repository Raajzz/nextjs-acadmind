import { useRouter } from "next/router";

const EventsFilterPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>This is the events filter page - {router.query.dates}</h1>
    </div>
  );
};

export default EventsFilterPage;
