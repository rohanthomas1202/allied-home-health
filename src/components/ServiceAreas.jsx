import { FaMapMarkerAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { SERVICE_AREAS } from "../data/constants";

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-20 px-4 sm:px-6 bg-gray-light">
      <div className="max-w-[980px] mx-auto">
        <SectionHeading
          title="Areas We Serve"
          subtitle="Proudly serving the Dallas-Fort Worth Metroplex"
        />

        <div className="flex flex-wrap justify-center gap-4 max-w-[680px] mx-auto">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 bg-white rounded-[980px] px-5 py-2.5"
            >
              <FaMapMarkerAlt className="text-apple-blue text-xs" />
              <span className="text-[14px] font-semibold text-near-black tracking-[-0.224px]">
                {area}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
