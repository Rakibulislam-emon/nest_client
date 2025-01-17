import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import Login from "./Login";
import Registration from "./Registration";
import { useEffect } from "react";

export default function MyAccount() {
  const { user } = useAuth(); // Assuming useAuth provides the logged-in user
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // Redirect to dashboard or homepage if user is already logged in
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col lg:flex-row  max-w-screen-2xl mx-auto">
      {/* Login Section */}
      {
        <div className="w-full lg:w-1/2 p-8">
          <Login />
        </div>
      }
      <div className="flex flex-col items-center">
        <div className="border w-0 h-[20%] "></div>
        <div className="border h-8 w-8 my-4 rounded-full hover:bg-green"></div>
        <div className="border w-0 h-[20%] "></div>
        <div className="border h-8 w-8 my-4 rounded-full hover:bg-green"></div>

        <div className="border w-0 h-[20%] "></div>
        <div className="border h-8 w-8 my-4 rounded-full hover:bg-green"></div>
        <div className="border w-0 h-[20%] "></div>
      </div>
      {/* Registration Section */}
      <div className="w-full lg:w-1/2 p-8">
        <Registration />
      </div>
    </div>
  );
}
