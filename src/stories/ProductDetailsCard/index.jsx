import { PriceBox, NewTag, Accordian } from "../../utils";
import { AddToCartBtn, QtyBtn } from "../Button";

const ProductDetailsCard = ({ isNew = true }) => {
  return (
    <>
      <div className="flex md:flex-row flex-col md:mr-3 mt-5 m-0">
        <div className="w-full h-full">
          <img
            className=""
            src="https://cdn.shopify.com/s/files/1/0601/1093/0098/products/8907605112324_1_600x.jpg?v=1646305804"
            alt="Description"
          />
        </div>
        <div className="md:pl-5 md:pt-0 p-2">
          <p className="font-bold text-2xl md:text-3xl">
            TEAL by Chumbak Sahara Desert Bedsheet - Queen size, 136TC, Dark
            Blue
          </p>
          <PriceBox itemDetailsPage={true} offerPercentage="22" />
          <NewTag show={isNew} itemDetailsPage={true} />
          <p className="font-light leading-relaxed mt-3 mb-3 text-gray-800">
            Our Begum Wing Chair is a perfect blend of English culture paired
            with the very vibrant...
          </p>
          <div className="flex flex-wrap justify-between justify-items-center">
            <div className="w-full">
              <p>Quantiy:</p>
              <QtyBtn />
            </div>
            <AddToCartBtn />
          </div>
          <Accordian />
        </div>
      </div>
    </>
  );
};

export default ProductDetailsCard;
