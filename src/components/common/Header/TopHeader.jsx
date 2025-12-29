import { IoChevronDownSharp } from "react-icons/io5";
import { Link } from "react-router";

export default function TopHeader() {
  const Links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/shop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <div className="bg-neutral-900 border-b border-neutral-800 hidden lg:block font-heading">
      <div className="container flex justify-between items-center text-neutral-400 py-2">
        {/* Left Navigation Links */}
        <div className="flex gap-x-4">
          {Links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-[10px] uppercase tracking-[0.15em] font-bold hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center Message */}
        <div className="flex-1 text-center">
          <p className="text-[11px] font-medium tracking-wide text-neutral-500">
            <span className="text-primary-600 mr-2">●</span>
            Premium contactless delivery available
          </p>
        </div>

        {/* Right Info Section */}
        <div className="flex gap-x-6 items-center">
          <p className="text-[11px] font-medium tracking-wide">
            Concierge Support:{" "}
            <span className="text-white font-bold ml-1">+1 800 900</span>
          </p>
          <div className="h-3 w-px bg-neutral-800"></div>
          <div className="flex gap-4">
            <button className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] hover:text-white transition-colors">
              English
              <IoChevronDownSharp className="text-[8px] ml-0.5" />
            </button>
            <button className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.1em] hover:text-white transition-colors">
              USD
              <IoChevronDownSharp className="text-[8px] ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
