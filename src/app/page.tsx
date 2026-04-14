import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Directions from "@/components/Directions";
import Advantages from "@/components/Advantages";
import Projects from "@/components/Projects";
import Investors from "@/components/Investors";
import Careers from "@/components/Careers";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <Header />
      <Hero />
      <About />
      <Directions />
      <Advantages />
      <Projects />
      <Investors />
      <Careers />
      <ContactCTA />
      <Footer />
    </main>
  );
}