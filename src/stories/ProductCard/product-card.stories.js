import React from "react";
import ProductCard from ".";

export default {
  title: "ProductCard",
  component: ProductCard,
};

export const Primary = () => (
  <div className="flex flex-wrap md:flex-nowrap">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
);
