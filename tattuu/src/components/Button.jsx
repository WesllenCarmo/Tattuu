import React from "react";

const Button = ({ text }) => {
  return (
    <button className="w-full bg-custom-dark-purple2 text-custom-white text-3xl py-3 rounded-2xl hover:bg-custom-dark-purple3 cursor-pointer transition duration-400 hover:text-custom-white-modified">
      {text}
    </button>
  );
};

export default Button;
