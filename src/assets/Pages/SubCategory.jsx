import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SubCategoryCard from "../../Components/SubCategoryCard/SubCategoryCard";

import { fetchSubCategories } from "./../../store/ApiCalls";

const SubCategory = () => {
  const [subcategories, setSubCategories] = useState([]);
  const { catid } = useParams(); // Access the id from match.params

  useEffect(() => {
    const fetchData = async () => {
      try {
        const subcategoriesData = await fetchSubCategories(catid);
        //console.log(subcategoriesData);
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
