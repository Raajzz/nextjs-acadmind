import { useRouter } from "next/router";

const EventIdPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>
        This is Event ID page <br />
      </h1>
      <p>Request Parameters are - {router.query.eventId}</p>
    </div>
  );
};

export default EventIdPage;
