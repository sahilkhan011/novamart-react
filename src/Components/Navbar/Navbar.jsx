import Container from "../Container/Container"; // Correct the import path if needed
import styles from "./navbar.module.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navRoutes = [
    { Home: "/" },
    { Store: "/store" },
    { About: "/about" },
    { Contact: "/contact" },
  ];
  const location = useLocation();

  return (
    <Container>
      <nav>
        <ul className={`${styles.nav} nav`}>
          {navRoutes.map((navItem, index) => {
            const routeName = Object.keys(navItem)[0]; // Extract route name
            const routePath = navItem[routeName]; // Extract route path

            return (
              <li
                key={index}
                className={`${styles.navItem} nav-item ${
                  location.pathname === routePath ? styles.active : ""
                }`}
              >
                <Link to={routePath}>{routeName}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
