import { GrDeliver } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { GiCheckMark } from "react-icons/gi";
import { FaGift } from "react-icons/fa6";

export default function Services() {
  const services = [
    { icon: <GrDeliver size={30} />, title: "Free delivery", color: "#f2fce4" },
    { icon: <MdOutlinePayment size={30} />, title: "100% secure payment", color: "#fffceb" },
    { icon: <HiMiniCheckBadge size={30} />, title: "Quality guarantee", color: "#ecffec" },
    { icon: <GiCheckMark size={30} />, title: "Guaranteed savings", color: "#ffefea" },
    { icon: <FaGift size={30} />, title: "Daily offers", color: "#fff3eb" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4 mx-auto max-w-screen-2xl">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="rounded-md shadow-md p-4 text-center"
          style={{ backgroundColor: service.color }}
        >
          {service.icon}
          <h3 className="text-lg font-bold mt-4">{service.title}</h3>
          <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
        </div>
      ))}
    </div>
  );
}
