import React from "react";
import { PriceBox, NewTag, Accordian } from "../../utils";

const ItemDetailsCard = ({ isNew = true }) => {
  return (
    <>
      <div className="flex flex-row sm:flex-wrap m-3 mx-auto">
        <div className="w-full pb-5">
          <img
            className="w-full h-auto rounded"
            src="https://cdn.shopify.com/s/files/1/0601/1093/0098/products/8907605112324_1_600x.jpg?v=1646305804"
            alt="Description"
          />
        </div>
        <div className="md:pl-7">
          <p className="font-bold md:text-3xl sm:text-2xl">
            TEAL by Chumbak Sahara Desert Bedsheet - Queen size, 136TC, Dark
            Blue
          </p>
          <PriceBox itemDetailsPage={true} offerPercentage="22" />
          <NewTag show={isNew} itemDetailsPage={true} />
          <p className="font-light leading-relaxed mt-3 mb-3 text-gray-800">
            Our Begum Wing Chair is a perfect blend of English culture paired
            with the very vibrant...
          </p>
          <Accordian />
        </div>
      </div>
    </>
  );
};

export default ItemDetailsCard;
