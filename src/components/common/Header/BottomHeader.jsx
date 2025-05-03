// import Image from "next/image";
// import { useState } from "react";
import { FaArrowRight, FaHeadphonesSimple } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
import dotsIcon from "../../../assets/4dot.png";
import { NavLink } from "react-router";

export default function BottomHeader() {
  // const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const pages = [
    // { label: "Deals", url: "/deals", icon: <FaFire /> },
    { label: "Shop", url: "/shop", icon: <FaFire /> },
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    // { label: "Vendors", url: "/vendors" },
    // { label: "MegaMenu", url: "#", onClick: () => setMegaMenuOpen(true) },
    { label: "Blog", url: "/blog" },
    // { label: "Pages", url: "/pages" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <div className="lg:block hidden ">
      <div className="flex justify-between lg:gap-x-16 ">
        <button 
          className="bg-green h-16 md:px-8 rounded-md flex justify-center items-center gap-x-2"
          // onClick={() => setMegaMenuOpen(true)}
        >
          <img src={dotsIcon} alt="dotsIcon" />
          <span className="text-white font-semibold ml-2">
            Browse ALL Deals & Pages
          </span>
          <FaArrowRight size={20} className="text-white " />
        </button>
        <div className="flex items-center gap-x-10 flex-1 ">
          {pages.map(({ label, url, icon, onClick }) => (
            onClick ? (
              <button
                key={label}
                onClick={onClick}
                className="flex gap-x-2 items-center hover:text-green font-semibold"
              >
                {icon && <span className="text-green text-xl">{icon}</span>}
                {label}
              </button>
            ) : (
              <NavLink
                to={url}
                key={label}
                className={({ isActive }) =>
                  isActive
                    ? "flex gap-x-2 items-center text-green font-bold"
                    : "flex gap-x-2 items-center hover:text-green font-semibold"
                }
              >
                {icon && <span className="text-green text-xl">{icon}</span>}
                {label}
              </NavLink>
            )
          ))}
        </div>
        <div className="flex items-center gap-x-2 text-green">
          <FaHeadphonesSimple size={30} />
          <div>
            <p className="text-gray-500 text-xs">24/7 Support</p>
            <p className="font-semibold">+1-800-345-6789</p>
          </div>
        </div>
      </div>

      {/* MegaMenu Component */}
      {/* <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} /> */}
    </div>
  );
}
