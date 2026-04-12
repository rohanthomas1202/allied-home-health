import { Link } from "react-scroll";
import { FaPhone, FaFax, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { COMPANY_NAME, TAGLINE, PHONE, FAX, EMAIL, ADDRESS } from "../data/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="dark-section min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-4 max-w-[980px] mx-auto">
        <h1 className="text-[32px] sm:text-[56px] font-semibold text-white leading-[1.07] tracking-[-0.28px] mb-2">
          {COMPANY_NAME}
        </h1>

        <p className="text-[21px] font-normal text-white/80 leading-[1.19] tracking-[0.231px] mb-2">
          {TAGLINE}
        </p>

        <p className="text-[17px] text-white/60 leading-[1.47] tracking-[-0.374px] max-w-xl mx-auto mb-10">
          Licensed & Medicare/Medicaid Certified Home Health Agency serving the Dallas-Fort Worth community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            to="contact"
            smooth={true}
            offset={-48}
            duration={500}
            className="inline-block px-[15px] py-[8px] bg-apple-blue text-white text-[17px] font-normal rounded-lg cursor-pointer hover:brightness-110 transition-all duration-200"
          >
            Contact Us
          </Link>
          <Link
            to="services"
            smooth={true}
            offset={-48}
            duration={500}
            className="inline-block px-[15px] py-[8px] bg-apple-blue text-white text-[17px] font-normal rounded-lg cursor-pointer hover:brightness-110 transition-all duration-200"
          >
            Our Services
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 max-w-xl mx-auto text-[17px] font-semibold text-white/90 tracking-[-0.374px]">
          <a href={`tel:${PHONE}`} className="flex items-center justify-center sm:justify-start gap-3 hover:text-white transition-colors">
            <FaPhone className="text-bright-blue text-sm" />
            <span>{PHONE}</span>
          </a>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <FaFax className="text-bright-blue text-sm" />
            <span>Fax: {FAX}</span>
          </div>
          <a href={`mailto:${EMAIL}`} className="flex items-center justify-center sm:justify-start gap-3 hover:text-white transition-colors sm:col-span-2">
            <FaEnvelope className="text-bright-blue text-sm" />
            <span>{EMAIL}</span>
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center sm:justify-start gap-3 hover:text-white transition-colors sm:col-span-2"
          >
            <FaMapMarkerAlt className="text-bright-blue text-sm shrink-0" />
            <span>{ADDRESS}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
