import { Link } from "react-router-dom";
import logoImage from "../../assets/logo.png";
import Container from "../Container/Container";
import Navbar from "../Navbar/Navbar";
import styles from "./header.module.css";
import { FaHeart, FaUser, FaSearch } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { IoMdCart } from "react-icons/io";
import { logoutUser } from "../../assets/features/userSlice";

import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  //console.log("userInfo:", userInfo);
  //console.log(userInfo);
  return (
    <>
      <header className={styles.header}>
        <Container className={styles.bottomLine}>
          <div className="d-flex justify-content-between ">
            <div className={`${styles.logoContainer} `}>
              <Link to="./">
                <img src={logoImage} className="" alt="Logo" />
                {/* <span>GorceEazy</span> */}
              </Link>
            </div>

            <div className="d-flex float-left m-2">
              <div
                className={`${styles.iconContainer}`}
                onClick={() => {
                  console.log("clicked");
                }}
              >
                <FaSearch size={20} color="red" />
                {/* <span>Search</span> */}
              </div>

              <div
                className={`${styles.iconContainer}`}
                onClick={() => {
                  console.log("clicked");
                }}
              >
                <FaHeart size={20} color="red" title="wishlish" />
                <span>Wishlist</span>
                <div className={styles.qty}>10</div>
              </div>

              <div
                className={`${styles.iconContainer}`}
                onClick={() => {
                  console.log("clicked");
                }}
              >
                <IoMdCart size={20} color="red" title="cart" />
                <span>Cart</span>
                <div className={styles.qty}>99</div>
              </div>

              {userInfo.isLoggedIn && (
                <div
                  className={`${styles.iconContainer}`}
                  onClick={() => {
                    console.log("clicked");
                  }}
                >
                  <FaUser size={20} color="red" />
                  <span>{userInfo ? userInfo.data.name : "Null"}</span>
                </div>
              )}

              {!userInfo.isLoggedIn && (
                <div
                  className={`${styles.iconContainer}`}
                  onClick={() => {
                    //console.log("clicked");
                  }}
                >
                  <Link to="Login">
                    <FiLogIn size={20} color="red" />
                    <span>Login</span>
                  </Link>
                </div>
              )}

              {userInfo.isLoggedIn && (
                <div
                  className={`${styles.iconContainer}`}
                  onClick={() => {
                    dispatch(logoutUser());
                    //console.log("clicked");
                  }}
                >
                  <FiLogIn size={20} color="red" />
                  <span>Logout</span>
                </div>
              )}
            </div>
          </div>
        </Container>
        <div className={styles.bottomLineRed}></div>
        <Navbar />
        <div className={styles.bottomLineWhite}></div>
      </header>
    </>
  );
};

export default Header;
