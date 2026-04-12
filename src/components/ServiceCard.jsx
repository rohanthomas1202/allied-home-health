export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <div className="bg-dark-surface-1 rounded-lg p-6">
      <div className="w-12 h-12 bg-apple-blue/15 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-bright-blue text-lg" />
      </div>
      <h3 className="text-[21px] font-bold text-white leading-[1.19] tracking-[0.231px] mb-2">
        {title}
      </h3>
      <p className="text-[14px] text-white/60 leading-[1.43] tracking-[-0.224px] text-left">
        {description}
      </p>
    </div>
  );
}
