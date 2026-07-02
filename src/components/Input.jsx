// src/components/Input.jsx
import React from "react";

const Input = React.forwardRef(({ type, label, placeholder }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 font-medium">{label}</label>
      <input
        ref={ref} // Mana shu yerga kelgan ref ulanadi
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 p-2 rounded-lg"
      />
    </div>
  );
});

export default Input;
