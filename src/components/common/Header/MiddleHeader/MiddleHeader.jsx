import SearchInput from "./SearchInput";
import { IoChevronDownSharp, IoLocationOutline } from "react-icons/io5";
import UsersNavigation from "./UsersNavigation";
import { FaHamburger } from "react-icons/fa";
import logo from "../../../../assets/logo.png";
import { Link } from "react-router";
export default function MiddleHeader() {
  return (
    <div className="flex my-4 items-center justify-between">
      <button className="lg:hidden px-2">
        <FaHamburger className="text-2xl" />
      </button>
      <Link>
        <div className="w-full  md:w-auto flex justify-center">
          <img src={logo} alt="logo" className="h-10 md:h-16"/>
        </div>
      </Link>
      <div className=" flex-1 flex lg:px-10 gap-x-10">
        <SearchInput />
        <div className="lg:flex gap-x-1 items-center border-gray border shadow-md px-2 hidden">
          <IoLocationOutline className="" />
          <span className="text-green  font-semibold">Your location</span>
          <IoChevronDownSharp />
        </div>
      </div>
      <div>
        <UsersNavigation /><p></p>
      </div>
    </div>
  );
}
