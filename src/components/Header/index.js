import React from "react";
import HeaderWrapper from "./HeaderWrapper";
import { useSelector } from "react-redux";
import { toggleTheme } from "./../../redux/actions/layout";

const Header = () => {
  const theme = useSelector((state) => state.layout.darkMode);
  return (
    <HeaderWrapper theme={theme}>
      <div className="container py-3">
        <button className="btn btn-primary" onClick={toggleTheme}>
          {theme}
        </button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
