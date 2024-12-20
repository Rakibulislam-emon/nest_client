"use client";

import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { LuEye } from "react-icons/lu";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

function SideBar({ product }) {
  return (
    <div className="absolute right-2 bottom-12 border flex flex-col text-2xl border-borderColor bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40">
     
      <button className="p-2 hover:bg-sky-600 hover:text-white border-y border-y-borderColor duration-200">
        <LuEye />
      </button>
      <button className="p-2 hover:bg-sky-600 hover:text-white border-y border-y-borderColor duration-200">
      <FaRegHeart size={20} />
      </button>
   

     
      {/* <button
        // onClick={handleToggleFavorite} // Toggle favorite on click
        className='p-2 hover:bg-sky-600 hover:text-white duration-200'>
        {
          isFavorite ? <MdFavorite className='text-red-500' /> : <MdFavoriteBorder />
        }
      </button> */}
    </div>
  );
}

export default SideBar;
