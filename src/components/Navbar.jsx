import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { NAV_LINKS } from "../data/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-[20px] backdrop-saturate-[180%]">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-12">
          <div className="hidden md:flex items-center gap-6 mx-auto">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-48}
                duration={500}
                activeClass="!text-white"
                className="text-white/80 hover:text-white text-[13px] font-semibold cursor-pointer transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white text-lg p-2 ml-auto"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-48}
                duration={500}
                activeClass="!text-white"
                className="block px-4 py-3 text-[15px] font-semibold text-white/80 hover:text-white transition-colors cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
