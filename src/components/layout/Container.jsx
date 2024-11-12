const Container = ({ children, className }) => {
  return (
    <div className={`w-[90%] lg:w-[80%] mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
