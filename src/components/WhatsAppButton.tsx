"use client";
import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40">
      <a
        href="https://wa.me/918830383320?text=Hello%20Dr.%20Ruchita,%20I%20would%20like%20to%20inquire%20about%20an%20eye%20consultation%20at%20Jyoti%20Eye%20Care."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Jyoti Eye Care"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:bg-[#20BD5A] transition-all transform hover:scale-110 active:scale-95"
      >
        {/* Soft Animated Ripple */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </aside>
  );
}
