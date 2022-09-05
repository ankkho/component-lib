import React from "react";
import ItemCard from ".";

export default {
  title: "ItemCard",
  component: ItemCard,
};

export const Primary = () => (
  <div className="flex flex-row">
    <ItemCard />
    <ItemCard />
    <ItemCard />
    <ItemCard />
  </div>
);
