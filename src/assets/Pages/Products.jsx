import ProductCard from "../../Components/ProductCard/ProductCard";
const Products = () => {
  return (
    <>
      <h1>Products Page</h1>
      <div className="row">
        <div className={`col-md-3 col-sm-6`}>
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
        <div className={`col-md-3 col-sm-6`}>
          <ProductCard
            image1="https://www.prepbootstrap.com/Content/images/template/productslider/product_001.jpg"
            image2="https://www.prepbootstrap.com/Content/images/template/productslider/product_001.jpg"
            title="Women's Top"
            rating={4}
            disPrice="69.99"
            price="69.99"
          />
        </div>
      </div>
    </>
  );
};

export default Products;
