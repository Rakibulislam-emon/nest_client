'use client'
import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function SearchInput() {
    const [search, setSearch] = useState('')
    return (
        <div className='hidden  flex-1 md:inline-flex  h-10 relative'>
            <input
                type="text"
                placeholder='Search Products here...'
                className='w-full h-full border-2 border-lightGreen  px-4 outline-none'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
                <IoClose
                    onClick={() => setSearch("")}
                    className='text-xl  absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200'
                />
            )}
            <span className='w-10 h-10  inline-flex items-center justify-center  absolute top-0 right-0 hover:bg-green duration-200 cursor-pointer'>
                <IoSearchSharp className='text-3xl' />
            </span>

        </div>

    )
}

export default SearchInput;