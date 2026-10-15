import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/sections/Footer";
import { VenueArticle } from "@/components/VenueArticle";
import { venues, getVenue, venueNeighbors } from "@/data/venues";

export function generateStaticParams() {
  return venues.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = getVenue(slug);
  if (!v) return { title: "Venue — Venue Society" };
  return {
    title: `${v.name} — Venue Society`,
    description: v.blurb,
  };
}

export default async function VenuePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const v = getVenue(slug);
  if (!v) notFound();

  const seed = venues.findIndex((x) => x.slug === slug);
  const { prev, next } = venueNeighbors(slug);

  return (
    <>
      <Nav />
      <VenueArticle venue={v} seed={seed} prev={prev} next={next} />
      <Footer />
    </>
  );
}
