import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import services from "../data/services";

export default function Services() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-light">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Medical Services"
          subtitle="Comprehensive home health care tailored to your needs"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
