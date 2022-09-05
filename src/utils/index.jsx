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
            "font-normal rounded-sm bg-red-600 text-white p-1 ml-3 text-sm"
          }
        >
          ${offerPercentage}% Off
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
    <div class="hs-accordion-group">
      <div
        class="hs-accordion active"
        id="hs-basic-with-title-and-arrow-stretched-heading-one"
      >
        <button
          class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
        >
          Accordion #1
          <svg
            class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg
            class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-one"
          class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
        >
          <p class="text-gray-800 dark:text-gray-200">
            <em>This is the third item's accordion body.</em> It is hidden by
            default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions.
          </p>
        </div>
      </div>

      <div
        class="hs-accordion"
        id="hs-basic-with-title-and-arrow-stretched-heading-two"
      >
        <button
          class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
        >
          Accordion #2
          <svg
            class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg
            class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-two"
          class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
        >
          <p class="text-gray-800 dark:text-gray-200">
            <em>This is the third item's accordion body.</em> It is hidden by
            default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions.
          </p>
        </div>
      </div>

      <div
        class="hs-accordion"
        id="hs-basic-with-title-and-arrow-stretched-heading-three"
      >
        <button
          class="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
          aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
        >
          Accordion #3
          <svg
            class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <svg
            class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div
          id="hs-basic-with-title-and-arrow-stretched-collapse-three"
          class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
          aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
        >
          <p class="text-gray-800 dark:text-gray-200">
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
