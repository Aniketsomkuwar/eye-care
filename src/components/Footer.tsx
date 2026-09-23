"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Eye, MapPin, Phone, Mail, ArrowRight, Check, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className="w-full bg-[#070E20] text-white rounded-t-[36px] sm:rounded-t-[48px] pt-16 sm:pt-20 pb-10 px-6 sm:px-12 lg:px-20 mt-16 sm:mt-24 relative z-20"
    >
      
      {/* 4 Columns Top Grid (Matches haidigi.com) */}
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-16 border-b border-white/10">
        
        {/* Column 1: Brand & Bio (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 group mb-4">
              <div className="w-10 h-10 rounded-full bg-[#1E5BF9] flex items-center justify-center shadow-[0_4px_16px_rgba(30,91,249,0.35)]">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white font-heading">
                  Jyoti<span className="text-[#1E5BF9]">Eye</span>Care
                </span>
                <span className="text-[10px] font-semibold text-slate-400 tracking-wider uppercase">
                  Dr. Ruchita Sontakke
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal max-w-sm mt-4">
              Accessible, ethical, and evidence-based ophthalmic care in Gopal Nagar, Nagpur. Specializing in micro-incision cataract surgery and oculoplasty led by Dr. Ruchita Sontakke (Ex-SR MAMC New Delhi).
            </p>
          </div>

          {/* Verified Clinic Channels */}
          <div className="flex items-center gap-3 mt-8">
            <a
              href="https://instagram.com/eyecarewith_rs"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @eyecarewith_rs"
              title="Instagram @eyecarewith_rs"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/918830383320?text=Hello%20Dr.%20Ruchita,%20I%20would%20like%20to%20inquire%20about%20an%20eye%20consultation%20at%20Jyoti%20Eye%20Care."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              title="WhatsApp: +91 88303 83320"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
            </a>
            <a
              href="https://maps.google.com/?q=Jyoti+Eye+Care+Gopal+Nagar+Nagpur"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find clinic on Google Maps"
              title="Google Maps Clinic Direction"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
            </a>
            <a
              href="tel:+918830383320"
              aria-label="Call clinic desk"
              title="Call Clinic: +91 88303 83320"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-[#1E5BF9]" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation (2 cols) */}
        <div className="lg:col-span-2">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">
            Navigation
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-white transition-colors">
                About Doctor
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition-colors">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="#doctor" className="hover:text-white transition-colors">
                Our Doctors
              </Link>
            </li>
            <li>
              <Link href="#patient-reviews" className="hover:text-white transition-colors">
                Patient Reviews
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-white transition-colors">
                Clinic FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Services (3 cols) */}
        <div className="lg:col-span-3">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">
            Specialties
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
            <li>
              <Link href="#services" className="hover:text-white transition-colors">
                Cataract Surgery (Phaco &amp; MSICS)
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition-colors">
                Oculoplasty &amp; Eyelid Surgery
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition-colors">
                Comprehensive Eye Examinations
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition-colors">
                Dry Eye &amp; Computer Vision Syndrome
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition-colors">
                Glaucoma &amp; Diabetic Screening
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-white transition-colors">
                Pediatric Vision Screening
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact & Newsletter (3 cols) */}
        <div className="lg:col-span-3 flex flex-col justify-between">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-5">
              Contact &amp; OPD
            </h3>
            
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1E5BF9] flex-shrink-0 mt-0.5" />
                <span>4383, Gopal Nagar, Near Pratap Nagar Ring Road, Nagpur 440022</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1E5BF9] flex-shrink-0" />
                <a href="tel:+918830383320" className="hover:text-white transition-colors">
                  +91 88303 83320
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1E5BF9] flex-shrink-0" />
                <a href="mailto:ruchitasontakke451@gmail.com" className="hover:text-white transition-colors">
                  ruchitasontakke451@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Stay Updated / Quick Consult Input */}
          <div className="mt-8">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
              Stay Updated
            </span>
            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 hover:bg-white/10 focus:bg-white/10 border border-white/15 focus:border-[#1E5BF9] text-xs text-white placeholder-slate-500 rounded-full pl-4 pr-12 py-3 outline-none transition-all"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="w-8 h-8 rounded-full bg-[#1E5BF9] hover:bg-[#1647C9] text-white flex items-center justify-center absolute right-1.5 top-1/2 -translate-y-1/2 transition-transform hover:scale-105 active:scale-95"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Bottom Bar: Copyright & Privacy */}
      <div className="max-w-[1600px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © 2026 Jyoti Eye Care. All rights reserved. Clinical Director: Dr. Ruchita Sontakke.
        </div>

        <div className="flex items-center gap-6">
          <Link href="#about" className="hover:text-slate-300 transition-colors">
            Clinical Standards
          </Link>
          <Link href="#services" className="hover:text-slate-300 transition-colors">
            Patient Care Ethics
          </Link>
          <Link href="#book-appointment" className="hover:text-slate-300 transition-colors">
            OPD Timings
          </Link>
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-medium text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E5BF9]" />
            JYOTI EYE CARE CLINIC
          </span>
        </div>
      </div>

    </motion.footer>
  );
}
