import banner from '../../../assets/asset 44.jpeg'

export default function DiscountBanner() {
    return (
        <main className="max-w-screen-2xl mt-8 mx-auto ">
            <div
                className="relative  flex flex-col lg:flex-row items-center justify-evenly lg:h-[250px] md:h-[400px] h-[400px] bg-cover bg-center rounded-3xl shadow-lg"
                style={{
                    backgroundImage: `url(${banner})`,
                    // height: '250px',
                }}
            >
                {/* Left Section with Text */}
                <div className="text-white text-center lg:text-left p-6 space-y-4 mx-auto ">
                    <h1 className="text-2xl lg:text-4xl font-bold">
                        Get 25% Discount on <br /> your first purchase
                    </h1>
                    <p className="text-lg">
                        Sign up now to become a member and enjoy your discount.
                    </p>
                </div>

                {/* Right Section with Form */}
                <div className=" p-6  w-full md:w-8/12 lg:w-6/12  ">
                    <form className="flex flex-col    lg:max-w-[540px] space-y-2 ">
                        <label className="text-gray-700">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border border-gray-300 pl-4 p-2 w-full  focus:outline-none focus:ring-2 focus:ring-black"
                                required
                            />
                        </label>
                        <label className="text-gray-700">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="border border-gray-300 p-2 w-full  focus:outline-none pl-4 focus:ring-2 focus:ring-black"
                                required
                            />
                        </label>
                        <button
                            type="submit"
                            className="bg-[#212529] text-white px-4 py-2 rounded-md hover:bg-[#364127] transition-all"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}