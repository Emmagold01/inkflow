import { useState } from "react";
import { Icon } from "@iconify/react";
import { openTallyForm } from "../utils/tally";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMobile = () => setOpen(!open);

  return (
    <nav className="border-fbord bg-darkbg/90 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 py-5 md:px-10">
        <div className="flex items-center justify-between">
          <div className="from-coral to-amber font-playfair bg-linear-to-r bg-clip-text text-2xl font-extrabold text-transparent">
            Inkflow
          </div>

          {/* Desktop Menu */}
          <div className="hidden gap-7 md:flex">
            <ul className="text-muted flex items-center space-x-7 text-[14px] font-medium">
              <li className="transition-all duration-500 hover:text-white">
                <a href="#how">How it works</a>
              </li>
              <li className="transition duration-500 hover:text-white">
                <a href="#features">For Authors</a>
              </li>
              <li className="transition duration-500 hover:text-white">
                <a href="#calc">Pricing</a>
              </li>
            </ul>

            <button 
              onClick={() => openTallyForm()}
              className="from-coral to-amber cursor-pointer rounded-md bg-linear-to-r px-6 py-2 text-[14px] font-bold transition-all duration-200 hover:brightness-80"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobile}
            className="cursor-pointer text-white md:hidden"
          >
            <Icon
              icon={open ? "material-symbols:close-rounded" : "ic:round-menu"}
              className="text-2xl"
            />
          </button>
        </div>
      </div>

      {/* Smooth Mobile Menu Dropdown */}
      <div
        className={`border-fbord grid transition-all duration-300 ease-in-out md:hidden ${
          open
            ? "grid-rows-[1fr] border-t opacity-100"
            : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="bg-darkbg/95 overflow-hidden backdrop-blur-lg">
          <ul className="flex flex-col space-y-4 px-5 py-6 text-[16px] font-medium text-gray-300">
            <li className="transition duration-300 hover:text-white">
              <a href="#how" onClick={toggleMobile} className="block w-full">
                How it works
              </a>
            </li>
            <li className="transition duration-300 hover:text-white">
              <a href="#features" onClick={toggleMobile} className="block w-full">
                For Authors
              </a>
            </li>
            <li className="transition duration-300 hover:text-white">
              <a href="#calc" onClick={toggleMobile} className="block w-full">
                Pricing
              </a>
            </li>
            <li className="pt-2">
              <button 
                onClick={() => {
                  openTallyForm();
                  toggleMobile();
                }}
                className="from-coral to-amber w-full cursor-pointer rounded-md bg-linear-to-r py-3 text-[14px] font-bold transition-all duration-200 hover:brightness-80"
              >
                Join Waitlist
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
