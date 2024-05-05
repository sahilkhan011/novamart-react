/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";
import styles from "./signin.module.css";

export default function SignIn({ children }) {
  return (
    <Container>
      <div
        className={`d-flex flex-column align-items-center vh-100 ${styles.signInContainer}`}
      >
        <div className="d-flex m-3">
          <Link to="/login" className="btn btn-secondary m-2">
            Login
          </Link>{" "}
          <Link to="/register" className="btn btn-secondary m-2">
            Register
          </Link>
        </div>

        <div
          className={`card ${styles.signInCard} shadow-lg p-3 mb-5 bg-body rounded`}
        >
          {children}
        </div>
      </div>
    </Container>
  );
}
