import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <main className="position-relative">
        <div className="container mx-auto">
          <div className="px-4">{children}</div>
        </div>
      </main>
    </div>
  );
}
