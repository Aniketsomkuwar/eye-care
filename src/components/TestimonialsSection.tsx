"use client";
import React, { useState } from "react";
import { Star, ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GoogleReviewItem {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: number;
  quote: string;
  avatarUrl: string;
  ownerResponse?: string;
  googleReviewUrl: string;
}

const googleReviews: GoogleReviewItem[] = [
  {
    id: "g1",
    name: "Prajjwal Soni",
    location: "Google Maps Review",
    date: "1 month ago",
    rating: 5,
    quote:
      "Excellent service and very good treatment. The doctor is polite and explains everything clearly. Highly recommended.",
    avatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjWp6L-9UfiOXoin8oYXZGIrwUl95QNMK004VK5EoM1DyKV13u8=w100-h100-p-rp-mo-br40",
    ownerResponse: "Thanks",
    googleReviewUrl:
      "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25wUGNqaE5ORFZxZUhGVGF6SlliMVEyTlZKV1IzYxAB!2m1!1s0x0:0xab3ae9e816281132!3m1!1s2@1:CAIQACodChtycF9oOnpPcjhNNDVqeHFTazJYb1Q2NVJWR3c%7C%7C?hl=en",
  },
  {
    id: "g2",
    name: "Anju Phogat",
    location: "Google Maps Review",
    date: "2 months ago",
    rating: 5,
    quote:
      "Dr. Ruchita is an exceptionally skilled and compassionate ophthalmologist. She communicates with clarity and takes the time to explain every condition and treatment option in detail, making patients feel informed and comfortable. Her professionalism and approachable nature truly stand out. I highly recommend visiting her for expert ophthalmology consultation and treatment.",
    avatarUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocIJJbfmwWpO3XqZF0fx7nY0qYiwPpCF_KVO9syunN4p6gNKxw=w100-h100-p-rp-mo-br40",
    ownerResponse: "☺️☺️",
    googleReviewUrl:
      "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2toSWNFUlFNRTlGTVhwc1ZtNVhUelJUUVY5bGEwRRAB!2m1!1s0x0:0xab3ae9e816281132!3m1!1s2@1:CAIQACodChtycF9oOkhIcERQME9FMXpsVm5XTzRTQV9la0E%7C%7C?hl=en",
  },
  {
    id: "g3",
    name: "Chetna Bisen",
    location: "Google Maps Review",
    date: "2 months ago",
    rating: 5,
    quote: "One of the best dr she is, so kind and good human being",
    avatarUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocJMLzXshcuArDSWYHUxXOEZ9AXmDsZyd2G_gVm7HfXZJT0VGmA=w100-h100-p-rp-mo-br40",
    ownerResponse: "Thank you",
    googleReviewUrl:
      "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2tKblIzVlNkRXg0VlVsSlgyVjVhM0Z6UjFsamMzYxAB!2m1!1s0x0:0xab3ae9e816281132!3m1!1s2@1:CAIQACodChtycF9oOkJnR3VSdEx4VUlJX2V5a3FzR1ljc3c%7C%7C?hl=en",
  },
  {
    id: "g4",
    name: "Sneha Wankhede",
    location: "Google Maps Review",
    date: "4 months ago",
    rating: 4,
    quote:
      "She is Excellent Eye Doctor . compassionate and friendly.She is very respectful and explains everything .",
    avatarUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocL19B2ePMNodKUboe9_fFrk1oHtjSiLmEyL8HNoVrWPUHpj6A=w100-h100-p-rp-mo-br40",
    ownerResponse: "Thank you",
    googleReviewUrl:
      "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2s5S09IcENOWEp5WkhOUU5FaEZibnB1YkVOQ2FHYxAB!2m1!1s0x0:0xab3ae9e816281132!3m1!1s2@1:CAIQACodChtycF9oOk9KOHpCNXJyZHNQNEhFbnpubENCaGc%7C%7C?hl=en",
  },
  {
    id: "g5",
    name: "Madhuri Rukhmode",
    location: "Google Maps Review",
    date: "4 months ago",
    rating: 4,
    quote:
      "She is good knowledgeable  ophthalmology doctor and good all over the communication , patience and more confidence....",
    avatarUrl:
      "https://lh3.googleusercontent.com/a-/ALV-UjVvZm4iU0w-Of41yz7D11w23shPi0OvIzlfULCxA0WiQwHM0WG7=w100-h100-p-rp-mo-br40",
    ownerResponse: "Thank you for your feedback",
    googleReviewUrl:
      "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT210V09EWkdURW8zVlhadllURTJRbWxJVEhSalQwRRAB!2m1!1s0x0:0xab3ae9e816281132!3m1!1s2@1:CAIQACodChtycF9oOmtWODZGTEo3VXZvYTE2QmlITHRjT0E%7C%7C?hl=en",
  },
  {
    id: "g6",
    name: "Kalyani Rushesary",
    location: "Google Maps Review",
    date: "4 months ago",
    rating: 5,
    quote:
      "Very polite and friendly doctor, quick service, good ambience and staff also good and kind.",
    avatarUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocJL50jB92icc35rih2g2jFx9A9V2kMq8cmVo9SBGngNkxPrCw=w100-h100-p-rp-mo-br40",
    googleReviewUrl:
      "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT25ZeFJXMU9aMGxETjI1MGIzUmhRMWRSWnkxeFFsRRAB!2m1!1s0x0:0xab3ae9e816281132!3m1!1s2@1:CAIQACodChtycF9oOnYxRW1OZ0lDN250b3RhQ1dRZy1xQlE%7C%7C?hl=en",
  },
  {
    id: "g7",
    name: "Rimsha Durge",
    location: "Google Maps Review",
    date: "4 months ago",
    rating: 5,
    quote: "“Excellent eye care service with supportive staff and experienced doctors.”",
    avatarUrl:
      "https://lh3.googleusercontent.com/a/ACg8ocLqq8JTzjTZpOw3RAaTPhn65-3zOrfFSOWxZuWkoX9N7JZkCA=w100-h100-p-rp-mo-br40",
    googleReviewUrl:
      "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT21oUWVFZ3RTVEozVWxWNE9FRnhOaTFJYm01ZlYyYxAB!2m1!1s0x0:0xab3ae9e816281132!3m1!1s2@1:CAIQACodChtycF9oOmhQeEgtSTJ3UlV4OEFxNi1Ibm5fV2c%7C%7C?hl=en",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = googleReviews[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % googleReviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + googleReviews.length) % googleReviews.length);
  };

  return (
    <section id="patient-reviews" className="relative px-4 sm:px-8 lg:px-12 py-8 sm:py-24 w-full max-w-[1600px] mx-auto overflow-hidden">

      {/* Header Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 flex flex-col sm:flex-row items-center sm:items-end justify-between text-center sm:text-left gap-4 sm:gap-6 mb-6 sm:mb-14"
      >
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-xs uppercase font-extrabold tracking-widest text-[#1E5BF9] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block mb-3 mx-auto sm:mx-0">
            Google Maps Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-950 font-heading tracking-tight leading-tight">
            What our
            <br />
            patients say
          </h2>
        </div>

        {/* Google Rating Overview Badge */}
        <div className="flex items-center gap-3.5 bg-white px-5 py-3 rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_-5px_rgba(30,91,249,0.06)] mx-auto sm:mx-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-7 h-7 flex-shrink-0">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
          </svg>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm sm:text-base text-slate-900">4.7</span>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJ2_NmxLe_1DsRMhEoFujpOqs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-blue-600 hover:text-blue-700 hover:underline font-semibold block"
            >
              7 Verified Google Reviews
            </a>
          </div>
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJ2_NmxLe_1DsRMhEoFujpOqs"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-xs font-semibold px-3.5 py-2 bg-slate-950 hover:bg-slate-800 text-white rounded-xl transition-all shadow-xs"
          >
            Review Us
          </a>
        </div>
      </motion.div>

      {/* Carousel Area with Vertically Centered Watermark Behind It */}
      <div className="relative w-full">

        {/* Giant Watermark Text — Exactly vertically centered to the carousel card */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none select-none z-0 px-2 sm:px-6 lg:px-10 overflow-hidden">
          <span className="text-[4rem] sm:text-8xl lg:text-[12rem] font-extrabold font-heading text-blue-200/90 tracking-tighter opacity-80 leading-none">
            Review
          </span>
          <span className="text-[4rem] sm:text-8xl lg:text-[12rem] font-extrabold font-heading text-blue-200/90 tracking-tighter opacity-80 leading-none pr-4 sm:pr-8">
            Patient
          </span>
        </div>

        {/* 3D Floating Review Card Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-2xl mx-auto h-[460px] sm:h-[410px]"
        >
          {/* Layered Card Drop Shadow */}
          <div className="absolute -inset-2 sm:-inset-3 bg-[#1E5BF9]/12 rounded-[36px] sm:rounded-[44px] -rotate-1 transform scale-98 pointer-events-none blur-[2px]" />

          {/* Main Card — Translucent frosted glass so the watermark shows through softly */}
          <div className="relative bg-white/80 sm:bg-white/75 backdrop-blur-xl rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 border border-white/90 shadow-[0_25px_60px_-15px_rgba(30,91,249,0.14)] flex flex-col justify-between h-[460px] sm:h-[410px]">
          
          {/* Animated Review Body Container */}
          <div className="flex-1 relative overflow-hidden pb-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full flex flex-col justify-start overflow-y-auto pr-1"
                style={{ scrollbarWidth: "none" }}
              >
                {/* Card Top: Patient Info & Rating */}
                <div className="flex items-start justify-between gap-3 mb-4 flex-shrink-0">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={current.avatarUrl}
                      alt={current.name}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border border-slate-200/80 flex-shrink-0 shadow-xs"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading leading-tight truncate">
                        {current.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-1.5 mt-1">
                        <div className="flex items-center flex-shrink-0">
                          {[...Array(current.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {current.date}
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E5BF9] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-3.5 h-3.5 flex-shrink-0">
                      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                    </svg>
                    <span>Google Review</span>
                  </span>
                </div>

                {/* Review Quote */}
                <blockquote className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-3">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Owner Response if present */}
                {current.ownerResponse && (
                  <div className="bg-slate-50 border-l-2 border-[#1E5BF9] rounded-r-xl p-3 text-xs sm:text-sm text-slate-600 mt-auto">
                    <p className="font-semibold text-slate-900 mb-0.5">Response from the owner</p>
                    <p className="text-slate-600">{current.ownerResponse}</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stationary Card Bottom Bar: Controls are cleanly separated, never animate or get clipped */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-2 flex-wrap flex-shrink-0">
            <a
              href={current.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-slate-500 hover:text-[#1E5BF9] uppercase tracking-wider flex items-center gap-1 transition-colors"
            >
              <span>View on Google</span>
              <ExternalLink className="w-3 h-3 flex-shrink-0" />
            </a>

            {/* Dots Indicator */}
            <div className="flex items-center gap-1.5">
              {googleReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-6 bg-[#1E5BF9]"
                      : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Prev & Next Controls with Unclipped Shadows & Paddings */}
            <div className="flex items-center gap-2.5 py-1">
              <button
                onClick={handlePrev}
                aria-label="Previous Review"
                className="w-10 h-10 rounded-full border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Review"
                className="w-10 h-10 rounded-full bg-[#1E5BF9] hover:bg-[#1647C9] text-white flex items-center justify-center transition-all shadow-[0_4px_14px_rgba(30,91,249,0.35)] hover:scale-105 active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </motion.div>
    </div>

    </section>
  );
}
