import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Differentiators from "@/components/Differentiators";
import ProductGrid from "@/components/ProductGrid";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Categories />
        <Differentiators />
        <ProductGrid />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
