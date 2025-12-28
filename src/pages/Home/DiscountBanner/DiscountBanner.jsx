import banner from "../../../assets/banner.jpeg";
import Button from "../../../components/common/Button";

export default function DiscountBanner() {
  return (
    <main className="max-w-screen-2xl mt-16 mb-16 mx-auto px-4">
      <div
        className="relative flex flex-col lg:flex-row items-center justify-between lg:h-[300px] bg-cover bg-center rounded-3xl shadow-premium overflow-hidden group"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>

        {/* Left Section with Text */}
        <div className="relative z-10 text-white text-center lg:text-left p-8 lg:p-12 space-y-4 max-w-2xl">
          <h1 className="text-3xl lg:text-5xl font-bold font-heading leading-tight drop-shadow-lg">
            Get 25% Discount on <br /> your first purchase
          </h1>
          <p className="text-lg lg:text-xl font-medium text-neutral-100 drop-shadow-md">
            Sign up now to become a member and enjoy your unique discount code.
          </p>
        </div>

        {/* Right Section with Form */}
        <div className="relative z-10 p-8 w-full md:w-8/12 lg:w-5/12">
          <form className="flex flex-col gap-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:bg-white/30 focus:border-white transition-all backdrop-blur-sm"
              required
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:bg-white/30 focus:border-white transition-all backdrop-blur-sm"
              required
            />
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full shadow-lg"
            >
              Subscribe & Save
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
