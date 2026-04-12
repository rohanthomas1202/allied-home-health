import { FaShieldAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { INSURANCE } from "../data/constants";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-gray-light">
      <div className="max-w-[980px] mx-auto">
        <SectionHeading title="About Allied Home Health Care" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[17px] text-black/80 leading-[1.47] tracking-[-0.374px] mb-8 text-left">
              We are a licensed and Medicare certified home health agency whose
              coordinated professional team strives to provide high quality health
              care services to all clients in the community. Keeping abreast of the
              ever-changing need of medical care for seniors, our experienced team
              and well trained staff continuously strive to operate with
              professional excellence.
            </p>

            <div className="flex gap-3 flex-wrap">
              {INSURANCE.map((ins) => (
                <span
                  key={ins}
                  className="inline-flex items-center gap-2 bg-apple-blue/10 text-apple-blue px-4 py-2 rounded-[980px] text-[14px] font-semibold tracking-[-0.224px]"
                >
                  <FaShieldAlt className="text-xs" />
                  We Accept {ins}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-8">
            <h3 className="text-[21px] font-bold text-near-black leading-[1.19] tracking-[0.231px] mb-4">
              Our Mission
            </h3>
            <p className="text-[17px] text-black/80 leading-[1.47] tracking-[-0.374px] text-left">
              The mission of Allied Home Health Care is to identify and meet the
              individual needs of every client we serve. We provide high quality
              comprehensive health care services to our patients, through a
              co-ordinated plan of care. We are committed to educating our patients
              to make informed choices and decisions about health services related
              to their defined unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
