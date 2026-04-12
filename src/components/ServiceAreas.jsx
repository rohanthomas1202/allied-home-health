import { FaMapMarkerAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { SERVICE_AREAS } from "../data/constants";

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Areas We Serve"
          subtitle="Proudly serving the Dallas-Fort Worth Metroplex"
        />

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area}
              className="flex items-center gap-2 bg-white shadow-md rounded-full px-6 py-3 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <FaMapMarkerAlt className="text-green-primary" />
              <span className="font-medium text-gray-dark">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
