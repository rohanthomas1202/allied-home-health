import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import services from "../data/services";

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 max-w-[980px] mx-auto">
        <SectionHeading
          title="Our Medical Services"
          subtitle="Comprehensive home health care tailored to your needs"
          dark={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
