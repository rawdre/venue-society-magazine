import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Concept } from "@/components/sections/Concept";
import { FeaturedVenues } from "@/components/sections/FeaturedVenues";
import { FeatureYourVenue } from "@/components/sections/FeatureYourVenue";
import { Vendors } from "@/components/sections/Vendors";
import { Launch } from "@/components/sections/Launch";
import { Podcast } from "@/components/sections/Podcast";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Concept />
        <FeaturedVenues />
        <FeatureYourVenue />
        <Vendors />
        <Launch />
        <Podcast />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
