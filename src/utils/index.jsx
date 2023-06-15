export const PriceBox = ({ offerPercentage, itemDetailsPage = false }) => {
  return (
    <div className="flex mt-4">
      <p className={`font-bold ${itemDetailsPage ? "text-xl" : "text-sm"}`}>
        Rs 21,995
      </p>
      <p
        className={`${
          itemDetailsPage ? "text-xl" : "text-sm"
        } text-gray-900 pl-3 line-through`}
      >
        Rs 27,995
      </p>
      {offerPercentage && (
        <p
          className={
            "font-normal rounded-sm bg-red-600 text-white p-1 ml-3 text-sm text-center"
          }
        >
          {offerPercentage}% Off
        </p>
      )}
    </div>
  );
};

export const NewTag = ({ show, itemDetailsPage = false }) => {
  if (!show) return null;

  if (itemDetailsPage)
    return (
      <p className="font-normal rounded-sm border-red-600 border w-12 text-center text-red-500 p-1 text-sm mt-3">
        New
      </p>
    );
  return <h3 className="text-lg text-red-600">New</h3>;
};

export const Accordian = () => {
  return (
    <div className="hs-accordion-group">
      <div
        className="hs-accordion active"
        id="hs-basic-with-title-and-arrow-stretched-heading-one"
      >
        <button
          className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-900 transition hover:text-gray-900 dark:hs-accordion-active:text-blue-500 dark:text-gray-900 dark:hover:text-gray-900"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
        >
          Product Information & Care
          <svg
            className="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-900 group-hover:text-gray-900 dark:text-gray-900"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <svg
            className="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-700 group-hover:text-gray-900 dark:text-gray-900"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-one"
          className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
        >
          <p className="text-gray-800 dark:text-gray-900">
            <em>This is the third item's accordion body.</em> It is hidden by
            default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions.
          </p>
        </div>
      </div>
    </div>
  );
};
