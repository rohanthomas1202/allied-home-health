import SectionHeading from "./SectionHeading";
import team from "../data/team";

export default function Team() {
  return (
    <section id="team" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Care Team"
          subtitle="A diverse team of professionals dedicated to your well-being"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.title}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-primary text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-dark mb-2">{member.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
