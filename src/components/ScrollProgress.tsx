"use client";
import React, { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scroll = Math.round((totalScroll / windowHeight) * 100);
        setScrollProgress(scroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2 pointer-events-none">
      <div className="w-1 h-36 bg-slate-200/80 rounded-full relative overflow-hidden backdrop-blur-sm">
        <div
          className="w-full bg-[#1E5BF9] rounded-full transition-all duration-150"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
      <span className="text-[10px] font-bold text-slate-500 bg-white/90 backdrop-blur-md px-1.5 py-0.5 rounded-full shadow-sm border border-slate-200/70 tabular-nums">
        {scrollProgress}%
      </span>
    </div>
  );
}
