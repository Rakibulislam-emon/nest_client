/* eslint-disable react/prop-types */
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "info", label: "Additional Info" },
    { id: "reviews", label: `Reviews (${Math.floor(Math.random() * 20) + 5})` },
    { id: "vendor", label: "Vendor" },
  ];

  return (
    <div className="mt-16 border border-neutral-200 rounded-3xl overflow-hidden bg-white shadow-soft">
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-neutral-100 bg-neutral-50/50">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={twMerge(
              "px-8 py-5 text-sm font-bold transition-all duration-300 relative",
              activeTab === tab.id
                ? "text-primary-600 bg-white"
                : "text-neutral-500 hover:text-primary-500 hover:bg-white/50"
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute top-0 left-0 w-full h-1 bg-primary-500" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-8 md:p-12">
        {activeTab === "description" && (
          <div className="animate-fadeIn space-y-6">
            <p className="text-neutral-600 leading-relaxed text-lg">
              {product?.description ||
                "Experience the pure essence of nature with our hand-selected organic products. Sourced directly from certified sustainable farms, every item undergoes rigorous quality checks to ensure you receive only the most nutritious and flavorful ingredients for your kitchen."}
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-primary-50/30 p-6 rounded-2xl border border-primary-100">
                <h4 className="font-bold text-primary-900 mb-3">
                  Key Benefits
                </h4>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    100% Certified Organic & Non-GMO
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    No artificial preservatives or additives
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                    Rich in essential vitamins and minerals
                  </li>
                </ul>
              </div>
              <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100">
                <h4 className="font-bold text-neutral-900 mb-3">Usage Tips</h4>
                <p className="text-neutral-600">
                  Store in a cool, dry place away from direct sunlight. Once
                  opened, keep in an airtight container to maintain maximum
                  freshness and peak flavor profile.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "info" && (
          <div className="animate-fadeIn overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-neutral-100">
                  <th className="py-4 font-bold text-neutral-900 w-1/3">
                    Weight
                  </th>
                  <td className="py-4 text-neutral-600">500g, 1kg, 2kg</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <th className="py-4 font-bold text-neutral-900">
                    Dimensions
                  </th>
                  <td className="py-4 text-neutral-600">15 x 10 x 5 cm</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <th className="py-4 font-bold text-neutral-900">
                    Shelf Life
                  </th>
                  <td className="py-4 text-neutral-600">12 Months</td>
                </tr>
                <tr>
                  <th className="py-4 font-bold text-neutral-900">Origin</th>
                  <td className="py-4 text-neutral-600">
                    Local Sustainable Farms
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="animate-fadeIn space-y-8">
            <div className="flex items-center justify-between">
              <h4 className="text-xl font-bold text-neutral-900">
                Customer Ratings
              </h4>
              <button className="text-primary-600 font-bold hover:underline">
                Write a Review
              </button>
            </div>
            <div className="flex items-center gap-4 p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
              <div className="text-4xl font-black text-neutral-900">4.8</div>
              <div>
                <div className="flex text-amber-400">★★★★★</div>
                <p className="text-sm text-neutral-500">
                  Based on verified purchases
                </p>
              </div>
            </div>
            <p className="text-neutral-500 italic text-center py-8">
              User reviews loading...
            </p>
          </div>
        )}

        {activeTab === "vendor" && (
          <div className="animate-fadeIn flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-full bg-neutral-100 flex items-center justify-center border border-neutral-200 shadow-inner">
              <span className="text-3xl font-bold text-primary-600">N</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h4 className="text-xl font-bold text-neutral-900 mb-2">
                Nest Premium Market
              </h4>
              <p className="text-neutral-600 mb-4">
                Trusted provider of premium organic goods since 2012. Our
                mission is to bridge the gap between local farmers and conscious
                consumers.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm font-semibold">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full">
                  ✓ Verified Seller
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
                  98% Positive Feedback
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
