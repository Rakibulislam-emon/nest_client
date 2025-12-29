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

import { useUser } from "@clerk/clerk-react";
import { resetCart } from "../redux/cartSlice/cartSlice";
import { useNavigate } from "react-router";
import Badge from "../components/common/Badge";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  // const [message, setMessage] = useState("");
  const products = useSelector(selectCartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const discountPercent = useSelector((state) => state.cart.discountPercent);
  const dispatch = useDispatch();
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { user } = useUser();
  const email = user?.emailAddresses?.[0]?.emailAddress;
  console.log("email:", email);

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
      toast.error(error.message);
    } else {
      console.log("Payment Method logic:", paymentMethod);
    }

    // Confirm the payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: email || "anonymous",
            name: user?.fullName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setLoading(false); // End loading on error
      toast.error(confirmError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        toast.success(`Payment successful!`);
        setPaymentSuccess(true);

        dispatch(resetCart()); // Empty the cart after successful payment
        navigate("/order-success", {
          state: { orderId: paymentIntent.id, amount: totalPrice },
        });
      } else {
        setLoading(false); // End loading if payment status is not succeeded
        toast.error("Payment failed. Please try again.");
      }
    }

    setLoading(false); // End loading after everything is done
  };

  return (
    <div className="container py-12 md:py-24 space-y-16">
      <div className="space-y-6">
        <Badge
          variant="primary"
          size="lg"
          className="uppercase tracking-[0.3em]"
        >
          Checkout
        </Badge>
        <h1 className="text-5xl md:text-8xl font-black text-neutral-900 font-heading tracking-tight leading-none">
          Complete your <span className="text-primary-500">Journey</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-500 max-w-2xl font-medium">
          Finalize your selection and secure your premium organic experience.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-16 items-start">
        {/* Left Side: Forms */}
        <div className="lg:col-span-3 space-y-16">
          <form id="checkout-form" onSubmit={handleSubmit}>
            <div className="space-y-24">
              <section>
                <ShippingInfoForm
                  user={user}
                  shippingInfo={shippingInfo}
                  handleChange={handleShippingInfoChange}
                />
              </section>

              <section className="pt-16 border-t border-neutral-100">
                <PaymentMethodForm
                  paymentSuccess={paymentSuccess}
                  stripe={stripe}
                  clientSecret={clientSecret}
                  loading={loading}
                  totalPrice={totalPrice}
                />
              </section>
            </div>
          </form>
        </div>

        {/* Right Side: Summary */}
        <div className="lg:col-span-2 lg:sticky lg:top-32 h-fit">
          <OrderSummary
            products={products}
            totalPrice={totalPrice}
            discountPercent={discountPercent}
          />
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
