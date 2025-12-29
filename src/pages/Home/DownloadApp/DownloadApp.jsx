import appStore from "../../../assets/asset 35.png";
import googlePlay from "../../../assets/asset 36.png";
import buy from "../../../assets/asset 37.png";
import { Link } from "react-router";

export default function DownloadApp() {
  return (
    <main className="container rounded-3xl mt-12 bg-gradient-to-r from-emerald-100 to-green-50 overflow-hidden relative shadow-lg">
      <div className="flex flex-col lg:flex-row justify-between items-center p-8 lg:p-16 h-full min-h-[400px]">
        {/* Text Section */}
        <div className="flex flex-col text-center lg:text-left z-10 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-emerald-900 leading-tight">
            Download our <br />{" "}
            <span className="text-primary-600">Organic App</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-neutral-600 font-medium">
            Online Orders made easy, fast and reliable.{" "}
            <br className="hidden md:block" /> Get exclusive mobile-only offers.
          </p>

          {/* Store Buttons */}
          <div className="flex justify-center lg:justify-start gap-4">
            <Link
              to={
                "https://play.google.com/store/apps/details?id=com.bigbasket.mobileapp"
              }
              className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-lg"
            >
              <img
                src={appStore}
                alt="Download on the App Store"
                className="h-12 md:h-14 lg:h-16"
              />
            </Link>
            <Link
              to={
                "https://play.google.com/store/apps/details?id=com.bigbasket.mobileapp"
              }
              className="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 rounded-lg"
            >
              <img
                src={googlePlay}
                alt="Get it on Google Play"
                className="h-12 md:h-14 lg:h-16"
              />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0 relative z-10">
          <img
            src={buy}
            alt="Buy Organic"
            className="h-64 md:h-80 lg:h-[500px] object-contain drop-shadow-2xl lg:-mb-16 lg:translate-y-10"
          />
        </div>

        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-40 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </main>
  );
}
