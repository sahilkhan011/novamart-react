/* eslint-disable react/prop-types */
import styles from "./subcategorycard.module.css";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
function SubCategoryCard({ subcategory }) {
  return (
    <div className={styles.shop}>
      <div className={styles.shopImg}>
        <img src={subcategory.imageurl} alt="" />
      </div>
      <div className={styles.shopBody}>
        <h3>
          {subcategory.name}
          <br />
          Collection
        </h3>
        <Link to={`/products/${subcategory._id}`} className={styles.ctaBtn}>
          Shop now <FaArrowCircleRight />
        </Link>
      </div>
    </div>
  );
}

export default SubCategoryCard;
