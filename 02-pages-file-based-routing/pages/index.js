import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>The Home Page</h1>
      {/* links */}
      {/* 
        For linking multiple pages we would not use anchor tags because they send a brand new request to the server which leads to the loss of the app state
      */}
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
          {/* replace, which won't add a new page ontop rather replaces the existing page */}
        </li>
        <li>
          <Link replace href="/clients">
            Clients
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
