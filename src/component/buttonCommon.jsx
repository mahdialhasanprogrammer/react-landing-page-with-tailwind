const Button = ({ children }) => {
  return (
    <button
      type="button"
      className="bg-primary cursor-pointer text-white px-4 py-1.5 "
    >
      {children}
    </button>
  );
};

export default Button;
