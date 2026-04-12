import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { ADMISSION_CRITERIA, REFERRAL_SOURCES } from "../data/constants";

export default function Admissions() {
  return (
    <section id="admissions" className="py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 max-w-[980px] mx-auto">
        <SectionHeading title="Admissions & Referrals" dark={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[820px] mx-auto">
          <div className="bg-dark-surface-1 rounded-lg p-8">
            <h3 className="text-[21px] font-bold text-white leading-[1.19] tracking-[0.231px] mb-6">
              Admission Criteria
            </h3>
            <ol className="space-y-4">
              {ADMISSION_CRITERIA.map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="w-7 h-7 bg-apple-blue text-white rounded-full flex items-center justify-center text-[12px] font-semibold shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-[14px] text-white/60 leading-[1.43] tracking-[-0.224px] pt-0.5 text-left">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-dark-surface-1 rounded-lg p-8">
            <h3 className="text-[21px] font-bold text-white leading-[1.19] tracking-[0.231px] mb-6">
              Who Makes Referrals?
            </h3>
            <ul className="space-y-3">
              {REFERRAL_SOURCES.map((source) => (
                <li key={source} className="flex items-center gap-3">
                  <FaArrowRight className="text-bright-blue text-xs shrink-0" />
                  <span className="text-[14px] text-white/80 leading-[1.43] tracking-[-0.224px]">
                    {source}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-[14px] text-white/60 leading-[1.43] tracking-[-0.224px] mb-4">
            Contact us to discuss eligibility and start the referral process.
          </p>
          <Link
            to="contact"
            smooth={true}
            offset={-48}
            duration={500}
            className="inline-block px-[15px] py-[8px] bg-apple-blue text-white text-[17px] font-normal rounded-lg cursor-pointer hover:brightness-110 transition-all duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
