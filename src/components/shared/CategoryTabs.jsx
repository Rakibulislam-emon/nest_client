/* eslint-disable react/prop-types */
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const CategoryTabs = ({ categories, setSelectedCategory }) => {
  return (
    <div className="relative">
      {/* Dropdown for small screens */}
      <div className="block md:hidden  ">
        <Menu as="div" className="relative inline-block text-left w-full">
          <div>
            <Menu.Button className="inline-flex justify-between w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ">
              Categories
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {categories.map((category, idx) => (
                  <Menu.Item key={idx}>
                    {({ active }) => (
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-indigo-600 text-white' : 'text-gray-900'}`}
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
      <div className="hidden sm:block">
        <TabGroup>
          <TabList className="md:flex gap-4 flex-wrap">
            {categories.map((category, idx) => (
              <Tab
                key={idx}
                className="data-[selected]:bg-green px-2 py-2 my-2 rounded-md data-[selected]:text-white data-[hover]:bg-none"
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
