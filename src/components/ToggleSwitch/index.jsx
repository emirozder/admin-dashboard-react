const ToggleSwitch = ({ label, isOn, onToggle }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-300">{label}</span>
      <button
        className={`relative w-12 h-6 flex items-center rounded-full p-1 focus:outline-none ${
          isOn ? "bg-blue-500" : "bg-gray-400"
        }`}
        onClick={onToggle}
      >
        <span
          className={`block w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${
            isOn ? "translate-x-full" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;
