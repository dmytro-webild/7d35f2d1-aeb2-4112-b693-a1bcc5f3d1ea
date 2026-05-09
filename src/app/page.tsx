"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Award, Briefcase, Camera, Instagram, Layers, Linkedin, PenTool, Target, Twitter, Type } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="largeSizeMediumTitles"
        background="none"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "hero" },
        { name: "About Us", id: "about" },
        { name: "Portfolio", id: "portfolio" },
        { name: "Services", id: "services" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="Posters By Sid"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{ variant: "gradient-bars" }}
      title="STRATEGY We Have"
      description="Graphic Designing & Marketing expert services tailored for your vision. View our work and transform your brand identity."
      buttons={[{ text: "View Our Work", href: "#portfolio" }]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-chatting-desk_23-2149345216.jpg?_wi=1", imageAlt: "Graphic Design Strategy Concept 1" },
        { imageSrc: "http://img.b2bpic.net/free-photo/close-up-abstract-egg-yolk-oil_23-2148231619.jpg?_wi=1", imageAlt: "Graphic Design Strategy Concept 2" },
        { imageSrc: "http://img.b2bpic.net/free-photo/young-coworkers-discussing-work-subject_23-2147668781.jpg", imageAlt: "Graphic Design Strategy Concept 3" },
        { imageSrc: "http://img.b2bpic.net/free-photo/still-life-graphic-design-office_23-2151345458.jpg", imageAlt: "Graphic Design Strategy Concept 4" },
        { imageSrc: "http://img.b2bpic.net/free-photo/minimalist-desk-setup-with-lamp-notebook-stationery_23-2151968869.jpg", imageAlt: "Graphic Design Strategy Concept 5" },
        { imageSrc: "http://img.b2bpic.net/free-photo/interconnected-screens-collage-showing-modern-social-media-feed-clips_482257-129691.jpg", imageAlt: "Graphic Design Strategy Concept 6" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="About Us"
      title="Posters By Sid"
      description="We are a passionate team of Graphic Designers, Copywriters, Creative Directors, and Client Managers dedicated to building your brand."
      subdescription="Our holistic approach ensures that every creative strategy we deploy aligns perfectly with your marketing goals."
      icon={Award}
      imageSrc="http://img.b2bpic.net/free-photo/colleagues-smiling-speaking-discussing-drawings-new-ideas-office_176420-1686.jpg"
      mediaAnimation="slide-up"
      imageAlt="portrait professional graphic designer"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Graphic Design",          description: "High-impact visual designs for print and digital media.",          items: [{ icon: PenTool, text: "Brand Identity" }, { icon: Layers, text: "UI/UX Design" }],
          reverse: false,
          media: { imageSrc: "http://img.b2bpic.net/free-photo/female-executive-reading-sticky-notes_1170-1928.jpg", imageAlt: "Female executive reading sticky notes" }
        },
        {
          title: "Content Strategy",          description: "Persuasive copywriting and content marketing solutions.",          items: [{ icon: Type, text: "Copywriting" }, { icon: Target, text: "SEO Copy" }],
          reverse: true,
          media: { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-people-chatting-desk_23-2149345216.jpg?_wi=2", imageAlt: "Female executive reading sticky notes" }
        },
        {
          title: "Creative Direction",          description: "Visionary guidance to unify your brand aesthetics.",          items: [{ icon: Camera, text: "Art Direction" }, { icon: Briefcase, text: "Brand Management" }],
          reverse: false,
          media: { imageSrc: "http://img.b2bpic.net/free-photo/close-up-abstract-egg-yolk-oil_23-2148231619.jpg?_wi=2", imageAlt: "Female executive reading sticky notes" }
        },
      ]}
      title="Our Expert Services"
      description="Specialized creative talent pool to bring your ideas to life."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Brand Identity Redesign", price: "Featured", imageSrc: "http://img.b2bpic.net/free-photo/3d-glasses-camera-arrangement_23-2149558789.jpg", imageAlt: "graphic design poster concept 1" },
        { id: "p2", name: "Digital Marketing Campaign", price: "Featured", imageSrc: "http://img.b2bpic.net/free-psd/design-event-print-template_23-2149015965.jpg", imageAlt: "graphic design poster concept 2" },
        { id: "p3", name: "Print Material Suite", price: "Featured", imageSrc: "http://img.b2bpic.net/free-photo/creative-postcard-set-blue-wall_53876-26209.jpg", imageAlt: "graphic design poster concept 3" },
        { id: "p4", name: "UI/UX Concept App", price: "Featured", imageSrc: "http://img.b2bpic.net/free-photo/mirrors-blue-table-isolated-orange_171337-13162.jpg", imageAlt: "graphic design poster concept 4" },
        { id: "p5", name: "Strategic Brand Launch", price: "Featured", imageSrc: "http://img.b2bpic.net/free-photo/improve-ideas-inspiration-creative-concept_53876-138650.jpg", imageAlt: "graphic design poster concept 5" },
        { id: "p6", name: "Creative Direction Project", price: "Featured", imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-working-photography-studio_23-2150254651.jpg", imageAlt: "graphic design poster concept 6" },
      ]}
      title="Portfolio Highlights"
      description="See some of our recent design and marketing projects."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", title: "Exceptional", quote: "The creative direction provided was exactly what we needed to launch our brand.", name: "Sarah Miller", role: "CEO", imageSrc: "http://img.b2bpic.net/free-photo/successful-young-man-stylish-hat-relaxing-alone-cozy-cafeteria-lunch-break-looking-with-happy-expression_273609-1935.jpg" },
        { id: "2", title: "Outstanding", quote: "Incredible communication and beautiful design work. Highly recommend.", name: "Mark Evans", role: "Marketing Lead", imageSrc: "http://img.b2bpic.net/free-photo/colleagues-having-lunch-together-discussing-something_259150-58550.jpg" },
        { id: "3", title: "Strategic", quote: "Posters By Sid turned our vision into a cohesive reality.", name: "Emily Chen", role: "Creative Manager", imageSrc: "http://img.b2bpic.net/free-photo/confident-successful-middle-aged-business-leader_1262-4872.jpg" },
        { id: "4", title: "Innovative", quote: "Truly transformed our digital presence with fresh designs.", name: "James Doe", role: "Product Owner", imageSrc: "http://img.b2bpic.net/free-photo/employee-working-with-trendy-clothes_482257-78860.jpg" },
        { id: "5", title: "Professional", quote: "A seamless workflow and stunning final output every single time.", name: "Alice Wang", role: "Brand Manager", imageSrc: "http://img.b2bpic.net/free-photo/portrait-business-executive-using-mobile-phone_1170-1116.jpg" },
      ]}
      title="Client Feedback"
      description="What our partners say about working with Posters By Sid."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        { id: "f1", title: "What is your design process?", content: "We follow a holistic approach starting with strategy, moving into design execution, and finishing with brand alignment." },
        { id: "f2", title: "How long does a project take?", content: "Timelines vary depending on project scope; we define specific project milestones and delivery dates upfront." },
        { id: "f3", title: "Do you provide consultations?", content: "Yes, we encourage consultations to understand your marketing goals and creative vision." },
      ]}
      sideTitle="Frequently Asked Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Contact"
      title="Start Your Project"
      description="Ready to work with Posters By Sid? Reach out to us today to get started."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Posters By Sid"
      copyrightText="© 2025 Posters By Sid. All rights reserved."
      socialLinks={[
        { icon: Twitter, href: "#", ariaLabel: "Twitter" },
        { icon: Instagram, href: "#", ariaLabel: "Instagram" },
        { icon: Linkedin, href: "#", ariaLabel: "LinkedIn" },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
