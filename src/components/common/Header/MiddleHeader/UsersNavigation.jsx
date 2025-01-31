import { BiShoppingBag } from "react-icons/bi";
import { GoGitCompare } from "react-icons/go";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectFavorite,
} from "../../../../utils/cartSelectors";
import useAuth from "../../../../hooks/useAuth";
import toast from "react-hot-toast";

export default function UsersNavigation() {
  const { user, logOut } = useAuth();
  const item = useSelector(selectCartItems);
  const favorite = useSelector(selectFavorite);
  // const item = useSelector((state)=> state.cart.cart)

  const totalItems = item.reduce((acc, item) => acc + item.quantity, 0);
  const totalFav = favorite.length; // This will count how many items are in the favorite array
  const handleLogout = () => {
    try {
      logOut();
      toast.success("Logged out successfully");
    } catch (error) {
      console.log(error);
    }
  };
  

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
        <Link to={"/authentications"}>
          <LuUserPlus />
          <span
            className={`absolute -top-1 -right-1 text-[10px] font-medium w-4 h-4 ${
              user ? "bg-green " : "bg-red-600"
            } text-white rounded-full flex items-center justify-center`}
          ></span>
        </Link>
      </div>
      <div>
        {user && (
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white rounded"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
