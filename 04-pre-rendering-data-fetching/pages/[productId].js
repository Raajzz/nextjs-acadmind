import fs from "fs/promises";
import path from "path";
import { useRouter } from "next/router";

const ProductDetailPage = ({ product }) => {
  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </>
  );
};

export async function getStaticProps(context) {
  const { params } = context;
  // if you use router.query that will only work after a request for the router had been sent to begin with, therefore we'll use context's params
  const filePath = path.join(process.cwd(), "data/dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const { products } = JSON.parse(jsonData);

  return {
    props: {
      product: products.find((product) => product.id === params.productId),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "p1" },
      },
      {
        params: { productId: "p2" },
      },
      {
        params: { productId: "p3" },
      },
    ],
    fallback: false,
  };
}

export default ProductDetailPage;
