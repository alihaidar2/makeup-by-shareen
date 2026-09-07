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
            <p className="text-[#fdf8f5]/60 leading-relaxed mb-10">
              Ready to book or just have questions? Fill out the form and I&apos;ll
              get back to you within 24–48 hours. I&apos;d love to hear about your
              vision.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4 text-[#fdf8f5]/70">
                <div className="w-10 h-10 border border-[#c9a98c]/30 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#c9a98c] mb-0.5">Email</p>
                  <p className="text-sm">hello@makeupbyshareen.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#fdf8f5]/70">
                <div className="w-10 h-10 border border-[#c9a98c]/30 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#c9a98c] mb-0.5">Phone / WhatsApp</p>
                  <p className="text-sm">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#fdf8f5]/70">
                <div className="w-10 h-10 border border-[#c9a98c]/30 flex items-center justify-center shrink-0">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-[#c9a98c] mb-0.5">Location</p>
                  <p className="text-sm">Available throughout the Greater Area · Travel available</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-10 border-t border-[#fdf8f5]/10">
              <p className="text-xs tracking-widest uppercase text-[#c9a98c] mb-4">Follow Along</p>
              <div className="flex gap-4">
                {["instagram", "tiktok", "facebook"].map((platform) => (
                  <a
                    key={platform}
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 border border-[#fdf8f5]/20 flex items-center justify-center text-[#fdf8f5]/50 hover:border-[#c9a98c] hover:text-[#c9a98c] transition-colors capitalize text-xs tracking-wide"
                  >
                    {platform[0].toUpperCase()}
                  </a>
                ))}
              </div>
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
                  Thank you for reaching out! I&apos;ll get back to you within 24–48
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
