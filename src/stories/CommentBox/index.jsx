import React from "react";

const CommentBox = () => {
  return (
    <div className="border p-5">
      <div className="">
        <img
          className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white dark:ring-gray-800"
          src="https://preline.co/docs/assets/img/100x100/img4.jpg"
          alt="Description"
        />
        <div className="">
          <span className="pl-5 flex">
            <p>*****</p>
            <p className="text-xs text-gray-500 pl-3">07/28/2022</p>
          </span>
          <p className="font-semibold text-gray-600 w-full">Ankit</p>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
