/* eslint-disable react/prop-types */
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const CategoryTabs = ({ categories, setSelectedCategory }) => {
  return (
    <div className="relative z-50">
      {/* Dropdown for small screens */}
      <div className="block md:hidden w-full">
        <Menu as="div" className="relative inline-block text-left w-full">
          <div>
            <Menu.Button className="inline-flex justify-between w-full rounded-md border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all">
              Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2 -mr-1 text-neutral-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-[100] mt-2 w-full origin-top-right rounded-md bg-white shadow-premium ring-1 ring-black ring-opacity-5 focus:outline-none max-h-60 overflow-y-auto">
              <div className="py-1">
                {categories.map((category, idx) => (
                  <Menu.Item key={idx}>
                    {({ active }) => (
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-4 py-2 text-sm transition-colors ${
                          active
                            ? "bg-primary-50 text-primary-600 font-semibold"
                            : "text-neutral-700"
                        }`}
                      >
                        {category}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      {/* Tabs for larger screens */}
      <div className="hidden md:block">
        <TabGroup>
          <TabList className="flex gap-3 flex-wrap justify-end">
            {categories.map((category, idx) => (
              <Tab
                key={idx}
                className={({ selected }) =>
                  `px-5 py-2.5 rounded-full text-sm md:text-base font-bold transition-all duration-300 outline-none ${
                    selected
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-500/30"
                      : "bg-white text-neutral-600 hover:text-primary-600 hover:bg-primary-50"
                  }`
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Tab>
            ))}
          </TabList>
        </TabGroup>
      </div>
    </div>
  );
};

export default CategoryTabs;
