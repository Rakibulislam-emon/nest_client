import { useState } from "react";
import { FaArrowRight, FaHeadphonesSimple } from "react-icons/fa6";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";

export default function BottomHeader() {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const pages = [
    { label: "Home", url: "/" },
    { label: "Shop", url: "/shop" },
    { label: "Blog", url: "/blog" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <div className="hidden lg:block border-b border-neutral-200 bg-white">
      <div className="container">
        <div className="flex items-center justify-between h-20 gap-x-8">
          {/* Browse Categories Button */}
          <div className="relative group z-50">
            <button
              className="bg-primary-600 hover:bg-primary-700 transition-colors duration-300 h-12 px-6 rounded-md flex items-center gap-x-3 text-white shadow-lg shadow-primary-200"
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            >
              <HiOutlineSquares2X2 className="text-2xl" />
              <span className="font-bold tracking-wide">
                Browse All Categories
              </span>
              <FaArrowRight
                size={16}
                className="ml-auto opacity-80 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-x-8 flex-1 justify-center">
            {pages.map((page, index) => {
              if (page.isAction) {
                return (
                  <button
                    key={index}
                    onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                    className="flex items-center gap-x-1.5 font-bold text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                  >
                    {page.label}
                    {page.icon}
                  </button>
                );
              }
              return (
                <NavLink
                  to={page.url}
                  key={index}
                  className={({ isActive }) =>
                    twMerge(
                      "flex items-center gap-x-1.5 font-bold transition-colors duration-200",
                      isActive
                        ? "text-primary-600"
                        : "text-neutral-700 hover:text-primary-600"
                    )
                  }
                >
                  {page.icon && <span className="text-lg">{page.icon}</span>}
                  {page.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Support Info */}
          <div className="flex items-center gap-x-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-primary-50 transition-colors duration-300">
              <FaHeadphonesSimple className="text-2xl text-neutral-600 group-hover:text-primary-600 transition-colors" />
            </div>
            <div>
              <p className="text-neutral-500 text-xs font-semibold mb-0.5">
                24/7 Customer Support
              </p>
              <p className="text-primary-600 font-bold text-lg leading-none group-hover:text-primary-700">
                +1-800-345-6789
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MegaMenu Placeholder (Can be implemented fully later) */}
      {/* <MegaMenu isOpen={megaMenuOpen} onClose={() => setMegaMenuOpen(false)} /> */}
    </div>
  );
}
