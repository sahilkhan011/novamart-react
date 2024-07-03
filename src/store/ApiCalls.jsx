import axios from "axios";
const baseUrl = "https://onlinegrocery-node-api.onrender.com/api";

export const fetchUserInfoById = async (userId) => {
  try {
    const apiUrl = `${baseUrl}/user/${userId}`;
    const response = await axios.get(apiUrl);

    if (response.status === 200) {
      return response.data;
    } else {
      console.warn("Unexpected status code: ", response.status);
      return null;
    }
  } catch (error) {
    console.error("Error fetching user info:", error.message);
    return null;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${baseUrl}/category`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const fetchSubCategories = async (catid) => {
  try {
    const response = await axios.get(`${baseUrl}/subcategory/bycatid/${catid}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
