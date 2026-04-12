import SectionHeading from "./SectionHeading";
import team from "../data/team";

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 bg-gray-light">
      <div className="max-w-[980px] mx-auto">
        <SectionHeading
          title="Our Care Team"
          subtitle="A diverse team of professionals dedicated to your well-being"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {team.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.title}
                className="bg-white rounded-lg p-6"
              >
                <div className="w-12 h-12 bg-apple-blue/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="text-apple-blue text-lg" />
                </div>
                <h3 className="text-[21px] font-bold text-near-black leading-[1.19] tracking-[0.231px] mb-2">
                  {member.title}
                </h3>
                <p className="text-[14px] text-black/80 leading-[1.43] tracking-[-0.224px] text-left">
                  {member.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
