import PositionalShopButtons from "./PositionalShopButtons";

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
    <main className="mt-10 lg:h-[470px] mb-20 lg:max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-y-10 gap-x-10">
      <div className="relative w-full md:w-1/2">
        <img src={adData[0].image} alt={adData[0].title} className="w-full h-full "/>
        <div className="absolute top-8 md:top-8 lg:left-4 lg:top-28 text-white rounded-md shadow-md p-4 md:p-8">
          <h2 className="text-2xl md:text-4xl font-bold">{adData[0].title}</h2>
          <p className="text-lg my-4 md:my-6">{adData[0].discount}</p>
          <button className="border-b hover:border-t transition-all duration-100 w-full text-white font-medium px-4 py-2 rounded">
            {adData[0].text}
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-y-10 w-full md:w-1/2">
        <PositionalShopButtons {...adData[1]} />
        <PositionalShopButtons {...adData[2]} />
      </div>
    </main>
  );
}