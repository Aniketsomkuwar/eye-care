import React from "react";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import DoctorsSection from "@/components/DoctorsSection";
import ClinicalShowcaseSection from "@/components/ClinicalShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AppointmentSection from "@/components/AppointmentSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col justify-start">
      {/* Dynamic Scroll Progress Bar (Right Margin) */}
      <ScrollProgress />

      {/* Section 1: Floating Navbar & Split Hero Section */}
      <HeroSection />

      {/* Section 2: Mission & Values Section */}
      <MissionSection />

      {/* Section 3: Medical Services Grid */}
      <ServicesSection />

      {/* Section 4: Advantages & Statistics */}
      <AdvantagesSection />

      {/* Section 5: Meet The Doctors / Clinical Team */}
      <DoctorsSection />

      {/* Section 6: Real Clinical Evidence & Surgery Showcase */}
      <ClinicalShowcaseSection />

      {/* Section 7: Patient Reviews & Testimonials */}
      <TestimonialsSection />

      {/* Section 8: Appointment Booking Card */}
      <AppointmentSection />

      {/* Section 9: Questions and Answers (FAQ) */}
      <FaqSection />

      {/* Section 10: Deep Midnight Navy Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </main>
  );
}
