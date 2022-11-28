import * as React from "react";

export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    className={`p-2 cursor-pointer whitespace-nowrap border-0 bg-transparent border-primary${
      isActive
        ? "border-indigo-500 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700 border-bottom text-danger border-danger"
        : "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 focus:text-gray-600 focus:border-gray-300"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);