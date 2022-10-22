import fs from "fs/promises";
import path from "path";

const HomePage = (props) => {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data/dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const { products } = JSON.parse(jsonData);

  return {
    props: {
      products,
    },
    revalidate: 10,
    // for every request, regenerate, unless if it's less than 10 seconds ago since last regenerated - Like, run the thing when someone requests and the request is more than 10 seconds from the last regeneration
    // for development the getStaticProps will always run again and again but for production, this won't, so we provide the option to regenerate
  };
}

export default HomePage;
