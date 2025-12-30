import PositionalShopButtons from "./PositionalShopButtons";
import { Link } from "react-router";
import Button from "../../../components/common/Button";
export default function AdBanners() {
  // Define your ad data
  const adData = [
    {
      image: "https://i.ibb.co.com/gTRf9CG/banner-ad-1.jpg",
      title: "Items on SALE",
      discount: "Discounts up to 30%",
      text: "Shop Now",
    },
    {
      image: "https://i.ibb.co.com/VmLXPZn/banner-ad-2.jpg",
      title: "Combo offers",
      discount: "Discounts up to 50%",
      text: "Discover More",
    },
    {
      image: "https://i.ibb.co.com/87t7VGM/banner-ad-3.jpg",
      title: "Discount Coupons",
      discount: "Discounts up to 40%",
      text: "Limited Time Offer",
    },
  ];

  return (
    <main className="container mt-10 lg:h-[470px] mb-20 flex flex-col md:flex-row gap-y-10 gap-x-10">
      <div className="relative w-full md:w-1/2 min-h-[400px] group overflow-hidden rounded-[2rem] shadow-premium bg-neutral-200">
        <img
          src={adData[0].image}
          alt={adData[0].title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-[85%] lg:max-w-md text-white p-6 md:p-10 lg:p-8 bg-white/10 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] border border-white/20 shadow-2xl transform transition-all duration-700 group-hover:bg-white/20 flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-5xl lg:text-5xl font-bold font-heading mb-3 md:mb-6 leading-tight tracking-tight drop-shadow-lg">
            {adData[0].title}
          </h2>
          <p className="text-sm md:text-2xl lg:text-xl font-bold text-amber-400 mb-6 md:mb-8 tracking-[0.2em] uppercase">
            {adData[0].discount}
          </p>
          <Link to={"/shop"}>
            <Button
              variant="primary"
              size="lg"
              className="shadow-premium px-8 md:px-12 py-2.5 md:py-4 text-sm md:text-lg hover:scale-105 transition-transform"
            >
              {adData[0].text}
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-y-10 w-full md:w-1/2">
        <PositionalShopButtons {...adData[1]} />
        <PositionalShopButtons {...adData[2]} />
      </div>
    </main>
  );
}
