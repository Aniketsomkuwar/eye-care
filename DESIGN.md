# Jyoti Eye Care - Landing Page Design System & Specifications

This document outlines the visual language, design tokens, component architecture, and section-by-section specifications for the Jyoti Eye Care Next.js web application, engineered based on modern clinical aesthetics inspired by the SalvaMedic ecosystem.

---

## 1. Visual Language & Global Tokens

### 1.1 Color Palette
The color system emphasizes surgical precision, deep clinical authority, and welcoming warmth for patients and family members.

| Category | Token Name | Hex Code / Value | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | Electric Blue | `#1C68F3` | Primary CTA buttons, key metrics, active badges, progress bars |
| **Deep Brand** | Ophthalmic Navy | `#0047D4` | Hero wave backdrop, container gradients, emphasized cards |
| **Dark Brand** | Apex Clinical Navy | `#063FB9` | Section gradient anchors, dark accents |
| **Midnight Surface** | Midnight Navy | `#0B132B` / `#0A1128` | Footer container, dark mode surfaces |
| **Neutral Surface** | Pure White | `#FFFFFF` | Main page background, primary elevated cards, button icon wells |
| **Neutral Subtle** | Soft Blue Canvas | `#F6F9FE` / `#F8FAFC` | Section backdrops, pill tags, input field fills |
| **Divider** | Subtle Slate Border | `#E2E8F0` / `rgba(226, 232, 240, 0.8)` | Card borders, table dividers, form input strokes |
| **Text Primary** | Deep Slate | `#0F172A` | H1/H2 headlines, prominent titles, high-contrast labels |
| **Text Secondary** | Muted Slate | `#64748B` / `#475569` | Body copy, clinical descriptions, input placeholders |
| **Text Light** | Watermark Accent | `#D1DEFF` | Oversized watermark numerals, faint decorative typography |
| **Feedback** | Rating Amber | `#F59E0B` / `#FBBF24` | 5-star Google review stars, rating tags |
| **Status** | Clinical Emerald | `#10B981` | Real-time OPD operational status indicators |

---

### 1.2 Typography & Type Hierarchy
A dual-font pairing balancing geometric clinical authority with Swiss-style legibility:
- **Headings Font:** Plus Jakarta Sans (with `system-ui, -apple-system, sans-serif` fallback)
- **Body Font:** Inter (with `system-ui, -apple-system, sans-serif` fallback)

| Level | Size / Clamp | Weight | Line Height | Tracking | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display (H1)** | `clamp(2.75rem, 5vw + 1rem, 4.5rem)` | 800 (ExtraBold) | `1.1` | `-0.02em` | Primary Hero headline ("Innovation Clinic") |
| **Section Header (H2)** | `clamp(2.0rem, 3.5vw + 0.5rem, 3.0rem)` | 800 (ExtraBold) | `1.15` | `-0.02em` | Major section titles & value statements |
| **Card / Subhead (H3)** | `clamp(1.25rem, 2vw + 0.2rem, 1.65rem)` | 700 (Bold) | `1.25` | `-0.01em` | Service titles, doctor names, metric headers |
| **Body Large** | `1.05rem` - `1.125rem` | 400 / 500 | `1.6` | `normal` | Value statement paragraphs, lead copy |
| **Body Base** | `0.9375rem` (15px) | 400 / 500 | `1.55` | `normal` | Service descriptions, FAQ answers, reviews |
| **Micro-Label / Tag** | `0.75rem` - `0.8125rem` | 600 / 700 | `1.3` | `0.05em` | Metadata chips (`{ What you get }`, `{ FAQ }`), OPD badges |

---

### 1.3 Signature UI Patterns & Micro-Interactions

1. **Dual-Zone Action Buttons:**
   Pill-shaped CTA container (`rounded-full`) in electric blue with an offset pure white circular well housing a directional arrow (`→` or `Lucide ArrowUpRight`). The well and icon provide focal contrast and subtle hover translation.
2. **Inner Border Silhouette Cutout:**
   Dr. Ruchita Sontakke's portrait features an engineered **4px inner white stroke** (`dr-ruchita-inner-border.png`), positioned flush with the bottom boundary of the hero section for a clean 3D layering effect without harsh rectangular borders.
3. **Glossy 3D Lens Sphere:**
   Integrated into the "Innovation Clinic" title—a high-resolution glossy blue spherical lens representing ophthalmic precision optics.
4. **Interactive Hotspot Pins & Badges:**
   Pill tags with anchor dots and clinical metadata:
   - Hero tags: `• Reliability`, `• Experience`, `• Professional`
   - Advantage tags: `MAMC Pedigree`, `Certified Clinic`, `Modern Equipment`
5. **Atmospheric Watermark Typography:**
   Subtle outline numerals (`01`-`06`) and ghost typography (`Review`, `Patient`, `Answers`, `Questions`) placed in `#D1DEFF` at 20%-35% opacity to add depth to white spaces.
6. **Persistent Page Utilities:**
   - **Right-Edge Scroll Tracker (`ScrollProgress.tsx`):** Vertical indicator with numeric percentage tracking reading progress.
   - **Floating WhatsApp Booking Button (`WhatsAppButton.tsx`):** Fixed bottom-right green bubble with ping animation connecting directly to `+91 94221 12345`.

---

## 2. Section-by-Section Structural Breakdown

### Section 1: Floating Navbar & Split Hero Section
- **Components:** `src/components/Navbar.tsx`, `src/components/HeroSection.tsx`
- **Layout:** Full viewport height (`min-h-screen`) edge-to-edge split architecture.
- **Left Column (White Canvas):**
  - Clinic branding pill `{ Jyoti Eye Care }`
  - H1 headline featuring the 3D glossy lens sphere: *"Innovation Clinic with Advanced Surgical Precision"*
  - Subtext detailing Dr. Ruchita Sontakke's MAMC pedigree and surgical experience.
  - Floating 3D facility tour card previewing clinic environment & 100% digital diagnostics.
- **Right Column (Electric Blue Wave Stage):**
  - Curved organic electric blue backdrop (`rounded-t-[50px] md:rounded-[48px]`).
  - Dr. Ruchita Sontakke's cutout with 4px inner border aligned flush to the bottom.
  - 3 floating clinical credential badges (`Reliability`, `Experience`, `Professional`).
  - Overlay card: *"With Advanced Technologies"*, subtext, and patient review avatar clusters.
- **Floating Navbar:** Pill navigation bar with logo, section anchors (`Services`, `About`, `Doctors`, `Reviews`, `FAQ`), phone hotline pill, and OPD hours indicator.

---

### Section 2: Mission & Clinical Values
- **Component:** `src/components/MissionSection.tsx`
- **Layout:** Large white master card with soft blue tint backdrop (`#F6F9FE`).
- **Elements:**
  - Centered brand label: `—— JYOTI EYE CARE ——`
  - High-impact two-tone headline integrating visual pills:
    *"We combine surgical excellence 💡 with ethical care 👨‍⚕️👩‍⚕️ to protect your lifelong vision."*
  - Dual-zone action button: *"More about us →"*

---

### Section 3: Medical Services Asymmetric Grid
- **Component:** `src/components/ServicesSection.tsx`
- **Header:** Bracket badge `{ What you get }` with headline *"Comprehensive Eye Care Services"*.
- **Grid Layout:** 4-column asymmetric card collection:
  - **Cards 01-06:** White rounded cards (`rounded-[24px]`) featuring faint oversized watermark numbers (`01` to `06`), Lucide specialty icons, condition title, description, and dual links:
    1. *Micro-Incision Cataract Surgery (Phaco / MICS)*
    2. *Oculoplasty & Eyelid Reconstruction*
    3. *Glaucoma Screening & Management*
    4. *Diabetic Retinopathy & Medical Retina*
    5. *Pediatric Eye Care & Squint Evaluation*
    6. *Computer Vision & Dry Eye Therapy*
  - **Wide Clinical Consultation Card:** Deep blue card spanning full width with doctor portrait, consultation photography, core values, and immediate WhatsApp booking trigger.

---

### Section 4: Advantages & Statement Quote Banner
- **Component:** `src/components/AdvantagesSection.tsx`
- **Layout:** Inverted split container:
  - **Left Deep Blue Panel:** Doctor portrait cutout with floating credibility badges (`MAMC Pedigree`, `Certified Clinic`, `Modern Equipment`).
  - **Right White Metric Panel:** Bracket badge `{ ADVANTAGES }`, heading *"Why Patients Trust Jyoti Eye Care"*, and 2x2 high-contrast quantitative metrics:
    - `12+ Years` Surgical Experience
    - `6+ Domains` Specialized Treatments
    - `98%` Patient Satisfaction
    - `99%` Clinical Accuracy
- **Statement Quote Banner:** High-contrast full-width quote card:
  *"Medicine starts with science, but true healing begins with trust."*

---

### Section 5: Meet The Doctors / Clinical Team
- **Component:** `src/components/DoctorsSection.tsx`
- **Header:** Appointment CTA badge with heading *"Specialists Committed to Your Vision"*.
- **Cards Lineup:**
  - **Dr. Ruchita Sontakke:** Lead Cataract & Oculoplasty Surgeon (MBBS IGGMC, MS Ophthalmology MAMC New Delhi, DNB, Ex-SR MAMC).
  - **Dr. Arjun Sharma:** Senior Retinal Consultant & Vitreoretinal Specialist.
  - **Sneha Patil:** Senior Optometrist & Vision Therapy Lead.
- **Card Features:** Portrait photography, specialty pill tags, qualification chips, and direct consultation booking links.

---

### Section 6: Facility Showcase
- *Skipped per project instruction to prioritize surgical and patient consultation focus.*

---

### Section 7: Patient Reviews & Testimonials
- **Component:** `src/components/TestimonialsSection.tsx`
- **Backdrop:** Giant watermark text *"Review"* & *"Patient"* spanning the background.
- **Card Architecture:** 3D perspective elevated card (`rounded-[32px]`) featuring:
  - Google verified 5-star rating header and patient avatar.
  - Direct verified patient quote on Cataract recovery, Oculoplasty natural results, and dry eye relief.
  - Branding footer line `— Jyoti Eye Care —` with interactive next testimonial cycler (`→`).

---

### Section 8: Appointment Booking Card
- **Component:** `src/components/AppointmentSection.tsx`
- **Layout:** High-contrast split master card (`rounded-[40px]`):
  - **Left Form Canvas:** Bracket badge `{ Book your visit }`, headline *"Schedule Your Consultation"*, and input system:
    - Patient Full Name
    - WhatsApp Phone Number
    - Preferred Date
    - Service Dropdown (Cataract, Oculoplasty, Glaucoma, Comprehensive Exam)
    - Full-width Dual-Zone button: *"BOOK NOW VIA WHATSAPP →"*
  - **Right Blue Visual Block:** Doctor silhouette with operational hours reminder (Mon–Sat, 6:30 PM – 9:30 PM Evening OPD).

---

### Section 9: Questions & Answers (FAQ)
- **Component:** `src/components/FaqSection.tsx`
- **Backdrop:** Giant outline watermarks *"Answers"* and *"Questions"*.
- **Card Structure:** Elevated white card with bracket badge `{ FAQ }` and interactive cycler displaying verified clinical answers for:
  - Cataract surgery recovery timeline & painless topical anesthesia
  - Evening OPD timing policy (6:30 PM - 9:30 PM; surgical mornings)
  - Oculoplasty eyelid surgery recovery and cosmetic outcomes
  - Mediclaim cashless insurance & TPA assistance

---

### Section 10: Deep Midnight Navy Footer
- **Component:** `src/components/Footer.tsx`
- **Theme:** Deep Midnight Navy (`#0B132B`) with soft slate text.
- **Columns:**
  1. **Brand & Mission:** Jyoti Eye Care logo, Dr. Ruchita Sontakke credentials, and ethical practice statement.
  2. **Specialties:** Quick links to Cataract, Oculoplasty, Glaucoma, and Pediatric care.
  3. **Clinic Timings:** Strict operational hours display (Mon-Sat 6:30 PM - 9:30 PM, Sundays closed).
  4. **Contact & Location:** Nagpur clinic address, tap-to-call phone links, and WhatsApp quick chat.
- **Bottom Bar:** Copyright, ethical medical disclaimer, and custom clean vector social links.

---

## 3. Technology Stack & Technical Constraints

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript 5+ (Strict Mode)
- **Styling:** Tailwind CSS 3.4 with custom clamp typography and utility extensions
- **Icons:** Lucide React & inline custom vector graphics
- **Responsive Architecture:** Fluid viewport clamps (`clamp(...)`), mobile-first flex/grid layouts collapsing gracefully at `992px` and `640px`.
- **Performance & Asset Loading:** Next.js `<Image>` optimization with optimized WebP/PNG formats and zero layout shift.
