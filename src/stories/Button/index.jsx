const QtyBtn = () => {
  return (
    <div className="border mr-2 h-14 w-full md:w-auto">
      <button className="p-3" data-action="decrease-quantity">
        <p>-</p>
      </button>
      <input
        type="text"
        className="text-center w-10"
        pattern="[0-9]*"
        name="quantity"
        value="1"
        aria-label="Quantity"
      ></input>
      <button className="p-3" data-action="increase-quantity">
        <p>+</p>
      </button>
    </div>
  );
};

const Button = () => {
  return (
    <div>
      <button class="md:w-1/2 w-full p-4 text-center bg-amber-300 uppercase">
        Add to cart
      </button>
    </div>
  );
};

const AddToCartBtn = () => {
  return (
    <div className="bottom-0 fixed left-0 right-0 md:relative w-full md:w-3/4 md:left-auto md:right-auto md:bottom-auto">
      <button class="m-0 font-semibold p-4 bg-amber-300 uppercase">
        Add to cart
      </button>
    </div>
  );
};

const ProceedToCheckoutBtn = () => {};

export { QtyBtn, Button, AddToCartBtn, ProceedToCheckoutBtn };
