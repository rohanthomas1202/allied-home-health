import { FaCheckCircle } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const advantages = [
  {
    title: "Your Doctor Stays in Charge",
    description:
      "Your personal doctor will supervise your care. We work directly with your physician to follow their treatment plan.",
  },
  {
    title: "Consistent, Extended Care",
    description:
      "We can make multiple visits spread over weeks or months to make sure your recovery is progressing according to plan.",
  },
  {
    title: "No Extra Doctor Visits",
    description:
      "We do not require you to see a different doctor. Your existing physician remains your primary care provider.",
  },
  {
    title: "100% Medicare Coverage",
    description:
      "Medicare covers 100% for qualified patients. We handle the paperwork so you can focus on getting better.",
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-light">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Why Choose Allied?"
          subtitle="Advantages of Allied Home Health Care"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <FaCheckCircle className="text-green-primary text-xl mt-1 shrink-0" />
              <div>
                <h3 className="font-bold text-gray-dark mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
