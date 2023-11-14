import React from "react";
import Logo from "./Logo";
import CartButton from "./CartButton";
import UseNav from "./UseNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 shadow ">
      <div className=" container ms-auto p-4 flex items-center justify-between ">
        <Logo />

        <div className=" flex justify-center items-center space-x-4 ">
          <CartButton />
          <UseNav />
        </div>
      </div>
    </header>
  );
}
