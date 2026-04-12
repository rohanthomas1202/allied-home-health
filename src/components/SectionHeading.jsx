export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-primary">{title}</h2>
      <div className="w-16 h-1 bg-gold mx-auto mt-3 mb-4 rounded-full"></div>
      {subtitle && <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
