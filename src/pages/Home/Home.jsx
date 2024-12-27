import { useEffect } from "react";
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
import { useNavigate } from "react-router";
import ScrollToTopButton from "../../components/shared/ScrollToTopButton";

export default function Home() {
  useEffect(() => {
    // Scroll to top when the page is loaded
    window.scrollTo(0, 200);
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the current page is the home page and if there are any query parameters
    if (window.location.pathname === '/') {
      // Navigate to the home page with no query params (reset URL)
      navigate('/', { replace: true });
    }
  }, [navigate]);
  return (
    <>
      <ScrollToTopButton/>
      <Hero />
      <FeaturedCategory />
      <ShopAdBanner />
      <PopularProducts />
      <AdBanners />
      <DealsOfDay />
      <DownloadApp />
      <DiscountBanner />
      <PeoplesSearches />
      <Services />
    </>
  );
}
