"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Bell, User, MapPin, Menu, X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Doctors", href: "#doctor" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-b border-slate-100/80 py-3.5 px-4 sm:px-12 lg:px-20"
          : "bg-transparent py-5 sm:py-6 px-4 sm:px-12 lg:px-20"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between w-full">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1E5BF9] flex items-center justify-center shadow-[0_4px_16px_rgba(30,91,249,0.35)] group-hover:scale-105 group-hover:rotate-3 transition-transform">
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

        {/* Pill Navigation Capsule (Desktop & Tablet) */}
        <nav className="hidden md:flex items-center bg-white/95 backdrop-blur-md p-1.5 rounded-full shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-slate-100/90">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-slate-600 hover:text-[#1E5BF9] px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-blue-50/80 active:scale-95 group"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#1E5BF9] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <div className="hidden xl:flex flex-col items-end text-right leading-tight mr-1">
            <span className="text-[10px] font-bold tracking-widest text-[#1E5BF9] uppercase flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#1E5BF9] inline" /> Gopal Nagar, Nagpur
            </span>
            <span className="text-[10px] text-slate-500 font-medium">Mon - Sat: 6:30 PM - 9:30 PM</span>
          </div>

          {/* Quick Call Button (Visible on all screens) */}
          <a
            href="tel:+918830383320"
            title="Call Clinic Desk: +91 88303 83320"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1E5BF9] hover:bg-[#184FD8] flex items-center justify-center text-white transition-all shadow-[0_4px_12px_rgba(30,91,249,0.25)] hover:scale-105 active:scale-95"
          >
            <Phone className="w-4 h-4 fill-white" />
          </a>

          {/* OPD Notification Bell (Hidden on small mobile to prevent congestion) */}
          <a
            href="#opd-schedule"
            title="Evening OPD: 6:30 PM - 9:30 PM"
            className="hidden sm:flex w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 items-center justify-center transition-all relative hover:scale-105 active:scale-95"
          >
            <Bell className="w-4 h-4" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 absolute top-2 right-2 border-2 border-white" />
          </a>

          {/* Book / Profile Button (Hidden on small mobile) */}
          <a
            href="#book-appointment"
            title="Book Consultation"
            className="hidden sm:flex w-10 h-10 rounded-full bg-[#0A1128] hover:bg-[#15234D] items-center justify-center text-white transition-all shadow-md hover:scale-105 active:scale-95"
          >
            <User className="w-4 h-4" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-800 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Animated Presence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 flex flex-col gap-3 md:hidden z-50"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-800 hover:text-[#1E5BF9] font-semibold text-base py-2.5 px-3 rounded-xl hover:bg-blue-50/60 transition-colors border-b border-slate-50 last:border-b-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="tel:+918830383320"
                className="w-full py-3 bg-[#1E5BF9] hover:bg-[#184FD8] text-white rounded-2xl text-center font-semibold text-sm flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-4 h-4 fill-white" /> Call +91 88303 83320
              </a>
              <Link
                href="#book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-center font-semibold text-sm flex items-center justify-center gap-2"
              >
                Book Appointment (OPD)
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
