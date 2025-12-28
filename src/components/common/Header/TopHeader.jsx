import { IoChevronDownSharp } from "react-icons/io5";

export default function TopHeader() {
  const Links = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <div className="lg:flex justify-between items-center hidden bg-gradient-primary text-white px-6 py-2.5 shadow-soft">
      {/* Left Navigation Links */}
      <div className="flex gap-x-1">
        {Links.map((link, index) => (
          <a
            key={link.name}
            href={link.href}
            className={`px-3 text-sm font-medium hover:text-secondary-200 transition-colors duration-fast ${
              index !== Links.length - 1 ? "border-r border-white/30" : ""
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Center Message */}
      <div className="flex-1 text-center">
        <p className="text-sm font-medium">
          🚚 100% Secure delivery without contacting the courier
        </p>
      </div>

      {/* Right Info Section */}
      <div className="flex gap-x-4 items-center text-sm">
        <p className="font-medium">
          Need help? Call Us: <span className="font-bold">+1800 900</span>
        </p>
        <button className="flex items-center gap-1 px-3 py-1 border-l border-r border-white/30 hover:bg-white/10 transition-colors duration-fast rounded">
          English
          <IoChevronDownSharp className="text-xs" />
        </button>
        <button className="flex items-center gap-1 hover:bg-white/10 px-2 py-1 transition-colors duration-fast rounded">
          USD
          <IoChevronDownSharp className="text-xs" />
        </button>
      </div>
    </div>
  );
}
