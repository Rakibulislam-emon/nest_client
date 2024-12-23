import Loader from "../../../components/ui/Loader";
import { usePopularProducts } from "../../../hooks/usePopularProduct";
import PopularProductsTabs from "./PopularProductsTabs";

export default function PopularProducts() {
  const { data, isError, isLoading,error } = usePopularProducts();
   if (isLoading) {
     return (
       <Loader/>
     );
   }
   if (isError) {
     return <div>Error: {error?.message || "Something went wrong"}</div>;
   }

  return (
    <div >
      <PopularProductsTabs productsData={data} />
    </div>
  );
}
