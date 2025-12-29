/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/cartSlice/cartSlice";
import toast from "react-hot-toast";
import Button from "../../../../components/common/Button";
import { FiShoppingCart } from "react-icons/fi";

function AddToCartButton({ product, className }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (product) {
      dispatch(addToCart(product));
      toast.success("Product added to cart!", {
        position: "top-right",
        style: {
          background: "black",
          color: "#fff",
        },
      });
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="primary"
      className={`w-full shadow-md flex items-center justify-between px-6 ${
        className || ""
      }`}
    >
      <span className="font-bold">Add to Cart</span>
      <FiShoppingCart className="text-xl" />
    </Button>
  );
}

export default AddToCartButton;
