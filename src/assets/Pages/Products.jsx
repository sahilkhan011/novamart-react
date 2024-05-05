/* eslint-disable react/prop-types */
import {
  FaStar,
  FaEye,
  FaShoppingCart,
  // FaChevronLeft,
  // FaChevronRight,
} from "react-icons/fa";
import Container from "../../Components/Container/Container";
import styles from "./products.module.css";

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
    <div className={`col-md-3 col-sm-6`}>
      <div className={styles.productGrid}>
        <div className={`${styles.product} shadow`}>
          <div className="card-body">
            <div className={styles.productImage}>
              <a href="#" className={styles.image}>
                <img className={styles.pic1} src={image1} alt="Product 1" />
                <img className={styles.pic2} src={image2} alt="Product 2" />
              </a>
              <div className={`${styles.productLabel} d-flex `}>
                {newLabel && (
                  <span className={styles.newLabel}>{newLabel}</span>
                )}
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
    </div>
  );
};

const Products = () => {
  return (
    <Container>
      <h1>Products Page</h1>
      <div className="row">
        <Product
          image1="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
          image2="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
          newLabel="New"
          saleLabel="-10%"
          title="Men's Jacket"
          rating={3}
          disPrice="75.99"
          price="75.99"
        />
        <Product
          image1="https://www.prepbootstrap.com/Content/images/template/productslider/product_001.jpg"
          image2="https://www.prepbootstrap.com/Content/images/template/productslider/product_001.jpg"
          title="Women's Top"
          rating={4}
          disPrice="69.99"
          price="69.99"
        />
      </div>
    </Container>
  );
};

export default Products;
