import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="px-1 text-xl"
      onClick={() => {
        navigate(-1);
      }}
    >
      BACK
    </button>
  );
};

export default BackButton;
