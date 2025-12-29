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
    <footer className="font-sans tracking-wide bg-neutral-900 pt-20 pb-10 relative overflow-hidden">
      {/* Premium Background Accents */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-primary shadow-glow-sm"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary-500/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Newsletter Section - Elite Glassmorphism */}
        <div className="glass-dark rounded-[2.5rem] p-10 md:p-14 mb-20 flex flex-col lg:flex-row items-center justify-between gap-10 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary-500/10 blur-3xl rounded-full -mr-20 -mt-20"></div>

          <div className="lg:w-1/2 relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading tracking-tight">
              Join the <span className="text-primary-400">Elite</span> Circle
            </h3>
            <p className="text-neutral-400 text-lg max-w-md leading-relaxed">
              Experience the pinnacle of grocery shopping. Get exclusive access
              to seasonal harvests and premium offers.
            </p>
          </div>
          <div className="w-full lg:w-1/2 max-w-xl relative z-10">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address..."
                className="flex-1 bg-white/5 border border-white/10 text-white px-6 py-4 rounded-2xl focus:outline-none focus:border-primary-500/50 transition-all placeholder:text-neutral-500 backdrop-blur-md"
              />
              <button className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 shadow-glow-sm hover:shadow-glow hover:-translate-y-0.5 active:scale-95 whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 max-w-sm">
            <Link to="/" className="inline-block mb-8 group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center p-2 shadow-glow-sm group-hover:rotate-6 transition-transform duration-500">
                  <img
                    src={logo}
                    alt="Elite Nest"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold font-heading tracking-tight text-white leading-none">
                    NEST <span className="text-primary-500">PREMIUM</span>
                  </span>
                  <span className="text-[10px] font-black text-neutral-500 tracking-[0.3em] uppercase mt-1">
                    Elite Market Group
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-neutral-400 text-base leading-relaxed mb-8">
              Pioneering the future of digital grocery with farm-to-door
              transparency and curated organic selections that redefine quality
              standards.
            </p>
            <div className="space-y-5">
              <div className="flex items-start gap-4 text-neutral-400 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-neutral-800/50 flex items-center justify-center shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <FiMapPin className="text-lg" />
                </div>
                <span className="text-sm pt-2 group-hover:text-neutral-200 transition-colors">
                  5171 W Campbell Ave, Kent, Utah 53127
                </span>
              </div>
              <div className="flex items-center gap-4 text-neutral-400 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-neutral-800/50 flex items-center justify-center shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <FiMail className="text-lg" />
                </div>
                <span className="text-sm group-hover:text-neutral-200 transition-colors">
                  concierge@nestpremium.com
                </span>
              </div>
              <div className="flex items-center gap-4 text-neutral-400 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-neutral-800/50 flex items-center justify-center shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <FiPhoneCall className="text-lg" />
                </div>
                <span className="text-sm group-hover:text-neutral-200 transition-colors">
                  +1 (234) 567-8910
                </span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-bold text-xl mb-8">
              Company
            </h4>
            <ul className="space-y-4">
              {[
                "About Us",
                "Sustainability",
                "Privacy Policy",
                "Terms of Service",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-neutral-400 hover:text-primary-400 text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-bold text-xl mb-8">
              Experience
            </h4>
            <ul className="space-y-4">
              {[
                "Personalized Feed",
                "Your Wishlist",
                "Tracking",
                "Support Center",
                "Elite Membership",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-neutral-400 hover:text-primary-400 text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apps Column */}
          <div className="lg:col-span-4 lg:pl-10">
            <h4 className="text-white font-heading font-bold text-xl mb-8">
              App Experience
            </h4>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              Take the premium market anywhere. Exclusive app-only collections
              available.
            </p>
            <div className="space-y-4 mb-8">
              <button className="group glass-dark hover:bg-white/10 border border-white/5 text-white px-6 py-3 rounded-2xl flex items-center gap-4 transition-all duration-300 w-full max-w-[200px] hover:-translate-y-1">
                <div className="text-3xl group-hover:scale-110 transition-transform">
                  
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-neutral-500 uppercase font-black">
                    App Store
                  </div>
                  <div className="text-sm font-bold">iOS Download</div>
                </div>
              </button>
              <button className="group glass-dark hover:bg-white/10 border border-white/5 text-white px-6 py-3 rounded-2xl flex items-center gap-4 transition-all duration-300 w-full max-w-[200px] hover:-translate-y-1">
                <div className="text-2xl group-hover:scale-110 transition-transform">
                  ▶
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-neutral-500 uppercase font-black">
                    Google Play
                  </div>
                  <div className="text-sm font-bold">Android App</div>
                </div>
              </button>
            </div>
            <div className="flex gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <div className="h-8 w-12 bg-white/10 rounded-lg"></div>
              <div className="h-8 w-12 bg-white/10 rounded-lg"></div>
              <div className="h-8 w-12 bg-white/10 rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-neutral-500 text-sm font-medium">
            © 2024 <span className="text-white">Nest Premium Market</span>. All
            architectural standards reserved.
          </p>

          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 rounded-2xl bg-neutral-800/50 flex items-center justify-center text-white hover:bg-primary-600 hover:-translate-y-1.5 transition-all duration-300 border border-white/5 hover:border-primary-400 hover:shadow-glow-sm group"
                >
                  <Icon className="text-base group-hover:scale-110 transition-transform" />
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
