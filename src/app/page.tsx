import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import BookCall from "@/components/BookCall";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Services />
        <HowItWorks />
        <Pricing />
        <BookCall />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
