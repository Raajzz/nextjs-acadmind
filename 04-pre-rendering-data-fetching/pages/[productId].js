import fs from "fs/promises";
import path from "path";
import { useRouter } from "next/router";

const ProductDetailPage = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), "data/dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);
  return data;
};

export async function getStaticProps(context) {
  console.log("productId revalidation");
  const { params } = context;
  // if you use router.query that will only work after a request for the router had been sent to begin with, therefore we'll use context's params

  const { products } = await getData();
  const resProduct = products.find(
    (product) => product.id === params.productId
  );

  // resProduct = typeof resProduct === "undefined" ? null : resProduct;

  if (!resProduct) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: resProduct,
    },
    revalidate: 1,
  };
}

// if you don't provide a specific path in getStaticPaths's function, then whatever code that should be present in that particular code wouldn't work.
// for it to work, fallback should be made as true and for the routes which aren't being specified, the respective getStaticProps will take some time, first check for undefined and provide the necessary response and after that the actual response will be provided.
export async function getStaticPaths() {
  // usually, the pages that you know should be pre-generated will be received from database or file, therefore technically this is how it's supposed to work in real time
  const { products } = await getData();

  const pathsWithParams = products.map((product) => {
    return {
      params: {
        productId: product.id,
      },
    };
  });

  return {
    paths: pathsWithParams,
    fallback: true,
  };
}

export default ProductDetailPage;