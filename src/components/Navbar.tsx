"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-30 w-full py-5 sm:py-7 px-4 sm:px-12 lg:px-20 flex items-center justify-between"
    >
      {/* Brand Logo */}
      <Link href="/" className="relative z-10 flex items-center gap-3 sm:gap-4 group flex-shrink-0">
        <div
          className="rounded-full bg-[#1E5BF9] flex items-center justify-center shadow-[0_6px_20px_rgba(30,91,249,0.4)] group-hover:scale-105 transition-all duration-300"
          style={{ width: "3.25rem", height: "3.25rem" }}
        >
          <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 font-heading leading-tight">
            Jyoti<span className="text-[#1E5BF9]">Eye</span>Care
          </span>
          <span className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-widest uppercase">
            Dr. Ruchita Sontakke
          </span>
        </div>
      </Link>

      {/* Pill Navigation Capsule */}
      <nav className="relative z-10 hidden md:flex items-center bg-white/30 backdrop-blur-xl px-3 py-2.5 rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-white/50">
        <Link
          href="/"
          className="bg-[#1E5BF9] text-white px-6 py-3 rounded-full font-bold text-sm shadow-[0_4px_14px_rgba(30,91,249,0.4)] transition-all hover:bg-[#1647C9]"
        >
          Home
        </Link>
        {[
          { href: "#services", label: "Services" },
          { href: "#oculoplasty", label: "Oculoplasty" },
          { href: "#doctor", label: "Doctor" },
          { href: "#about", label: "About Us" },
          { href: "#contact", label: "Contact" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-slate-700 hover:text-[#1E5BF9] px-5 py-3 rounded-full text-sm font-semibold transition-all hover:bg-white/60"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="relative z-10 flex items-center gap-3 flex-shrink-0">
        {/* OPD hours pill — desktop only */}
        <div className="hidden xl:flex items-center gap-2 bg-white/30 backdrop-blur-md border border-white/40 px-4 py-2 rounded-full">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <span className="text-[11px] font-semibold text-slate-700 whitespace-nowrap">6:30 – 9:30 PM OPD</span>
        </div>

        {/* Call button */}
        <a
          href="tel:+917058236990"
          title="Call: +91 70582 36990"
          className="flex items-center justify-center text-white bg-[#1E5BF9] hover:bg-[#1647C9] rounded-full shadow-[0_6px_20px_rgba(30,91,249,0.4)] transition-all hover:scale-105 active:scale-95"
          style={{ width: "3rem", height: "3rem" }}
        >
          <Phone className="w-5 h-5 fill-white" />
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-12 h-12 rounded-full bg-white/50 backdrop-blur-md shadow-sm flex items-center justify-center text-slate-800 border border-white/50 hover:bg-white/80 transition-all"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-4 right-4 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/60 flex flex-col gap-1 md:hidden z-50">
          {[
            { href: "/", label: "Home" },
            { href: "#services", label: "Services" },
            { href: "#oculoplasty", label: "Oculoplasty" },
            { href: "#doctor", label: "Doctor" },
            { href: "#about", label: "About Us" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-800 font-semibold text-lg py-3 px-4 rounded-2xl hover:bg-blue-50 hover:text-[#1E5BF9] transition-all border-b border-slate-100 last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3">
            <a
              href="tel:+917058236990"
              className="w-full py-4 bg-[#1E5BF9] text-white rounded-2xl text-center font-bold flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(30,91,249,0.35)]"
            >
              <Phone className="w-4 h-4 fill-white" />
              Call +91 70582 36990
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
