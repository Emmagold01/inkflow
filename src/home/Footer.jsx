import { Icon } from "@iconify/react";
import logo from "../assets/inkflow_logo2.png"

export default function Footer() {
  return (
    <footer className="border-fbord text-muted flex flex-col items-center justify-between gap-6 border-t px-6 py-8 text-[13px] md:flex-row md:gap-0 md:px-15">
      <div>
        <img src={logo} alt="logo" className="h-10" />
      </div>

      <div className="order-2 text-center md:order-0">
        © 2025 Inkflow. Built for African storytellers.
      </div>

      <div className="order-1 flex items-center gap-5 md:order-0">
        <a
          href="#"
          className="transition duration-300 hover:text-white"
          aria-label="Twitter / X"
        >
          <Icon icon="ri:twitter-x-fill" className="text-lg" />
        </a>
        <a
          href="#"
          className="transition duration-300 hover:text-white"
          aria-label="Instagram"
        >
          <Icon icon="ri:instagram-fill" className="text-lg" />
        </a>
      </div>
    </footer>
  );
}
