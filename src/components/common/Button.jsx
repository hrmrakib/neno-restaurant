import React from "react";

const Button = ({ children }) => {
  return (
    <button className='bg-[#FEBF00] text-[#0A1425] font-bold py-2.5 px-6'>
      {children}
    </button>
  );
};

export default Button;
