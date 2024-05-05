import Container from "../../Components/Container/Container";
import { Link, useParams } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import styles from "./subcategory.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
const API_URL = "http://localhost:8585/api"; // Replace with your actual API URL

const getSubCategories = async (catid) => {
  try {
    const response = await axios.get(`${API_URL}/subcategory/bycatid/${catid}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

const SubCategory = () => {
  const [subcategories, setSubCategories] = useState([]);
  const { catid } = useParams(); // Access the id from match.params

  useEffect(() => {
    const fetchData = async () => {
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
  }, []); // Run the effect only once on mount

  return (
    <Container>
      <h1>SubCategory Page</h1>

      <div className="row">
        {subcategories &&
          subcategories.map((subcategories) => (
            <div key={subcategories._id} className="col-md-4 col-xs-6">
              <div className={styles.shop}>
                <div className={styles.shopImg}>
                  <img src={subcategories.imageurl} alt="" />
                </div>
                <div className={styles.shopBody}>
                  <h3>
                    {subcategories.name}
                    <br />
                    Collection
                  </h3>
                  <Link
                    to={`/products/${subcategories._id}`}
                    className={styles.ctaBtn}
                  >
                    Shop now <FaArrowCircleRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default SubCategory;
