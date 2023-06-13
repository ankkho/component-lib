import {
  HandRaisedIcon,
  TruckIcon,
  ChatBubbleBottomCenterTextIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";

const Banner = () => {
  return (
    <div className="w-full bg-slate-100 p-5 flex flex-wrap justify-evenly">
      <div className="m-10 flex">
        <div className="pr-2">
          <HandRaisedIcon className="h-12 w-12 text-blue-500" />
        </div>
        <div>
          <h2 className="font-bold">No-Contact Delivery</h2>
          <p className="font-normal">Free on orders over $100</p>
        </div>
      </div>
      <div className="m-10 flex">
        <div className="pr-2">
          <TruckIcon className="h-12 w-12 text-blue-500" />
        </div>
        <div>
          <h2 className="font-bold">Fast & Free Returns</h2>
          <p className="font-normal">Easy with original receipt</p>
        </div>
      </div>
      <div className="m-10 flex">
        <div className="pr-2">
          <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-blue-500" />
        </div>
        <div>
          <h2 className="font-bold">Chat with Us</h2>
          <p className="font-normal">Talk to our team via chat</p>
        </div>
      </div>
      <div className="m-10 flex">
        <div className="pr-2">
          <CreditCardIcon className="h-12 w-12 text-blue-500" />
        </div>
        <div>
          <h2 className="font-bold">Buy Now, Pay Later</h2>
          <p className="font-normal">Finance interest-free today</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
