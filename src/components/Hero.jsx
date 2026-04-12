import { Link } from "react-scroll";
import { COMPANY_NAME, TAGLINE } from "../data/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-primary to-green-primary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-block mb-6 px-4 py-2 bg-white/15 rounded-full backdrop-blur-sm">
          <span className="text-white text-sm font-medium tracking-wide">
            Licensed & Medicare/Medicaid Certified
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
          {COMPANY_NAME}
        </h1>

        <p className="text-xl sm:text-2xl text-gold-light font-medium tracking-wider mb-6">
          {TAGLINE}
        </p>

        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Providing compassionate, high-quality home health care services to the
          Dallas-Fort Worth community. Your health, our priority.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="px-8 py-4 bg-gold hover:bg-gold-light text-gray-dark font-bold rounded-full cursor-pointer transition-all duration-300 hover:shadow-lg text-lg"
          >
            Contact Us Today
          </Link>
          <Link
            to="services"
            smooth={true}
            offset={-80}
            duration={500}
            className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-primary font-bold rounded-full cursor-pointer transition-all duration-300 text-lg"
          >
            Our Services
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
