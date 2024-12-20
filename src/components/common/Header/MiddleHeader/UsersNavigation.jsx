import { BiShoppingBag } from "react-icons/bi";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";

export default function UsersNavigation() {
  return (
      <div className="flex lg:gap-x-8 gap-x-4 ">
        <div className="text-2xl relative lg:block hidden">
          <GoGitCompare />
          <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-green  text-white rounded-full flex items-center justify-center">
            0
          </span>
        </div>
        <div className="text-2xl relative">
          <MdOutlineFavoriteBorder />
          <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-green  text-white rounded-full flex items-center justify-center">
            0
          </span>
        </div>
        <div className="text-2xl relative">
          <BiShoppingBag />
          <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-green  text-white rounded-full flex items-center justify-center">
            0
          </span>
        </div>
        <div className="text-2xl relative">
          <LuUserPlus />
          <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-green  text-white rounded-full flex items-center justify-center">
            0
          </span>
        </div>
      </div>
    
  );
}
