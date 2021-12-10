import React from "react";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <span>Lista de Tarefas</span>
    </div>
  );
};

export default Header;
