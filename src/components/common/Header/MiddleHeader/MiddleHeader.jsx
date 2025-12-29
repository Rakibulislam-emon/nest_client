import { useEffect, useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RiMenuUnfold2Line } from "react-icons/ri";
import { Link, useLocation } from "react-router";
import logo from "../../../../assets/logo_elite.png";
import SearchInput from "./SearchInput";
import UsersNavigation from "./UsersNavigation";
import LocationSelector from "./LocationSelector";

// eslint-disable-next-line react/prop-types
export default function MiddleHeader({ toggleMobileMenu }) {
  const [showSearch, setShowSearch] = useState(false);

  // Reference for modal to check if clicked outside
  const modalRef = useRef(null);

  // Get the current location (URL) using react-router's useLocation
  const location = useLocation();

  // Toggle the modal visibility
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  // Close the modal if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowSearch(false); // Close the modal when clicked outside
      }
    };

    // Add event listener for click outside
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close the modal whenever the location changes (URL changes)
  useEffect(() => {
    setShowSearch(false); // Close the modal on URL change
  }, [location]); // Runs whenever the route changes

  return (
    <>
      <div className="container">
        <div className="flex my-6 items-center justify-between gap-x-4">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden px-2 text-neutral-700 hover:text-primary-600 transition-colors duration-fast"
            aria-label="Open menu"
          >
            <RiMenuUnfold2Line className="text-3xl" />
          </button>

          {/* Logo */}
          <Link
            to="/"
            aria-label="Nest Premium Home"
            className="transition-transform duration-base hover:scale-105 group"
          >
            <div className="flex items-center gap-1">
              <img
                src={logo}
                alt="Elite Nest Logo"
                className="h-10 ml-4 md:h-12 w-auto object-contain bg-white rounded-lg p-1 shadow-glow-sm group-hover:rotate-3 transition-all"
              />
              <div className="flex flex-col -gap-1">
                <span className="text-2xl md:text-3xl font-bold font-heading tracking-[0.1em] text-neutral-900 group-hover:text-primary-600 transition-colors leading-none uppercase">
                  Nest
                </span>
                <span className="text-[10px] font-bold text-primary-600 tracking-[0.2em] uppercase opacity-80">
                  grocery store
                </span>
              </div>
            </div>
          </Link>

          {/* Search and Location Section */}
          <div className="flex-1 flex lg:px-10 gap-x-6 items-center">
            {/* Mobile Search Button */}
            <button
              className="ml-10 md:hidden text-neutral-700 hover:text-primary-600 transition-colors duration-fast"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <IoSearchSharp className="text-3xl" />
            </button>

            {/* Desktop Search */}
            <SearchInput className={"md:block hidden"} />

            {/* Location Dropdown */}
            <LocationSelector />
          </div>

          {/* User Navigation */}
          <div>
            <UsersNavigation />
          </div>
        </div>
      </div>

      {/* Mobile Search Modal */}
      {showSearch && (
        <div className="fixed top-0 inset-x-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in">
          <div className="flex justify-center items-center py-6 px-4">
            <div
              ref={modalRef}
              className="bg-white p-6 w-full max-w-md rounded-xl shadow-premium animate-slide-down"
            >
              <SearchInput className={"md:hidden"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
