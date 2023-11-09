import React from "react";

import Bg2 from "../../assets/background/Rectangle 2709.png";

export default function Layout({ children }) {
  return (
    <div>
      <main className="position-relative">
        
        <div className="z-n1 position-absolute top-50 end-0 translate-middle-y">
          <img src={Bg2} alt="" />
        </div>
        <div className="container mx-auto">
          <div className="px-4">{children}</div>
        </div>
      </main>
    </div>
  );
}
