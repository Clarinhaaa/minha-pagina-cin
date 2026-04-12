import { NavLink } from "react-router";
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.headerContainer}>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Início
      </NavLink>
      <NavLink
        to="/sobre-mim"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Sobre mim
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Portfólio
      </NavLink>
    </header>
  );
}

export default Header;
