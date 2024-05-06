import { Link } from "react-router-dom";
import styles from "./productcard.module.css";
/* eslint-disable react/prop-types */
import {
  FaStar,
  FaEye,
  FaShoppingCart,
  // FaChevronLeft,
  // FaChevronRight,
} from "react-icons/fa";
const Product = ({
  image1,
  image2,
  newLabel,
  saleLabel,
  title,
  rating,
  price,
  disPrice,
}) => {
  return (
    <div className={`${styles.productGrid}`}>
      <div className={`${styles.product} shadow`}>
        <div className="card-body">
          <div className={styles.productImage}>
            <Link to={`/product/sadf`} className={styles.image}>
              <img className={styles.pic1} src={image1} alt="Product 1" />
              <img className={styles.pic2} src={image2} alt="Product 2" />
            </Link>
            <div className={`${styles.productLabel} d-flex `}>
              {newLabel && <span className={styles.newLabel}>{newLabel}</span>}
              {saleLabel && (
                <span className={styles.saleLabel}>{saleLabel}</span>
              )}
            </div>

            <ul className={styles.productLinks}>
              <li>
                <a href="#" data-tip="Add to Wishlist">
                  <FaStar />
                </a>
              </li>
              <li>
                <a href="#" data-tip="Compare">
                  <FaEye />
                </a>
              </li>
              <li>
                <a href="#" data-tip="Quick View">
                  <FaShoppingCart />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.productContent}>
            <h3 className={styles.title}>
              <a href="#">{title}</a>
            </h3>
            <ul className={`${styles.rating} d-flex justify-content-center`}>
              {[...Array(rating)].map((_, index) => (
                <li key={index}>
                  <FaStar style={{ color: "gold" }} />
                </li>
              ))}
              {[...Array(5 - rating)].map((_, index) => (
                <li key={index}>
                  <FaStar style={{ color: "lightgrey" }} />
                </li>
              ))}
            </ul>

            <div className={styles.price}>
              &#8377;{price}
              <span>&#8377;{disPrice}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.bottomAddtoCart} text-center`}>
        <button>
          <FaShoppingCart /> Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
