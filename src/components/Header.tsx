import { NavLink } from "react-router";

function Header() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/rota-teste"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Link teste
      </NavLink>
    </nav>
  );
}

export default Header;
