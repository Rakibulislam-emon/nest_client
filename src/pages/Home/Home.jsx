import FilterToggleButton from "../../components/shared/Filter/FilterToggleButton";
import FeaturedCategory from "./FeaturedCategory/FeaturedCategory";
import Hero from "./HeroSection/Hero";
import PopularProducts from "./PopularProducts/PopularProducts";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedCategory />
      <FilterToggleButton />
      <PopularProducts/>
    </div>
  );
}