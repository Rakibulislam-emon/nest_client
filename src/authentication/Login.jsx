import { useNavigate } from "react-router";
import useAxios from "../hooks/useAxios";
import { handleLogin } from "../utils/Login";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const axios = useAxios(); // Custom hook to get Axios instance
  const navigate = useNavigate(); // React Router's navigate
  const { signIn } = useAuth();
  return (
    <div className="p-8 mx-auto max-w-lg lg:max-w-xl">
      {/* Header Section */}
      <h1 className="border-b pb-4 text-center text-3xl font-semibold lg:text-left">
        <span className="border-b-4 pb-3 border-green">Login</span>
      </h1>
      <p className="pt-6 text-center text-gray-600 lg:text-left">
        Welcome back! Sign in to your account.
      </p>

      {/* Form Section */}
      <div className="py-8">
        <form
          onSubmit={(e) => handleLogin({ event: e, axios, navigate, signIn })}
          className="space-y-6"
        >
          {/* Email Input */}
          <div className="space-y-1">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              className="border-2 rounded-full border-gray-300 p-3 w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium"
            >
              Password *
            </label>
            <input
              type="password"
              name="password"
              className="border-2 rounded-full border-gray-300 p-3 w-full focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-gray-600">
                Remember me
              </label>
            </div>
            <a href="#" className="text-green-400 hover:underline">
              Forgot your password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green hover:bg-black hover:text-white text-black font-semibold py-3 px-6 rounded-full w-full transition-all duration-300"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
