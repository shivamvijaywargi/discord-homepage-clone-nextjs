import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#23272a]">
      <div className="lg:container lg:mx-auto p-6 py-20 lg:px-12 text-white">
        <div className=" md:flex md:gap-x-24 xl:gap-x-44">
          <div className="space-y-6">
            <h2 className="font-[900] text-4xl text-[#5865f2] leading-8">
              IMAGINE A PLACE
            </h2>
            <div className="flex items-center space-x-2">
              <img src="/assets/flag.png" alt="Flag" className="w-6 h-4" />
              <p>English, USA</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="flex gap-8">
              <img src="/assets/twitter.svg" alt="Twitter" />
              <img src="/assets/instagram.svg" alt="Instagram" />
              <img src="/assets/facebook.svg" alt="Facebook" />
              <img src="/assets/youtube.svg" alt="YouTube" />
            </div>
          </div>
          <div className="mt-12 md:mt-0 flex flex-wrap gap-x-24  xl:justify-between gap-y-12">
            <div className="space-y-2">
              <h3 className="text-[#5865f2]">Product</h3>
              <ul className="space-y-1">
                <li>Download</li>
                <li>Nitro</li>
                <li>Status</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-[#5865f2]">Company</h3>
              <ul className="space-y-1">
                <li>About</li>
                <li>Jobs</li>
                <li>Branding</li>
                <li>Newsroom</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-[#5865f2]">Resources</h3>
              <ul className="space-y-1">
                <li>College</li>
                <li>Support</li>
                <li>Safety</li>
                <li>Blog</li>
                <li>Feedback</li>
                <li>Developers</li>
                <li>StreamKit</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-[#5865f2]">Policies</h3>
              <ul className="space-y-1">
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookie Settings</li>
                <li>Guidelines</li>
                <li>Acknowledgements</li>
                <li>Licenses</li>
                <li>Moderation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t-[#5865f2] border-t-[1px] mt-8">
          <div className="pt-8 flex items-center justify-between">
            <div>
              <img src="/assets/discord-logo.svg" alt="Discord Logo" />
            </div>
            <button className="bg-[#5865f2] text-white hover:bg-[#7983f5] px-4 py-2 rounded-full font-[600] transition hover:shadow-2xl">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
