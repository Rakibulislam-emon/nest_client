import { Link } from "react-router";
import Button from "../../../components/common/Button";
import { HiArrowRight } from "react-icons/hi2";

export default function ShopAdBanner() {
  const data = [
    {
      text: "Everyday Fresh & Clean with Our Products",
      imgUrl:
        "https://i.ibb.co.com/55sYsNM/images-q-tbn-ANd9-Gc-T0-KJUpj-Cp-Yd-Of-T2yes-X6-MECXYux-Te-IVFg-STP8-FBIM4-Gx-Hik-VDI.jpg",
      bgClass: "bg-rose-50",
      accent: "text-rose-900",
    },
    {
      text: "Make your Breakfast Healthy and Easy",
      imgUrl: "https://i.ibb.co.com/mT0fpc1/1-800x800-grande.jpg",
      bgClass: "bg-amber-50",
      accent: "text-amber-900",
    },
    {
      text: "The best Organic Products Online",
      imgUrl:
        "https://i.ibb.co.com/x2qWwhw/images-q-tbn-ANd9-Gc-RSUCV0d-uk-GZXhs5d9qj-Oda-Ls-D6f-Wk-Ti-R5w-N9-XOBT4uas-OKmm.jpg",
      bgClass: "bg-blue-50",
      accent: "text-blue-900",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6 lg:p-8 max-w-screen-2xl mx-auto">
      {data.map((item, idx) => (
        <div
          key={idx}
          className={`flex overflow-hidden relative items-center justify-between p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ${item.bgClass}`}
        >
          <div className="flex-1 text-left relative z-10 ">
            <h3
              className={`text-xl md:text-2xl font-bold mb-4 font-heading leading-tight ${item.accent}`}
            >
              {item.text}
            </h3>
            <Link to={"/shop"}>
              <Button
                size="sm"
                variant="outline"
                rightIcon={<HiArrowRight className="w-4 h-4" />}
              >
                Shop Now
              </Button>
            </Link>
          </div>
          <div className="w-1/3 flex-shrink-0 ml-4 relative z-10">
            <img
              src={item.imgUrl}
              alt={`Banner ${idx + 1}`}
              className="w-full h-auto object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Decorative Circle */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white opacity-40 rounded-full blur-2xl z-0 pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
}
