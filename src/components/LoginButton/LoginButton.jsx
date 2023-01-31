import React from "react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="px-1 text-xl"
      onClick={() => {
        navigate("/login");
      }}
    >
      LOGIN
    </button>
  );
};

export default LoginButton;
