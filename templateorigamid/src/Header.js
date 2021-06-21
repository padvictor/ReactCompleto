import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    color: "tomato",
  };
  return (
    <div>
      <NavLink to="/" activeStyle={activeStyle}>
        Produtos {""}
      </NavLink>
      <NavLink to="contato" activeStyle={activeStyle}>
        Contato
      </NavLink>
    </div>
  );
};

export default Header;
