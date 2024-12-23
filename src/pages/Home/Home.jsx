import { useEffect } from "react";
import FilterToggleButton from "../../components/shared/Filter/FilterToggleButton";
import AdBanners from "./AdBanner/AdBanners";
import ShopAdBanner from "./AdBanner/ShopAdBanner";
import DealsOfDay from "./DealsOfDay/DealsOfDay";
import DiscountBanner from "./DiscountBanner/DiscountBanner";
import DownloadApp from "./DownloadApp/DownloadApp";
import FeaturedCategory from "./FeaturedCategory/FeaturedCategory";
import Hero from "./HeroSection/Hero";
import PeoplesSearches from "./PeoplesSearches/PeoplesSearches";
import PopularProducts from "./PopularProducts/PopularProducts";
import Services from "./Services/Services";

export default function Home() {
  useEffect(() => {
    // Scroll to top when the page is loaded
    window.scrollTo(0, 200);
  }, []);
  return (
    <div>
      <Hero />
      <FeaturedCategory />
      <ShopAdBanner />
      <FilterToggleButton />
      <PopularProducts />
      <AdBanners />
      <DealsOfDay />
      <DownloadApp />
      <DiscountBanner />
      <PeoplesSearches />
      <Services />
    </div>
  );
}
