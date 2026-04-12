import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaFax, FaEnvelope, FaClock } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { ADDRESS, PHONE, FAX, EMAIL, HOURS, FORMSPREE_ID } from "../data/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setError("Network error. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      label: "Address",
      value: ADDRESS,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`,
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: PHONE,
      href: `tel:${PHONE}`,
    },
    {
      icon: FaFax,
      label: "Fax",
      value: FAX,
      href: null,
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: EMAIL,
      href: `mailto:${EMAIL}`,
    },
    {
      icon: FaClock,
      label: "Hours",
      value: `${HOURS.weekday}\n${HOURS.sunday}`,
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-gray-light">
      <div className="max-w-[980px] mx-auto">
        <SectionHeading
          title="Contact Us"
          subtitle="Reach out to us for any inquiries or to schedule a consultation"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[820px] mx-auto">
          <div className="space-y-3">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div className="w-9 h-9 bg-apple-blue/10 rounded-full flex items-center justify-center shrink-0">
                    <Icon className="text-apple-blue text-sm" />
                  </div>
                  <div>
                    <p className="text-[12px] text-black/48 font-semibold tracking-[-0.12px] leading-[1.33]">
                      {item.label}
                    </p>
                    <p className="text-[14px] text-near-black font-normal tracking-[-0.224px] leading-[1.43] whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Address" ? "_blank" : undefined}
                  rel={item.label === "Address" ? "noopener noreferrer" : undefined}
                  className="block hover:opacity-80 transition-opacity"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>

          <div className="bg-white rounded-lg p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 bg-apple-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-apple-blue text-2xl">&#10003;</span>
                </div>
                <h3 className="text-[21px] font-bold text-near-black leading-[1.19] tracking-[0.231px] mb-2">
                  Thank You!
                </h3>
                <p className="text-[14px] text-black/80 leading-[1.43] tracking-[-0.224px] mb-4">
                  We've received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-link-blue text-[14px] font-normal hover:underline cursor-pointer tracking-[-0.224px]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[12px] font-semibold text-near-black mb-1 tracking-[-0.12px]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-black/10 rounded-[11px] p-3 text-[17px] tracking-[-0.374px] focus:ring-2 focus:ring-apple-blue focus:outline-none transition bg-[#fafafc]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[12px] font-semibold text-near-black mb-1 tracking-[-0.12px]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-black/10 rounded-[11px] p-3 text-[17px] tracking-[-0.374px] focus:ring-2 focus:ring-apple-blue focus:outline-none transition bg-[#fafafc]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[12px] font-semibold text-near-black mb-1 tracking-[-0.12px]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-black/10 rounded-[11px] p-3 text-[17px] tracking-[-0.374px] focus:ring-2 focus:ring-apple-blue focus:outline-none transition bg-[#fafafc]"
                    placeholder="(xxx) xxx-xxxx"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[12px] font-semibold text-near-black mb-1 tracking-[-0.12px]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-black/10 rounded-[11px] p-3 text-[17px] tracking-[-0.374px] focus:ring-2 focus:ring-apple-blue focus:outline-none transition resize-none bg-[#fafafc]"
                    placeholder="How can we help you?"
                  />
                </div>
                {error && (
                  <p className="text-red-600 text-[14px] bg-red-50 p-3 rounded-lg">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-apple-blue text-white font-normal text-[17px] py-[8px] px-[15px] rounded-lg hover:brightness-110 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
