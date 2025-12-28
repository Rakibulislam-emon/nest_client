import { BiShoppingBag } from "react-icons/bi";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import {
  selectCartItems,
  selectFavorite,
} from "../../../../utils/cartSelectors";

export default function UsersNavigation() {
  const { isSignedIn } = useUser();
  const item = useSelector(selectCartItems);
  const favorite = useSelector(selectFavorite);

  const totalItems = item.reduce((acc, item) => acc + item.quantity, 0);
  const totalFav = favorite.length;

  return (
    <div className="flex lg:gap-x-8 gap-x-5 items-center">
      <div className="text-2xl relative lg:block hidden group cursor-pointer">
        <GoGitCompare className="text-neutral-600 group-hover:text-primary-600 transition-colors duration-fast" />
        <span className="absolute -top-2 -right-2 text-[10px] font-bold w-5 h-5 bg-primary-500 text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm">
          0
        </span>
      </div>
      <div className="text-2xl relative group cursor-pointer">
        <MdOutlineFavoriteBorder className="text-neutral-600 group-hover:text-primary-600 transition-colors duration-fast" />
        <span className="absolute -top-2 -right-2 text-[10px] font-bold w-5 h-5 bg-primary-500 text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm">
          {totalFav}
        </span>
      </div>
      <div className="text-2xl relative group cursor-pointer">
        <Link to={"/cart"}>
          <BiShoppingBag className="text-neutral-600 group-hover:text-primary-600 transition-colors duration-fast" />
          <span className="absolute -top-2 -right-2 text-[10px] font-bold w-5 h-5 bg-primary-500 text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm">
            {totalItems > 0 ? totalItems : 0}
          </span>
        </Link>
      </div>
      <div className="text-2xl relative cursor-pointer group">
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton mode="modal">
            <button className="flex items-center text-neutral-600 hover:text-primary-600 transition-colors duration-fast">
              <LuUserPlus />
            </button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}
