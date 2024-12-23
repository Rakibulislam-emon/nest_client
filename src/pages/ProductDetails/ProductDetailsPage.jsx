import ProductImage from "./ProductInfo/ProductImage";
import ProductInfo from "./ProductInfo/ProductInfo";
import Container from "../../components/shared/Container";
import { useLoaderData } from "react-router";
// import useProductDetails from "../../hooks/useProductDetails";
import ProductCategory from "../../components/shared/ProductCategory";
import useProductDetails from "../../hooks/useProductDetails";
import { useEffect } from "react";
export default function ProductDetailsPage() {
  useEffect(() => {
    // Scroll to top when the page is loaded
    window.scrollTo(0, 0);
  }, []); 
  const product = useLoaderData();
  const { data,relatedImages =[],error,isLoading} = useProductDetails(product); 

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <Container className={"mt-8"}>
      {/* 1st section */}
      <Container className={"md:flex  md:justify-between"}>
        <ProductImage data={data} relatedImages={relatedImages} />
        <ProductInfo data={data} />
        <ProductCategory />
      </Container>
    </Container>
  );
}
