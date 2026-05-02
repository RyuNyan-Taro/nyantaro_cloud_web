import './Header.css';
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header-section flex flex-col w-full">
      <div className="flex justify-between items-center w-full px-11 py-5 max-w-[1600px] mx-auto">
        <h1 className="header-title">NYANTARO CLOUD</h1>
        <span className="header-icon material-symbols-outlined">filter_vintage</span>
      </div>
    </header>
  );
};

export default Header;
