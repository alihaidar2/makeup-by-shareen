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

            <div className="mt-10 pt-10 border-t border-[#fdf8f5]/10">
              <p className="text-xs tracking-widest uppercase text-[#c9a98c] mb-4">
                Follow Along
              </p>
              <a
                href="https://www.instagram.com/shareenartistry/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#fdf8f5]/70 hover:text-[#c9a98c] transition-colors"
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
            </div>
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
