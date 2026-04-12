export default function SectionHeading({ title, subtitle, dark = false }) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`text-[40px] font-semibold leading-[1.10] tracking-normal ${
          dark ? "text-white" : "text-near-black"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-[21px] font-normal leading-[1.19] tracking-[0.231px] ${
            dark ? "text-white/80" : "text-black/80"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
