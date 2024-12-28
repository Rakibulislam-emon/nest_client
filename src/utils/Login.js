import { toast } from "react-hot-toast";

/**
 * Handles login logic
 * @param {Object} params - Function parameters
 * @param {Event} params.event - Form submit event
 * @param {Object} params.axios - Axios instance for API calls
 * @param {Function} params.navigate - React Router's navigate function
 */
export const handleLogin = async ({ event, axios, navigate }) => {
  event.preventDefault();

  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  const loginInfo = { email, password };

  try {
    const res = await axios.post("/login", loginInfo);

    if (res.status === 200) {
      // Store JWT token
      localStorage.setItem("token", res.data.token);
      toast.success("Logged in successfully");
      navigate("/");
    }
  } catch (error) {
    toast.error(
      `Login failed: ${error.response?.data?.message || error.message}`
    );
  }
};
