import SearchInput from "./SearchInput";
import {
  IoChevronDownSharp,
  IoLocationOutline,
  IoSearchSharp,
} from "react-icons/io5";
import UsersNavigation from "./UsersNavigation";
import { FaHamburger } from "react-icons/fa";
import logo from "../../../../assets/logo.png";
import { Link, useLocation } from "react-router"; // Use useLocation from react-router-dom
import { useState, useEffect, useRef } from "react";
import { RiMenuUnfold2Line } from "react-icons/ri";

export default function MiddleHeader() {
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
    <div>
      <div className="flex my-4 items-center justify-between ">
        <button className="lg:hidden px-2">
          <RiMenuUnfold2Line className="text-2xl" />
        </button>
        <Link>
          <div className="w-full md:w-auto flex justify-center">
            <img src={logo} alt="logo" className="h-10 md:h-16" />
          </div>
        </Link>
        <div className="flex-1 flex lg:px-10 gap-x-10">
          <button className=" ml-10 md:hidden" onClick={toggleSearch}>
            <IoSearchSharp className="text-3xl" />
          </button>
          <SearchInput className={"md:block hidden"} />
          <div className="lg:flex gap-x-1 items-center border-gray border shadow-md px-2 hidden">
            <IoLocationOutline />
            <span className="text-green font-semibold">Your location</span>
            <IoChevronDownSharp />
          </div>
        </div>
        <div>
          <UsersNavigation />
        </div>
      </div>

      {/* Modal (Search Bar at the Bottom) */}
      {showSearch && (
        <div className="fixed top-0 inset-x-0 bg-black bg-opacity-50 z-50">
          <div className="flex justify-center items-center py-4">
            <div
              ref={modalRef}
              className="bg-white p-4 w-full max-w-md rounded shadow-lg"
            >
              <SearchInput className={"md:hidden"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
