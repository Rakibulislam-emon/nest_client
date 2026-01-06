import { Link, useLocation } from "react-router";
import { IoClose } from "react-icons/io5";
import logo from "../../../assets/logo_elite.png";
import {
  SignInButton,
  UserButton,
  useUser,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { LuUserPlus } from "react-icons/lu";

// eslint-disable-next-line react/prop-types
export default function MobileMenu({ onClose }) {
  const { user } = useUser();
  const location = useLocation();
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
        <nav className="flex-1 overflow-y-auto p-5 pb-0">
          <div className="mb-4 text-xs font-bold text-neutral-400 uppercase tracking-wider">
            Menu
          </div>
          <ul className="space-y-2 mb-8">
            {pages.map((page) => {
              // Custom active logic to handle hash links correctly
              const isHashLink = page.url.includes("#");
              const isLinkActive = isHashLink
                ? location.pathname === "/" &&
                  location.hash === page.url.substring(1)
                : page.url === "/"
                ? location.pathname === "/" && location.hash === ""
                : location.pathname.startsWith(page.url);

              return (
                <li key={page.label}>
                  <Link
                    to={page.url}
                    onClick={onClose}
                    className={
                      isLinkActive
                        ? "flex items-center px-4 py-3 bg-primary-50 text-primary-700 border-l-4 border-primary-600 rounded-r-lg font-bold transition-all duration-base"
                        : "flex items-center px-4 py-3 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-lg font-medium transition-all duration-base border-l-4 border-transparent"
                    }
                  >
                    {page.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Auth Section Inside Nav for better scrolling/visibility */}
          <div className="py-5 border-t border-neutral-100">
            <SignedIn>
              <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-soft border border-neutral-100">
                <div className="flex items-center gap-3">
                  <UserButton afterSignOutUrl="/" />
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-neutral-900 leading-none">
                      {user?.fullName || "User"}
                    </span>
                    <span className="text-[10px] text-neutral-500 font-medium truncate max-w-[150px]">
                      {user?.primaryEmailAddress?.emailAddress}
                    </span>
                  </div>
                </div>
              </div>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="w-full py-3 bg-neutral-900 text-white rounded-lg font-semibold hover:bg-neutral-800 transition-colors shadow-soft flex items-center justify-center gap-2">
                  <LuUserPlus className="text-xl" />
                  Login / Register
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </nav>
      </div>
    </div>
  );
}
