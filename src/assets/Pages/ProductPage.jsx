import { useEffect, useState } from "react";
import styles from "./productpage.module.css";
import { FaChevronLeft, FaChevronRight, FaShoppingCart } from "react-icons/fa";
import newTagImage from "./../new_tag.gif";

import Responsive from "../../Slick/Responsive";

const ProductPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    /*const fetchData = async () => {
      try {
        const subcategoriesData = await getSubCategories(catid);
        console.log(subcategoriesData);
        setSubCategories(subcategoriesData);
        // Do something with the categoriesData, such as setting it in state
      } catch (error) {
        // Handle the error
      }
    };

    fetchData();
    */
    setImages([
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
      "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
      "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
      "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    ]);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [amount, setAmount] = useState(1);

  const handleDecreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  const handleIncreaseAmount = () => {
    setAmount(amount + 1);
  };

  const handlePrevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`${styles.product} shadow m-3`}>
      <div className="card-body p-3">
        <div className="row">
          <div className="col-md-4">
            <div className={`${styles.mainFrame}`}>
              <div
                className={`${styles.prevContainer}`}
                onClick={handlePrevImage}
              >
                <FaChevronLeft className={`${styles.icon}`} />
              </div>
              <img
                src={images[activeIndex]}
                alt=""
                className={`${styles.activeImg} img-fluid rounded-xl`}
              />
              <div
                className={`${styles.nextContainer}`}
                onClick={handleNextImage}
              >
                <FaChevronRight className={`${styles.icon}`} />
              </div>
            </div>

            <div className="d-flex col-12 justify-content-between mt-3">
              {images.map((img) => (
                <img
                  key={img}
                  src={img}
                  alt=""
                  className={`${styles.frameImg} col-3 img-thumbnail ${
                    images[activeIndex] === img ? styles.activeFrame : ""
                  }`}
                  onClick={() => setActiveIndex(images.indexOf(img))}
                />
              ))}
            </div>
          </div>
          <div className="col-md-8">
            <div className={`${styles.productDetails}`}>
              <div className="d-flex align-items-center">
                <h2 className={`${styles.productName}`}>Nike Invincible </h2>
                <img width={50} src={newTagImage} alt="" />
              </div>
              <div
                className={`${styles.productPrice} d-flex align-items-baseline`}
              >
                <h3 className="d-flex">&#8377;80</h3>
                <del className={`${styles.oldPrice}`}>&#8377;100</del>
                <span className={`${styles.productAvailability}`}>
                  In Stock
                </span>
              </div>
            </div>
            <p className="text-muted">
              Con unammortizzazione incredibile per sostenerti in tutti i tuoi
              chilometri, Invincible 3 offre un livello di comfort elevatissimo
              sotto il piede per aiutarti a dare il massimo oggi, domani e
              oltre. Questo modello incredibilmente elastico e sostenitivo, è
              pensato per dare il massimo lungo il tuo percorso preferito e fare
              ritorno a casa carico di energia, in attesa della prossima corsa.
            </p>
            <div className="d-flex align-items-center gap-3">
              <div className="d-flex align-items-center gap-2">
                <button
                  className={`${styles.amountBtn} `}
                  onClick={handleDecreaseAmount}
                >
                  -
                </button>
                <span className="rounded">{amount}</span>
                <button
                  className={`${styles.amountBtn} `}
                  onClick={handleIncreaseAmount}
                >
                  +
                </button>
              </div>
              <button className={`${styles.addToCartBtn}`}>
                {" "}
                <span>
                  <FaShoppingCart />
                </span>{" "}
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <h1>Related Products</h1>
        <Responsive />
        <h1>Trending Products</h1>
        <Responsive />
      </div>
    </div>
  );
};

export default ProductPage;
