import CategoryNav from "../../Components/CategoryNav/CategoryNav";
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

      <Responsive />
    </>
  );
};
export default Home;
