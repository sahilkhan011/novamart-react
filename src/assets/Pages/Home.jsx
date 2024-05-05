import CategoryNav from "../../Components/CategoryNav/CategoryNav";
import Container from "../../Components/Container/Container";
import Slideshow from "../../Components/SlideShow/Slideshow";

const Home = () => {
  return (
    <Container>
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
    </Container>
  );
};
export default Home;
