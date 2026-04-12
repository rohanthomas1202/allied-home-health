export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border-b-4 border-gold hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      <div className="w-14 h-14 bg-green-light/15 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon className="text-green-light text-2xl" />
      </div>
      <h3 className="text-lg font-bold text-blue-primary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
