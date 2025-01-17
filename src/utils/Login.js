import { toast } from "react-hot-toast";

export const handleLogin = async ({ event, navigate, signIn }) => {
  event.preventDefault();

  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  // const loginInfo = { email, password };

  try {
    const userCredential = await signIn(email, password);
    console.log('userCredential:', userCredential)
    if (userCredential) {
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Login failed.");
    }
  } catch (error) {
    toast.error(
      `Login failed: ${error.message || "An unknown error occurred"}`
    );
  }
};

