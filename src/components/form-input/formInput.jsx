import React from "react";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="flex ">
      <div className="flex flex-col gap-2">
        <input
          className=" h-6 rounded-sm bg-[#FDFDFD] border-solid border-2 border-[#F6F6F7]"
          {...otherProps}
        />
      </div>
    </div>
  );
};

export default FormInput;
