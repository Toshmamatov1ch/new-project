// src/components/Input.jsx
import React from "react";

const Input = React.forwardRef(
  (
    { type = "text", label, placeholder, icon, className = "", ...props },
    ref,
  ) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {/* Agar label uzatilsa, ko'rsatiladi (Login formasi uchun) */}
        {label && (
          <label className="text-gray-900 font-medium text-sm text-left">
            {label}
          </label>
        )}

        <div className="relative flex items-center w-full">
          {/* Agar icon uzatilsa, input ichiga chap tomondan joylashtiriladi (Search uchun) */}
          {icon && (
            <div className="absolute left-3 flex items-center pointer-events-none text-gray-400">
              {icon}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            placeholder={placeholder}
            {...props}
            className={`w-full border border-gray-200 p-3 rounded-xl text-gray-700 bg-white placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
            ${icon ? "pl-10" : "pl-4"} ${className}`}
            // Agar ikonka bo'lsa chapdan ko'proq joy tashlaydi (pl-10)
          />
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";
export default Input;
