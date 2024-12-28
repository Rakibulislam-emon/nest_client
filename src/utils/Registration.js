import { toast } from "react-hot-toast";

export const handleRegister = async (e, userType, axios, navigate) => {
  e.preventDefault();
  const form = e.target;

  // Common fields
  const username = form.username.value;
  const email = form.email.value;
  const password = form.password.value;

  // Build registration object for Customer (no vendor-specific fields)
  const registerInfos = {
    userType, // This will always be 'customer'
    username,
    email,
    password,
  };

  try {
    const res = await axios.post("/api/registration", { registerInfos });
    if (res.status === 201) {
      localStorage.setItem("token", res.data.token);
      toast.success("Registration successful");
      navigate("/"); // Redirect to homepage or wherever you want
    }
  } catch (error) {
    toast.error("Error occurred during registration.");
    console.error(error);
  }
};
