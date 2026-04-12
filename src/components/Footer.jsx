import { Link } from "react-scroll";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { COMPANY_NAME, TAGLINE, ENTITY_NAME, ADDRESS, PHONE, EMAIL, NAV_LINKS } from "../data/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-light text-2xl font-bold">+</span>
              <span className="text-white font-bold text-lg">{COMPANY_NAME}</span>
            </div>
            <p className="text-gold text-sm font-medium mb-2">{TAGLINE}</p>
            <p className="text-gray-400 text-sm">{ENTITY_NAME}</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-gray-400 hover:text-green-light transition-colors cursor-pointer text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-green-light mt-1 shrink-0" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-green-light shrink-0" />
                <a href={`tel:${PHONE}`} className="hover:text-green-light transition-colors">{PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-green-light shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-green-light transition-colors">{EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {ENTITY_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
