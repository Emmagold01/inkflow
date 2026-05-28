import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="border-t border-fbord flex flex-col md:flex-row items-center justify-between text-muted text-[13px] py-8 px-6 md:px-15 gap-6 md:gap-0">
      <div className="from-coral to-amber font-playfair bg-linear-to-r bg-clip-text text-lg font-extrabold text-transparent">
        Inkflow
      </div>
      
      <div className="text-center order-2 md:order-0">
        © 2025 Inkflow. Built for African storytellers.
      </div>
      
      <div className="flex items-center gap-5 order-1 md:order-0">
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
