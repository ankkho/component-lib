import React from "react";

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
          {isNew && <h3 className="text-sm text-red-600">New</h3>}
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
          <div className="flex mt-4">
            <p className="font-bold text-sm">Rs 21,995</p>
            <p className="text-sm text-gray-500 pl-3 line-through">Rs 27,995</p>
            <p className="font-normal rounded-sm bg-red-600 text-white text-xs p-1 ml-3">
              22% Off
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
