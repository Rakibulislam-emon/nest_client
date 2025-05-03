import { BiShoppingBag } from "react-icons/bi";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import {
  selectCartItems,
  selectFavorite,
} from "../../../../utils/cartSelectors";

export default function UsersNavigation() {
  const { isSignedIn,  } = useUser();
  const item = useSelector(selectCartItems);
  const favorite = useSelector(selectFavorite);

  const totalItems = item.reduce((acc, item) => acc + item.quantity, 0);
  const totalFav = favorite.length;

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
          {totalFav}
        </span>
      </div>
      <div className="text-2xl relative">
        <Link to={"/cart"}>
          <BiShoppingBag />
          <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-green  text-white rounded-full flex items-center justify-center">
            {totalItems > 0 ? totalItems : 0}
          </span>
        </Link>
      </div>
      <div className="text-2xl relative courser-pointer">
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton mode="modal">
            <button className="flex items-center">
              <LuUserPlus />
              <span className="absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 bg-red-600 text-white rounded-full flex items-center justify-center"></span>
            </button>
          </SignInButton>
        )}
      </div>
    </div>
  );
}
