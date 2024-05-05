import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";

const About = () => {
  return (
    <div className="container mt-3 mb-3">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">About Page</h1>

          <section>
            <h3>
              <FaPhone /> Call Us
            </h3>
            <p>Contact us at: 6263408689</p>
          </section>

          <section>
            <h3>
              <FaEnvelope /> Email Us
            </h3>
            <p>Email: sahilkhan468786@gmail.com</p>
          </section>

          <section>
            <h3>
              <FaMapMarker /> Our Address
            </h3>
            <p>khar kalan, Block: Khalwa, Dist.: Khandwa</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
