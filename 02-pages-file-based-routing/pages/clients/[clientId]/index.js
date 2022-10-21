import { useRouter } from "next/router";

const ClientsIdPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    // router.push(`/clients/${router.query.clientId}/projecta`);
    // or
    router.push({
      pathname: "/clients/[clientId]/[clientProjectId]",
      query: {
        clientId: router.query.clientId,
        clientProjectId: "projecta",
      },
    });
    // here using router.replace will replace the previous page therefore navigating back wouldn't be an option
  };

  return (
    <div>
      <h1>This is the individual clients Id page</h1>
      <button onClick={loadProjectHandler}>Load Project</button>
    </div>
  );
};

export default ClientsIdPage;
