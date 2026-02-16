import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Reviews } from "@/components/home/Reviews";
import { FAQ } from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <ServicesPreview />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
