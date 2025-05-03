import { NavLink } from "react-router";
import { IoClose } from "react-icons/io5";

export default function MobileMenu({ onClose }) {
  const pages = [
    { label: "Shop", url: "/shop" },
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Blog", url: "/blog" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[200] lg:hidden">
      <div className="bg-white h-full w-4/5 max-w-sm p-5 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={onClose} className="text-2xl">
            <IoClose />
          </button>
        </div>
        
        <nav>
          <ul className="space-y-4">
            {pages.map((page) => (
              <li key={page.label}>
                <NavLink
                  to={page.url}
                  onClick={onClose}
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 text-green font-bold"
                      : "block py-2 hover:text-green"
                  }
                >
                  {page.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}