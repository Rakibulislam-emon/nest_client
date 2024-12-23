import ProductImage from "./ProductInfo/ProductImage";
import ProductInfo from "./ProductInfo/ProductInfo";
import Container from "../../components/shared/Container";
import { useLoaderData } from "react-router";
// import useProductDetails from "../../hooks/useProductDetails";
import ProductCategory from "../../components/shared/ProductCategory";
import useProductDetails from "../../hooks/useProductDetails";
export default function ProductDetailsPage() {
  const product = useLoaderData();
  const { data,relatedImages =[],error,isLoading} = useProductDetails(product); 

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Container>
      {/* 1st section */}
      <Container className={"md:flex  md:justify-between"}>
        <ProductImage data={data} relatedImages={relatedImages} />
        <ProductInfo data={data} />
        <ProductCategory />
      </Container>
    </Container>
  );
}
