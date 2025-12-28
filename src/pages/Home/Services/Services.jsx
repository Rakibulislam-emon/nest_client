import { GrDeliver } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { GiCheckMark } from "react-icons/gi";
import { FaGift } from "react-icons/fa6";

export default function Services() {
  const services = [
    {
      icon: <GrDeliver size={24} />,
      title: "Free delivery",
      color: "bg-green-50 text-green-600",
      desc: "For all orders over $200",
    },
    {
      icon: <MdOutlinePayment size={24} />,
      title: "Secure payment",
      color: "bg-amber-50 text-amber-600",
      desc: "100% secure payment",
    },
    {
      icon: <HiMiniCheckBadge size={24} />,
      title: "Quality guarantee",
      color: "bg-emerald-50 text-emerald-600",
      desc: "Certified organic products",
    },
    {
      icon: <GiCheckMark size={24} />,
      title: "Guaranteed savings",
      color: "bg-rose-50 text-rose-600",
      desc: "Best prices on the market",
    },
    {
      icon: <FaGift size={24} />,
      title: "Daily offers",
      color: "bg-indigo-50 text-indigo-600",
      desc: "Discount coupons & gifts",
    },
  ];

  return (
    <div className="py-12 px-4 mx-auto max-w-screen-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`
              flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300
              hover:translate-y-[-5px] hover:shadow-medium border border-transparent hover:border-neutral-100
              ${service.color.split(" ")[0]} bg-opacity-50
            `}
          >
            <div
              className={`
              w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110
              ${service.color} bg-opacity-20
            `}
            >
              {service.icon}
            </div>

            <h3 className="text-base font-bold text-neutral-800 mb-1">
              {service.title}
            </h3>
            <p className="text-xs text-neutral-500 font-medium leading-relaxed max-w-[150px]">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
