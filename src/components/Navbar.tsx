"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-30 pt-4 sm:pt-6 px-4 sm:px-12 lg:px-20 flex items-center justify-between w-full"
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1E5BF9] flex items-center justify-center shadow-[0_4px_16px_rgba(30,91,249,0.35)] group-hover:scale-105 transition-transform">
          <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-950 font-heading leading-tight">
            Jyoti<span className="text-[#1E5BF9]">Eye</span>Care
          </span>
          <span className="text-[9px] sm:text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
            Dr. Ruchita Sontakke
          </span>
        </div>
      </Link>

      {/* Pill Navigation Capsule */}
      <nav className="hidden md:flex items-center bg-white/95 backdrop-blur-md px-2 py-1.5 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-slate-100">
        <Link
          href="/"
          className="bg-[#1E5BF9] text-white px-5 py-2 rounded-full font-semibold text-sm shadow-sm transition-colors"
        >
          Home
        </Link>
        <Link
          href="#services"
          className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-slate-50"
        >
          Services
        </Link>
        <Link
          href="#doctor"
          className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-slate-50"
        >
          Doctors
        </Link>
        <Link
          href="#about"
          className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-slate-50"
        >
          About Us
        </Link>
        <Link
          href="#contact"
          className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-slate-50"
        >
          Contact
        </Link>
      </nav>

      {/* Right Action Icons (Over Blue Swoop on Desktop) */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
        <div className="hidden xl:flex flex-col items-end text-white text-right leading-tight mr-1">
          <span className="text-[10px] text-white/80 font-medium">Mon - Sat: 6:30 PM - 9:30 PM</span>
        </div>

        {/* Call button: visible on all screens */}
        <a
          href="tel:+918830383320"
          title="Call Clinic Desk: +91 88303 83320"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1E5BF9] sm:bg-white/15 hover:bg-[#1647C9] sm:hover:bg-white/25 border border-transparent sm:border-white/20 flex items-center justify-center text-white transition-all backdrop-blur-sm shadow-sm hover:scale-105 active:scale-95"
        >
          <Phone className="w-4 h-4 fill-white" />
        </a>


        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-800 border border-slate-100"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-6 right-6 bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 flex flex-col gap-4 md:hidden z-50">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-900 font-semibold text-lg py-2 border-b border-slate-100"
          >
            Home
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-600 font-medium text-lg py-2 border-b border-slate-100"
          >
            Services
          </Link>
          <Link
            href="#doctor"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-600 font-medium text-lg py-2 border-b border-slate-100"
          >
            Doctors
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-600 font-medium text-lg py-2 border-b border-slate-100"
          >
            About Us
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-slate-600 font-medium text-lg py-2 border-b border-slate-100"
          >
            Contact
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:+918830383320"
              className="w-full py-3 bg-[#1E5BF9] text-white rounded-xl text-center font-semibold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-white" /> Call +91 88303 83320
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
