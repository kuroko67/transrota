import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Differentials from "@/components/Differentials";
import RouteDivider from "@/components/RouteDivider";
import TruckShowcase from "@/components/TruckShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black-950">
      <Header />
      <Hero />
      <RouteDivider />
      <Differentials />
      <RouteDivider />
      <TruckShowcase />
      <RouteDivider />
      <Testimonials />
      <RouteDivider />
      <FAQ />
      <RouteDivider />
      <CallToAction />
      <Footer />
    </main>
  );
}