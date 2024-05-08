import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./react-slick.css";
import ProductCard from "../Components/ProductCard/ProductCard";

const Responsive = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <ProductCard
              image1="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              image2="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              newLabel="New"
              saleLabel="-10%"
              title="Men's Jacket"
              rating={3}
              disPrice="75.99"
              price="75.99"
            />
          </div>
          <div>
            <ProductCard
              image1="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              image2="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              newLabel="New"
              saleLabel="-10%"
              title="Men's Jacket"
              rating={3}
              disPrice="75.99"
              price="75.99"
            />
          </div>
          <div>
            <ProductCard
              image1="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              image2="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              newLabel="New"
              saleLabel="-10%"
              title="Men's Jacket"
              rating={3}
              disPrice="75.99"
              price="75.99"
            />
          </div>
          <div>
            <ProductCard
              image1="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              image2="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              newLabel="New"
              saleLabel="-10%"
              title="Men's Jacket"
              rating={3}
              disPrice="75.99"
              price="75.99"
            />
          </div>
          <div>
            <ProductCard
              image1="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              image2="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              newLabel="New"
              saleLabel="-10%"
              title="Men's Jacket"
              rating={3}
              disPrice="75.99"
              price="75.99"
            />
          </div>
          <div>
            <ProductCard
              image1="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              image2="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              newLabel="New"
              saleLabel="-10%"
              title="Men's Jacket"
              rating={3}
              disPrice="75.99"
              price="75.99"
            />
          </div>
          <div>
            <ProductCard
              image1="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              image2="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              newLabel="New"
              saleLabel="-10%"
              title="Men's Jacket"
              rating={3}
              disPrice="75.99"
              price="75.99"
            />
          </div>
          <div>
            <ProductCard
              image1="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              image2="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              newLabel="New"
              saleLabel="-10%"
              title="Men's Jacket"
              rating={3}
              disPrice="75.99"
              price="75.99"
            />
          </div>
          <div>
            <ProductCard
              image1="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              image2="https://www.prepbootstrap.com/Content/images/template/productslider/product_002.jpg"
              newLabel="New"
              saleLabel="-10%"
              title="Men's Jacket"
              rating={3}
              disPrice="75.99"
              price="75.99"
            />
          </div>
        </Slider>
      </div>
      <div className="spacer" style={{ height: "30px" }}></div>
    </>
  );
};

export default Responsive;
