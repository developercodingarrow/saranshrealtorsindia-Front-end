import React from "react";

export default function AuthBtn({ children, className }) {
  return (
    <div>
      <button className={`custom-button ${className}`}>{children}</button>
    </div>
  );
}
