// import Image from "next/image";
import { FaArrowRight, FaHeadphonesSimple } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import dotsIcon from "../../../assets/4dot.png";
import { Link } from "react-router";

export default function BottomHeader() {
  const pages = [
    // { label: "Deals", url: "/deals", icon: <FaFire /> },
    { label: "Shop", url: "/shop" , icon: <FaFire />},
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Vendors", url: "/vendors" },
    { label: "MegaMenu", url: "/megamenu" },
    { label: "Blog", url: "/blog" },
    { label: "Pages", url: "/pages" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <div className="lg:block hidden ">
      <div className="flex justify-between lg:gap-x-16 ">
        <button className="bg-green h-16  md:px-8 rounded-md flex justify-center items-center gap-x-2 ">
          <img src={dotsIcon} alt="dotsIcon" />
          <span className="text-white  font-semibold ml-2">
            Browse ALL Deals & Pages
          </span>
          <FaArrowRight size={20} className="text-white " />
        </button>
        <div className="flex items-center gap-x-10 flex-1 ">
          {pages.map(({ label, url, icon }) => (
            <Link to={url}
              key={label}
              className="flex gap-x-2 items-center hover:text-green font-semibold"
            >
              <span className="text-green text-xl">{icon}</span>
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-x-2">
          <FaHeadphonesSimple size={40} />
          <div>
            <span>1900 - 888</span> <br />
            <span>24/7 Support Center</span>
          </div>
        </div>
      </div>
    </div>
  );
}
