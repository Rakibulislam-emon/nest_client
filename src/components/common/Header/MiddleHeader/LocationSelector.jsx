import { useState } from "react";
import toast from "react-hot-toast";
import { Menu, Transition } from "@headlessui/react";
import {
  IoLocationOutline,
  IoChevronDownSharp,
  IoFlashOutline,
} from "react-icons/io5";
import { Fragment } from "react";

const MOCK_LOCATIONS = [
  "Upper East Side, Manhattan",
  "Mayfair, London",
  "Downtown Dubai",
  "Ginza, Tokyo",
  "Marina Bay, Singapore",
  "Beverly Hills, CA",
];

export default function LocationSelector() {
  const [location, setLocation] = useState("Your location");
  const [isDetecting, setIsDetecting] = useState(false);

  const handleDetectLocation = async () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported by your browser");
      return;
    }

    setIsDetecting(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          // Reverse geocoding using Nominatim (OpenStreetMap)
          // Adding User-Agent as per Nominatim usage policy
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`,
            {
              headers: {
                "User-Agent": "NestEliteGroceryStore/1.0",
              },
            }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();

          if (data.error) {
            throw new Error(data.error);
          }

          const addr = data.address || {};
          const cityName =
            addr.city ||
            addr.town ||
            addr.village ||
            addr.suburb ||
            addr.county ||
            "Unknown Location";
          const stateName = addr.state || "";

          const fullLocation = `${cityName}${
            stateName ? `, ${stateName}` : ""
          }`;
          setLocation(fullLocation);
          toast.success(`Location resolved: ${cityName}`);
        } catch (error) {
          console.error("Geocoding failed:", error);
          toast.error("City name resolution failed. Using coordinates.");
          setLocation(
            `${position.coords.latitude.toFixed(
              3
            )}, ${position.coords.longitude.toFixed(3)}`
          );
        } finally {
          setIsDetecting(false);
        }
      },
      (error) => {
        setIsDetecting(false);
        console.error("Geolocation error:", error);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            toast.error(
              "Location permission denied. Please allow browser access."
            );
            break;
          case error.POSITION_UNAVAILABLE:
            toast.error(
              "Location information is unavailable. Check your network/GPS."
            );
            break;
          case error.TIMEOUT:
            toast.error("Location request timed out. Please try again.");
            break;
          default:
            toast.error(
              "An unexpected error occurred while detecting location."
            );
        }
      },
      { enableHighAccuracy: false, timeout: 15000, maximumAge: 60000 }
    );
  };

  return (
    <div className="relative">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="group lg:flex gap-x-2 items-center border border-neutral-200 hover:border-primary-400 shadow-soft hover:shadow-medium px-4 py-2.5 rounded-xl hidden transition-all duration-300 bg-white/50 backdrop-blur-sm">
            <IoLocationOutline
              className={`text-xl transition-all duration-500 ${
                isDetecting
                  ? "text-primary-500 animate-pulse scale-125"
                  : "text-primary-600 group-hover:scale-110"
              }`}
            />
            <span className="text-primary-600 font-bold text-sm truncate max-w-[150px]">
              {isDetecting ? "Finding you..." : location}
            </span>
            <IoChevronDownSharp
              className={`text-neutral-400 group-hover:text-primary-600 transition-transform duration-300 ${
                isDetecting ? "opacity-0" : "group-hover:translate-y-0.5"
              }`}
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95 -translate-y-2"
          enterTo="transform opacity-100 scale-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100 translate-y-0"
          leaveTo="transform opacity-0 scale-95 -translate-y-2"
        >
          <Menu.Items className="absolute right-0 mt-3 w-72 origin-top-right divide-y divide-neutral-100 rounded-2xl bg-white/90 backdrop-blur-xl shadow-premium ring-1 ring-black ring-opacity-5 focus:outline-none z-50 overflow-hidden border border-white/40">
            <div className="px-4 py-4 bg-primary-50/50">
              <button
                onClick={handleDetectLocation}
                disabled={isDetecting}
                className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl bg-primary-600 text-white font-bold text-sm shadow-glow-sm hover:bg-primary-700 hover:shadow-glow transition-all active:scale-95 disabled:opacity-70 disabled:active:scale-100"
              >
                <IoFlashOutline
                  className={isDetecting ? "animate-spin" : "animate-bounce"}
                />
                {isDetecting ? "Detecting..." : "Detect My Location"}
              </button>
            </div>

            <div className="p-2">
              <div className="px-3 py-2 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                Elite Neighborhoods
              </div>
              {MOCK_LOCATIONS.map((loc) => (
                <Menu.Item key={loc}>
                  {({ active }) => (
                    <button
                      onClick={() => setLocation(loc)}
                      className={`${
                        active
                          ? "bg-white text-primary-600 shadow-soft"
                          : "text-neutral-700"
                      } cursor-pointer group flex w-full items-center rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full mr-3 transition-all duration-300 ${
                          active
                            ? "bg-primary-500 scale-150 shadow-glow-sm"
                            : "bg-neutral-200"
                        }`}
                      />
                      {loc}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>

            <div className="px-4 py-3 bg-neutral-50/50">
              <p className="text-[10px] text-neutral-400 text-center font-medium italic">
                Dynamic Location Vibe • Elite Precision
              </p>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
