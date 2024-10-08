import React from "react";

export default function Layout({ children }) {
  return (
    <div className="position-relative">
      <div className="container mx-auto">
        <div className="px-4">{children}</div>
      </div>
    </div>
  );
}
