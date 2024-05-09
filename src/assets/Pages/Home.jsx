import CategoryNav from "../../Components/CategoryNav/CategoryNav";
import Heading from "../../Components/Heading/Heading";
import Slideshow from "../../Components/SlideShow/Slideshow";
import Responsive from "../../Slick/Responsive";

const Home = () => {
  return (
    <>
      <CategoryNav />

      <div className="row">
        <div className="col-md-8">
          <Slideshow />
        </div>
        <div className="col-md-4">
          <div className="bg-info" style={{ height: "200px" }}></div>
          <div className="bg-danger" style={{ height: "200px" }}></div>
        </div>
      </div>
      <Heading>Related Products</Heading>
      <Responsive />
      <Heading>Trending Products</Heading>
      <Responsive />
    </>
  );
};
export default Home;
