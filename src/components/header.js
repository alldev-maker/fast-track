import React from 'react'
import { Logo } from "../utils/imgImport";

const Header = () => {
  return (
    <header>
      <div className="container items-center justify-between w-full py-3 mx-auto lg:flex">
        <a href="/">
          <img
            className="h-6 md:h-8 lg:block"
            src={Logo}
            alt="fast track"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
