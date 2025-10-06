import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <h1 className="logo">mi tienda online</h1>
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default NavBar;
