import React from "react";
import { PriceBox, NewTag } from "../../utils";

const ItemCard = ({ isNew = false }) => {
  return (
    <>
      <div className="flex flex-col m-3">
        <a href="http://google.com" target="_blank" rel="noreferrer">
          <img
            className="w-full h-auto rounded"
            src="https://cdn.shopify.com/s/files/1/0601/1093/0098/products/8907605112324_1_600x.jpg?v=1646305804"
            alt="Description"
          />
        </a>
        <div className="pt-3">
          <a
            href="http://google.com"
            title="Begum Wing Chair - India Paisleys Blue"
            target="_blank"
            rel="noreferrer"
          >
            <p className="mt-2 text-gray-500">
              Begum Wing Chair - India Paisleys Blue
            </p>
          </a>
          <PriceBox />
          <NewTag show={isNew} />
        </div>
      </div>
    </>
  );
};

export default ItemCard;
