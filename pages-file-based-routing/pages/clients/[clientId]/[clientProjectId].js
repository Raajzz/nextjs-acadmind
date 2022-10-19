import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();

  console.log(router.query);
  /* 
  for the route - http://localhost:3000/clients/12345/67890 the logged value in the console is, 
  -> Object { clientId: "12345", clientProjectId: "67890" }
  */

  return (
    <div>
      <h1>This the client project id page</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
