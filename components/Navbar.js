import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#404eed]">
      <nav className="lg:container lg:mx-auto p-6 lg:px-12 text-white">
        <div className="flex justify-between items-center">
          <img src="/assets/discord-logo.svg" alt="Logo" />
          <ul className="gap-8 font-[600] hidden lg:flex">
            <li className="hover:cursor-pointer hover:underline">Download</li>
            <li className="hover:cursor-pointer hover:underline">Nitro</li>
            <li className="hover:cursor-pointer hover:underline">Discover</li>
            <li className="hover:cursor-pointer hover:underline">Safety</li>
            <li className="hover:cursor-pointer hover:underline">Support</li>
            <li className="hover:cursor-pointer hover:underline">Blog</li>
            <li className="hover:cursor-pointer hover:underline">Careers</li>
          </ul>
          <div className="flex items-center gap-4">
            <button className="bg-white text-black px-3 md:px-4 py-2 rounded-full text-xs md:text-sm transition hover:shadow-2xl">
              Login
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:hidden cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
