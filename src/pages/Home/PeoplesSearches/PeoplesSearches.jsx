import { Link } from "react-router";
import { useFeaturedCategory } from "../../../hooks/useFeaturedCategory";



export default function PeoplesSearches() {
    const {data} = useFeaturedCategory()
    console.log('data:', data)
  return (
    <div className="p-4 md:p-6 lg:p-8 mx-auto max-w-screen-2xl">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">People are also looking for</h1>
      <div className="flex flex-wrap gap-2">
        {data.map((product, index) => (
          <Link
            to={'/'}
            key={index}
            className=" bg-[#fcf7eb] shadow rounded-lg p-4 flex-grow flex-shrink-0 w-auto hover:bg-[#ffecbe] hover:shadow-lg transition duration-200"
          >
            <p className="text-center text-sm md:text-base lg:text-lg">{product.category}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}