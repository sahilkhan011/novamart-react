import { Link } from "react-router-dom";
import styles from "./Footer.module.css"; // Import the module CSS file

import appImage1 from "../../assets/app-download-1.png";
import appImage2 from "../../assets/app-download-2.png";

import {
  FaMapMarker,
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={`${styles.footer} bg-dark text-light py-5`}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-xs-6">
            <h3 className={`${styles.footerTitle} mb-3`}>About Us</h3>
            <p>We Provide the best quality product within a few days.</p>
            <ul className={styles.aboutLinks}>
              <li>
                <FaMapMarker /> Khandwa
              </li>
              <li>
                <FaPhone /> +91 6263408689
              </li>
              <li>
                <FaEnvelope /> sahil468428@gmail.com
              </li>
            </ul>
          </div>

          <div className="col-md-3 col-xs-6">
            <h3 className={`${styles.footerTitle} mb-3`}>Useful Links</h3>
            <ul className={styles.usefulLinks}>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">Orders and Returns</Link>
              </li>
              <li>
                <Link to="#">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* ... (rest of your code) */}

          <div className="col-md-3 col-xs-6 text-center text-md-right">
            <h3 className={`${styles.footerTitle} mb-3`}>Follow Us</h3>
            <div className={styles.downlodImages}>
              <Link to="#">
                <img
                  src={appImage1}
                  className="app-dowload-img"
                  alt="App Download 1"
                />
              </Link>
              <Link to="#">
                <img
                  src={appImage2}
                  className="app-dowload-img"
                  alt="App Download 2"
                />
              </Link>
            </div>
            <div
              className={`${styles.SocialLinks} text-center text-md-left pt-3 pt-md-0`}
            >
              <Link to="#" className="twitter">
                <FaTwitter />
              </Link>
              <Link to="#" className="facebook">
                <FaFacebook />
              </Link>
              <Link to="#" className="instagram">
                <FaInstagram />
              </Link>
              <Link to="#" className="linkedin">
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <span className="">
                  Copyright &copy;{new Date().getFullYear()} All rights reserved
                  | This Website is made <FaHeart /> by{" "}
                  <Link to="#" target="_blank">
                    Sahil
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ... (rest of your code) */}
    </footer>
  );
}
