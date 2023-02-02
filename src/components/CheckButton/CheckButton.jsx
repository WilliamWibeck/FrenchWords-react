import React from "react";

const CheckButton = () => {
  return (
    <div class="h-screen w-screen bg-gray-900 flex items-center justify-center">
      <div class="flex">
        <input type="checkbox" id="choose-me" class="peer hidden" />
        <label
          for="choose-me"
          class="select-none cursor-pointer rounded-lg border-2 border-gray-200
   py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 peer-checked:border-gray-200 "
        >
          {" "}
          Check me{" "}
        </label>
      </div>
    </div>
  );
};

export default CheckButton;
