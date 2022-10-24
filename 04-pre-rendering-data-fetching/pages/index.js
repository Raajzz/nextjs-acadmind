import fs from "fs/promises";
import path from "path";
import Link from "next/link";

const HomePage = (props) => {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  console.log("index.js getStaticProps");
  const filePath = path.join(process.cwd(), "data/dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  let data = JSON.parse(jsonData);

  // data = null;
  if (!data) {
    return {
      redirect: {
        destination: "/no-data", // going to the home route will redirect you to this route
      },
    };
  }

  // data.products = [];
  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
    // notFound: true,
    // redirect: { destination: "/no-data" }
    // for every request, regenerate, unless if it's less than 10 seconds ago since last regenerated - Like, run the thing when someone requests and the request is more than 10 seconds from the last regeneration
    // for development the getStaticProps will always run again and again but for production, this won't, so we provide the option to regenerate
  };
}

export default HomePage;
