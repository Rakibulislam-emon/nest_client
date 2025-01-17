import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../utils/cartSelectors";
import ShippingInfoForm from "./ShippingInfoForm";
import PaymentMethodForm from "./PaymentMethodForm";
import OrderSummary from "./OrderSummary";
// import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import { resetCart } from "../redux/cartSlice/cartSlice";
import { useNavigate } from "react-router";

const CheckoutForm = () => {
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const products = useSelector(selectCartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch()
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const { user } = useAuth();
  useEffect(() => {
    if (totalPrice > 0) {
      axios
        .post(`${import.meta.env.VITE_API_URL}/api/payment/process`, {
          price: totalPrice,
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [totalPrice]);

  console.log(clientSecret);
  // State for Shipping Info
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const handleShippingInfoChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value, // Directly update the value without checking for checkboxes
    }));
  };

 const handleSubmit = async (event) => {
  event.preventDefault();
  
  setLoading(true); // Start loading when form submission begins
  
  if (!stripe || !elements) {
    setLoading(false); // End loading if stripe or elements are not ready
    return;
  }

  const card = elements.getElement(CardElement);
  if (card == null) {
    setLoading(false); // End loading if card element is missing
    return;
  }

  // Create payment method
  const { error, paymentMethod } = await stripe.createPaymentMethod({
    type: "card",
    card,
  });

  if (error) {
    setLoading(false); // End loading on error
    setMessage(error.message); // Set error message
  } else {
    toast.success("Payment Created", paymentMethod);
  }

  // Confirm the payment
  const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: card,
      billing_details: {
        email: user?.email || "anonymous",
        name: user?.displayName || "anonymous",
      },
    },
  });

  if (confirmError) {
    setLoading(false); // End loading on error
    setMessage(confirmError.message); // Set error message
    toast.error(confirmError.message);
  } else {
    if (paymentIntent.status === "succeeded") {
      toast.success(`Payment successful! Transaction ID: ${paymentIntent.id}`);
      setPaymentSuccess(true);

      dispatch(resetCart()); // Empty the cart after successful payment
      navigate("/"); // Redirect to home page after successful payment
    } else {
      setLoading(false); // End loading if payment status is not succeeded
      setMessage("Payment failed. Please try again later.");
    }
  }

  setLoading(false); // End loading after everything is done
};



  return (
    <div className="font-[sans-serif] bg-white">
      <div className="max-lg:max-w-xl mx-auto w-full">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 max-lg:order-1 p-6 !pr-0 max-w-4xl mx-auto w-full">
            <div className="text-center max-lg:hidden">
              <h2 className="text-3xl font-bold text-gray-800 inline-block border-b-2 border-gray-800 pb-1">
                Checkout
              </h2>
            </div>

            <form className="lg:mt-16" onSubmit={handleSubmit}>
              <ShippingInfoForm
                shippingInfo={shippingInfo}
                handleChange={handleShippingInfoChange}
              />
              <PaymentMethodForm
                paymentSuccess={paymentSuccess}
                stripe={stripe}
                setClientSecret={setClientSecret}
                loading={loading}
                totalPrice={totalPrice}
              />
            
             
            </form>
          </div>
          <OrderSummary products={products} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
   // const amount = paymentIntent.amount;
        // const convertedAmount = (amount / 100).toFixed(2);
        // const paymentInfo = {
        //   givenAmount: `${convertedAmount} $`,
        //   paymentIntentId: paymentIntent.id,
        //   userName: user?.displayName,
        //   userEmail: user?.email,
        //   userImage: user?.photoURL,
        // };
        // console.log(paymentInfo);