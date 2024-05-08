import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import SubCategoryCard from "../../Components/SubCategoryCard/SubCategoryCard";
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
    <>
      <h1>SubCategory Page</h1>

      <div className="row">
        {subcategories &&
          subcategories.map((subcategory) => (
            <div key={subcategory._id} className="col-md-4 col-xs-6">
              <SubCategoryCard subcategory={subcategory} />
            </div>
          ))}
      </div>
    </>
  );
};

export default SubCategory;
