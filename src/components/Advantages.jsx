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
    <section id="advantages" className="dark-section py-20 px-4 sm:px-6 relative">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-[980px] mx-auto">
        <SectionHeading
          title="Why Choose Allied?"
          subtitle="Advantages of Allied Home Health Care"
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[820px] mx-auto">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="bg-dark-surface-1 rounded-lg p-6 flex gap-4 items-start"
            >
              <FaCheckCircle className="text-bright-blue text-lg mt-1 shrink-0" />
              <div>
                <h3 className="text-[17px] font-semibold text-white leading-[1.24] tracking-[-0.374px] mb-1">
                  {item.title}
                </h3>
                <p className="text-[14px] text-white/60 leading-[1.43] tracking-[-0.224px] text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
