import { About } from "@/components/About";
import { Audience } from "@/components/Audience";
import { Contact } from "@/components/Contact";
import { CTA } from "@/components/CTA";
import { Differentials } from "@/components/Differentials";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Audience />
        <Process />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
