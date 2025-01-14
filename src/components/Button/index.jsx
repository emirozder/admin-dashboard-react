const Button = ({ text, bg_color }) => {
  const bgColorClass = bg_color ? `${bg_color}-600` : "bg-indigo-600";
  const hoverBgColorClass = bg_color
    ? `hover:${bg_color}-700`
    : "hover:bg-indigo-700";
  return (
    <button
      className={`text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto ${bgColorClass} ${hoverBgColorClass}`}
    >
      {text}
    </button>
  );
};

export default Button;
