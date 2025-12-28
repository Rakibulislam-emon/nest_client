import logo from "../../../assets/logo_elite.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="font-sans tracking-wide bg-neutral-900 pt-12 pb-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-primary"></div>

      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="bg-neutral-800/50 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-neutral-800">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-2">
              Subscribe to our Newsletter
            </h3>
            <p className="text-neutral-400">
              Get the latest updates, exclusive offers, and green groceries
              delivered to you.
            </p>
          </div>
          <div className="w-full md:w-1/2 max-w-lg">
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-neutral-900 border border-neutral-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-fast shadow-glow">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Nest"
                  className="h-12 w-auto object-contain"
                />
                <div className="flex flex-col -gap-1">
                  <span className="text-2xl font-bold font-heading tracking-[0.1em] text-white group-hover:text-primary-400 transition-colors leading-none uppercase">
                    Nest
                  </span>
                  <span className="text-[10px] font-bold text-primary-500 tracking-[0.2em] uppercase opacity-90">
                    grocery store
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-sm">
              Nest Grocery provides fresh, organic, and sustainable produce
              directly from farms to your table. We believe in quality,
              transparency, and health for all our customers.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-neutral-400 group">
                <FiMapPin className="text-primary-500 text-xl mt-1 shrink-0 group-hover:text-primary-400 transition-colors" />
                <span className="text-sm group-hover:text-neutral-300 transition-colors">
                  5171 W Campbell Ave undefined Kent, Utah 53127 United States
                </span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400 group">
                <FiMail className="text-primary-500 text-xl shrink-0 group-hover:text-primary-400 transition-colors" />
                <span className="text-sm group-hover:text-neutral-300 transition-colors">
                  support@nestgrocery.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400 group">
                <FiPhoneCall className="text-primary-500 text-xl shrink-0 group-hover:text-primary-400 transition-colors" />
                <span className="text-sm group-hover:text-neutral-300 transition-colors">
                  (+91) - 540-025-124553
                </span>
              </div>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                "About Us",
                "Delivery Information",
                "Privacy Policy",
                "Terms & Conditions",
                "Contact Us",
                "Support Center",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-neutral-400 hover:text-primary-500 text-sm transition-colors duration-fast block hover:translate-x-1 transform"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Account</h4>
            <ul className="space-y-4">
              {[
                "Sign In",
                "View Cart",
                "My Wishlist",
                "Track My Order",
                "Help Ticket",
                "Shipping Details",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-neutral-400 hover:text-primary-500 text-sm transition-colors duration-fast block hover:translate-x-1 transform"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Install App</h4>
            <p className="text-neutral-400 text-sm mb-4">
              From App Store or Google Play
            </p>
            <div className="flex flex-col gap-3 mb-6">
              <button className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white px-4 py-2 rounded-lg flex items-center gap-3 transition-all duration-fast w-full max-w-[170px]">
                <div className="text-3xl"></div>
                <div className="text-left">
                  <div className="text-[10px] leading-none">
                    Download on the
                  </div>
                  <div className="text-sm font-bold leading-tight">
                    App Store
                  </div>
                </div>
              </button>
              <button className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white px-4 py-2 rounded-lg flex items-center gap-3 transition-all duration-fast w-full max-w-[170px]">
                <div className="text-2xl">▶</div>
                <div className="text-left">
                  <div className="text-[10px] leading-none">GET IT ON</div>
                  <div className="text-sm font-bold leading-tight">
                    Google Play
                  </div>
                </div>
              </button>
            </div>
            <p className="text-neutral-400 text-sm mb-4">
              Secured Payment Gateways
            </p>
            <div className="flex gap-2 opacity-80">
              {/* Payment Icons Placeholder */}
              <div className="h-6 w-10 bg-white/10 rounded"></div>
              <div className="h-6 w-10 bg-white/10 rounded"></div>
              <div className="h-6 w-10 bg-white/10 rounded"></div>
              <div className="h-6 w-10 bg-white/10 rounded"></div>
            </div>
          </div>
        </div>

        <hr className="border-neutral-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-500 text-sm text-center md:text-left">
            © 2024 <strong className="text-primary-500">Nest Grocery</strong> -
            All rights reserved
          </p>

          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white hover:bg-primary-600 hover:-translate-y-1 transition-all duration-fast shadow-soft"
                >
                  <Icon className="text-sm" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
