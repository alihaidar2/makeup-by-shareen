"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  message: "",
};

const serviceOptions = [
  "Bridal Makeup",
  "Special Events",
  "Editorial & Film",
  "Makeup Lesson",
  "Group / Party",
  "On-Location",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static site — wire up to Formspree, EmailJS, or similar in production
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#2c1810] text-[#fdf8f5]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — info */}
          <div>
            <p className="font-[family-name:var(--font-lato)] text-xs tracking-[0.3em] uppercase text-[#c9a98c] mb-4">
              Get In Touch
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light leading-tight mb-6">
              Let&apos;s create something beautiful
            </h2>
            <p className="text-[#fdf8f5]/60 leading-relaxed mb-8">
              Ready to book or just have questions? Fill out the form and
              I&apos;ll get back to you within 24 hours. I&apos;d love to hear
              about your vision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://forms.gle/9RrEnKjmoKpLfsCL6"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#3b0c0d] text-[#fdfae3] text-sm tracking-widest uppercase text-center hover:bg-[#4a1010] transition-colors"
              >
                Book Now
              </a>
              <a
                href="mailto:shareenmakeupartistry@gmail.com"
                className="px-8 py-3.5 border border-[#c9a98c]/50 text-[#c9a98c] text-sm tracking-widest uppercase text-center hover:bg-[#c9a98c]/10 transition-colors"
              >
                Send an email
              </a>
            </div>

            <ul className="space-y-3 text-sm text-[#fdf8f5]/70">
              <li className="flex gap-3">
                <span aria-hidden="true">📧</span>
                <a
                  href="mailto:shareenmakeupartistry@gmail.com"
                  className="hover:text-[#c9a98c] transition-colors break-all"
                >
                  shareenmakeupartistry@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true">📞</span>
                <a
                  href="tel:+12264480802"
                  className="hover:text-[#c9a98c] transition-colors"
                >
                  226-448-0802
                </a>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true">📍</span>
                <span>
                  Milton · Oakville · Burlington · GTA · London ON · Travel
                  available
                </span>
              </li>
            </ul>
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 border border-[#c9a98c] flex items-center justify-center mb-6">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#c9a98c" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light mb-3">
                  Message Received
                </h3>
                <p className="text-[#fdf8f5]/60 text-sm leading-relaxed max-w-sm">
                  Thank you for reaching out! I&apos;ll get back to you within 24
                  hours to discuss your booking.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs tracking-widest uppercase text-[#c9a98c] underline underline-offset-4 hover:text-[#fdf8f5] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#c9a98c] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#fdf8f5]/15 text-[#fdf8f5] px-4 py-3 text-sm placeholder-[#fdf8f5]/30 focus:outline-none focus:border-[#c9a98c] transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#c9a98c] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#fdf8f5]/15 text-[#fdf8f5] px-4 py-3 text-sm placeholder-[#fdf8f5]/30 focus:outline-none focus:border-[#c9a98c] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#c9a98c] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#fdf8f5]/15 text-[#fdf8f5] px-4 py-3 text-sm placeholder-[#fdf8f5]/30 focus:outline-none focus:border-[#c9a98c] transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-[#c9a98c] mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#fdf8f5]/15 text-[#fdf8f5] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a98c] transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#c9a98c] mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-[#2c1810] border border-[#fdf8f5]/15 text-[#fdf8f5] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a98c] transition-colors"
                  >
                    <option value="">Select a service…</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-[#c9a98c] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-[#fdf8f5]/15 text-[#fdf8f5] px-4 py-3 text-sm placeholder-[#fdf8f5]/30 focus:outline-none focus:border-[#c9a98c] transition-colors resize-none"
                    placeholder="Tell me about your event, vision, or any questions…"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#3b0c0d] text-[#fdfae3] text-sm tracking-widest uppercase hover:bg-[#4a1010] transition-colors"
                >
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
