import ProductImage from "./ProductInfo/ProductImage";
import ProductInfo from "./ProductInfo/ProductInfo";
import { useLoaderData } from "react-router";
import useProductDetails from "../../hooks/useProductDetails";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import PeoplesSearches from "../Home/PeoplesSearches/PeoplesSearches";
import Services from "../../pages/Home/Services/Services";
import ProductCategory from "../../components/shared/ProductCategory";
import ProductTabs from "../../components/shared/ProductTabs";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";

export default function ProductDetailsPage() {
  const product = useLoaderData();

  const {
    data,
    relatedImages = [],
    error,
    isLoading,
  } = useProductDetails(product);

  if (isLoading) return <ProductDetailsSkeleton />;

  if (error)
    return (
      <div className="container py-20 text-center">
        <p className="text-red-500 font-bold">Error: {error.message}</p>
      </div>
    );

  return (
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
        {/* Main Product Content */}
        <div className="lg:col-span-9 space-y-12">
          {/* Top Section: Gallery & Primary Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <ProductImage data={data} relatedImages={relatedImages} />
            <ProductInfo product={data} />
          </div>

          {/* Tabbed Information Section */}
          <ProductTabs product={data} />
        </div>

        {/* Sidebar: Categories & Promotional Info */}
        <div className="lg:col-span-3 space-y-10">
          <ProductCategory />
        </div>
      </div>

      {/* Recommended for You */}
      <div className="mt-24 pt-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-100 to-transparent" />
        <RelatedProducts />
      </div>

      {/* Auxiliary Sections */}
      <div className="mt-16 space-y-16">
        <PeoplesSearches />
        <Services />
      </div>
    </div>
  );
}
