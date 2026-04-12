import { Link } from "react-scroll";
import { FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { COMPANY_NAME, TAGLINE, ENTITY_NAME, ADDRESS, PHONE, FAX, EMAIL, NAV_LINKS } from "../data/constants";

export default function Footer() {
  return (
    <footer className="bg-near-black text-white">
      <div className="max-w-[980px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <span className="text-white text-lg font-semibold">+</span>
              <span className="text-white font-semibold text-[14px] tracking-[-0.224px]">
                {COMPANY_NAME}
              </span>
            </div>
            <p className="text-bright-blue text-[12px] font-normal tracking-[-0.12px] mb-1">
              {TAGLINE}
            </p>
            <p className="text-white/48 text-[12px] tracking-[-0.12px]">{ENTITY_NAME}</p>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold mb-4 tracking-[-0.224px]">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth={true}
                    offset={-48}
                    duration={500}
                    className="text-white/60 hover:text-white transition-colors cursor-pointer text-[12px] tracking-[-0.12px]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[14px] font-semibold mb-4 tracking-[-0.224px]">Contact Info</h4>
            <ul className="space-y-3 text-[12px] text-white/60 tracking-[-0.12px]">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-bright-blue mt-0.5 shrink-0 text-[10px]" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-bright-blue shrink-0 text-[10px]" />
                <a href={`tel:${PHONE}`} className="hover:text-white transition-colors">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaFax className="text-bright-blue shrink-0 text-[10px]" />
                <span>Fax: {FAX}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-bright-blue shrink-0 text-[10px]" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/48 text-[12px] tracking-[-0.12px]">
          &copy; {new Date().getFullYear()} {ENTITY_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
