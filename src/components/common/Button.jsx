const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-[#FEBF00] text-[#0A1425] uppercase font-bold py-2.5 px-6 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
