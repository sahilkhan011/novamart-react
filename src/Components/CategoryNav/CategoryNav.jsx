/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CategoryNav.module.css"; // Import your module CSS
import axios from "axios";
const API_URL = "http://localhost:8585/api"; // Replace with your actual API URL

const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/category`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export default function CategoryNav() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getCategories();
        console.log(categoriesData);
        setCategories(categoriesData);
        // Do something with the categoriesData, such as setting it in state
      } catch (error) {
        // Handle the error
      }
    };

    fetchData();
  }, []); // Run the effect only once on mount

  return (
    <div className="card shadow m-2 p-0">
      <div className={`p-2 ${styles.categoryContainer}`}>
        {categories &&
          categories.map((category) => (
            <div
              key={category._id}
              className={`card m-2 shadow ${styles.navItem}`}
            >
              <Link
                key={category._id}
                to={`/subcategory/${category._id}`}
                className={` text-decoration-none text-dark`}
              >
                <div className={`${styles.navImage}`}>
                  <img
                    src={category.imageurl}
                    alt={category.name}
                    className={`img-fluid rounded-circle`}
                  />
                </div>
                <div className={styles.navName}>{category.name}</div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
