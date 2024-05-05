import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Container from "../Container/Container";

const images = [
  "https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  "https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80",
  "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
];

const Slideshow = () => {
  return (
    <Container>
      <div className="slide-container">
        <Zoom scale={1}>
          {images.map((each, index) => (
            <img
              key={index}
              style={{ width: "100%", height: "400px" }}
              src={each}
            />
          ))}
        </Zoom>
      </div>
    </Container>
  );
};
export default Slideshow;
