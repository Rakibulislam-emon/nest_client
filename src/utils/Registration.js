import { toast } from "react-hot-toast";

export const handleRegister = async (
  e,
  userType,
  axios,
  navigate,
  createUser
) => {
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
    const userCredential = await createUser(email, password);

    if (userCredential) {
      

      // User creation was successful, proceed with registration
      const res = await axios.post("/api/register", registerInfos);
      if (res.status === 201) {
        toast.success("Registration successful!");
      } else {
        toast.error("Registration failed.");
      }
    } else {
      toast.error("User creation failed.");
    }
  } catch (error) {
    toast.error("Error occurred during registration.");
    console.error(error);
  }
};
