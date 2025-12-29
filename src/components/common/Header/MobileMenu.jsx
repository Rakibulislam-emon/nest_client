import { NavLink } from "react-router";
import { IoClose } from "react-icons/io5";
import logo from "../../../assets/logo_elite.png";

// eslint-disable-next-line react/prop-types
export default function MobileMenu({ onClose }) {
  const pages = [
    { label: "Home", url: "/" },
    { label: "Shop", url: "/shop" },
    { label: "Featured", url: "/#featured" },
    { label: "Blog", url: "/blog" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <div className="fixed inset-0 z-[200] lg:hidden animate-fade-in">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Menu Drawer */}
      <div className="absolute right-0 top-0 bottom-0 bg-white w-4/5 max-w-sm flex flex-col shadow-premium animate-slide-down h-full">
        {/* Header */}
        <div className="p-5 flex justify-between items-center border-b border-neutral-100 bg-neutral-50">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Nest" className="h-8 object-contain" />
            <div className="flex flex-col -gap-0.5">
              <span className="text-xl font-bold font-heading tracking-wider text-neutral-900 leading-none uppercase">
                Nest
              </span>
              <span className="text-[8px] font-bold text-primary-600 tracking-widest uppercase opacity-80">
                Premium Market
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-500 hover:text-red-500 hover:bg-white rounded-full transition-all duration-fast shadow-soft hover:shadow-medium"
            aria-label="Close menu"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-5">
          <div className="mb-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">
            Menu
          </div>
          <ul className="space-y-2">
            {pages.map((page) => (
              <li key={page.label}>
                <NavLink
                  to={page.url}
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center px-4 py-3 bg-gradient-primary text-white rounded-lg font-bold shadow-lg shadow-primary-500/30 transition-all duration-base"
                      : "flex items-center px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-all duration-base"
                  }
                >
                  {page.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Actions */}
        <div className="p-5 border-t border-neutral-100 bg-neutral-50">
          <button className="w-full py-3 bg-neutral-900 text-white rounded-lg font-semibold hover:bg-neutral-800 transition-colors shadow-soft">
            Login / Register
          </button>
        </div>
      </div>
    </div>
  );
}
