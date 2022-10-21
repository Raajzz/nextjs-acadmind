import Link from "next/link";

const ClientsHome = () => {
  const clients = [
    {
      id: "max",
      name: "Maximilian",
    },
    {
      id: "manu",
      name: "Manuel",
    },
  ];
  return (
    <div>
      <h1>This is clients page</h1>
      <ul>
        {/* method one */}
        {/* ---------- */}
        {/* {clients.map((obj) => (
          <li>
            <Link href={`/clients/${obj.id}`}>{obj.name}</Link>
          </li>
        ))} */}

        {/* method two */}
        {/* ---------- */}
        {clients.map((obj) => (
          <li key={obj.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: {
                  id: obj.id,
                },
              }}
            >
              {obj.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsHome;
