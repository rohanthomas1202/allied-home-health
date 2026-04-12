import { Link } from "react-scroll";
import { COMPANY_NAME, TAGLINE } from "../data/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center px-4 max-w-[980px] mx-auto">
        <h1 className="text-[56px] sm:text-[56px] font-semibold text-white leading-[1.07] tracking-[-0.28px] mb-2">
          {COMPANY_NAME}
        </h1>

        <p className="text-[21px] font-normal text-white/80 leading-[1.19] tracking-[0.231px] mb-2">
          {TAGLINE}
        </p>

        <p className="text-[17px] text-white/60 leading-[1.47] tracking-[-0.374px] max-w-xl mx-auto mb-10">
          Licensed & Medicare/Medicaid Certified Home Health Agency serving the Dallas-Fort Worth community.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            className="inline-block px-[15px] py-[8px] border border-white/40 text-bright-blue text-[17px] font-normal rounded-[980px] cursor-pointer hover:underline transition-all duration-200"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
