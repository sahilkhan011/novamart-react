import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./register.module.css"; // Make sure to create a CSS module for styling
import { UserSessionContext } from "../../store/UserSessionStore";
import { ReactSession } from "react-client-session";

ReactSession.setStoreType("localStorage");

export default function Register() {
  const { createSession } = useContext(UserSessionContext);
  const nameRef = useRef("");
  const genderRef = useRef("");
  const mobileRef = useRef("");
  const passwordRef = useRef("");
  const imageRef = useRef(null); // Reference to the file input element
  const navigate = useNavigate(); // Access the history object

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameValue = nameRef.current.value;
    const genderValue = genderRef.current.value;
    const mobileValue = mobileRef.current.value;
    const passwordValue = passwordRef.current.value;
    const imageFile = imageRef.current.files[0]; // Get the selected image file

    // Check if any field is empty
    if (!nameValue || !genderValue || !mobileValue || !passwordValue) {
      alert("All fields are required.");
      return; // Stop further execution if any field is empty
    }

    const formData = new FormData(); // Create a FormData object for sending multipart/form-data
    formData.append("name", nameValue);
    formData.append("gender", genderValue);
    formData.append("mobile_no", mobileValue);
    formData.append("password", passwordValue);
    formData.append("image", imageFile); // Append the selected image file to the FormData

    console.log(formData);

    const apiUrl = "http://localhost:8585/api/user/"; // Change the API endpoint accordingly

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
        },
      });

      console.log(response.data);

      if (response.status === 201) {
        alert(response.data.message);
        // HTTP status code 201 indicates success

        ReactSession.set("user-id", response.data.user._id);
        createSession(response.data.user._id);
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);

      if (error.response && error.response.status === 500) {
        // Handle 500 Internal Server Error
        alert("Internal Server Error. Please try again later.");
      } else {
        // Handle other errors or display a generic message
        alert("An error occurred during registration.");
      }
    }

    // Clear the form fields
    nameRef.current.value = "";
    genderRef.current.value = "";
    mobileRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="card-body text-center">
      <h5 className="card-title">Register</h5>
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-3 form-floating">
          <input
            type="text"
            className={`form-control ${styles.smallInput}`}
            placeholder="Name"
            ref={nameRef}
          />
          <label>Name</label>
        </div>
        <div className="mb-3 form-floating">
          <select
            className={`form-select ${styles.smallInput}`}
            ref={genderRef}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label>Gender</label>
        </div>
        <div className="mb-3 form-floating">
          <input
            type="number"
            className={`form-control ${styles.smallInput}`}
            placeholder="Mobile No"
            ref={mobileRef}
          />
          <label>Mobile No</label>
        </div>
        <div className="mb-3 form-floating">
          <input
            type="password"
            className={`form-control ${styles.smallInput}`}
            placeholder="Password"
            ref={passwordRef}
          />
          <label>Password</label>
        </div>
        <div className="mb-3 form-floating">
          <input
            type="file"
            className="form-control"
            ref={imageRef}
            accept="image/*" // Accept all image file types
          />
          <label>Profile Image</label>
        </div>
        <button type="submit" className="btn btn-primary btn-block mx-auto">
          Register
        </button>
      </form>
    </div>
  );
}
