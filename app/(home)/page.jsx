import FeaturedProducts from "@/components/featured-products";
import Hero from "@/components/hero";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="content">
        <Hero />
        <FeaturedProducts />
      </div>
    </>
  );
}
