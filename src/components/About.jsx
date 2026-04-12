import { FaShieldAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { INSURANCE } from "../data/constants";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading title="About Allied Home Health Care" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
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
                className="inline-flex items-center gap-2 bg-green-primary/10 text-green-primary px-4 py-2 rounded-full font-semibold text-sm"
              >
                <FaShieldAlt />
                We Accept {ins}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-light rounded-2xl p-8 border-l-4 border-gold">
          <h3 className="text-xl font-bold text-blue-primary mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            The mission of Allied Home Health Care is to identify and meet the
            individual needs of every client we serve. We provide high quality
            comprehensive health care services to our patients, through a
            co-ordinated plan of care. We are committed to educating our patients
            to make informed choices and decisions about health services related
            to their defined unique needs.
          </p>
        </div>
      </div>
    </section>
  );
}
