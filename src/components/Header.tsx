import { NavLink } from "react-router";

function Header() {
  return (
    <header>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/rota-teste"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Link teste
      </NavLink>
    </header>
  );
}

export default Header;
