import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { ADMISSION_CRITERIA, REFERRAL_SOURCES } from "../data/constants";

export default function Admissions() {
  return (
    <section id="admissions" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-light">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Admissions & Referrals" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-blue-primary mb-6">Admission Criteria</h3>
            <ol className="space-y-4">
              {ADMISSION_CRITERIA.map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <span className="w-8 h-8 bg-green-primary text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-gray-600 text-sm leading-relaxed pt-1">{item}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-bold text-blue-primary mb-6">Who Makes Referrals?</h3>
            <ul className="space-y-3">
              {REFERRAL_SOURCES.map((source) => (
                <li key={source} className="flex items-center gap-3">
                  <FaArrowRight className="text-green-primary text-sm shrink-0" />
                  <span className="text-gray-600">{source}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">
            Contact us to discuss eligibility and start the referral process.
          </p>
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="inline-block px-6 py-3 bg-green-primary text-white font-semibold rounded-full hover:bg-green-light cursor-pointer transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
