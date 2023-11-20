import React from "react";

export default function Button({ children, className, onClick, itemId }) {
  return (
    <div>
      <button
        className={`custom-button ${className}`}
        onClick={() => onClick(itemId)}
      >
        {children}
      </button>
    </div>
  );
}
