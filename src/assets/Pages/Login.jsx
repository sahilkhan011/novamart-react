import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./login.module.css";
import { UserSessionContext } from "../../store/UserSessionStore";
import { ReactSession } from "react-client-session";

ReactSession.setStoreType("localStorage");

export default function Login() {
  const { createSession } = useContext(UserSessionContext);
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate(); // Access the history object

  const handleSubmit = async (e) => {
    e.preventDefault();

    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;

    // Check if either username or password is empty
    if (!usernameValue || !passwordValue) {
      alert("Username and password cannot be empty.");
      return; // Stop further execution if the fields are empty
    }

    const formData = {
      mobile_no: usernameValue,
      password: passwordValue,
    };

    const apiUrl = "http://localhost:8585/api/user/login";

    try {
      const response = await axios.post(apiUrl, formData);
      //console.log("Response Data:", response.data);

      if (response.data.status) {
        ReactSession.set("user-id", response.data.user._id);
        createSession(response.data.user._id);
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 401) {
          alert(
            "Invalid credentials. Please check your username and password."
          );
        } else if (error.response.status === 404) {
          alert("User not found. Please check your username.");
        } else {
          alert(`Error: ${error.response.data.message}`);
        }
      } else if (error.request) {
        // The request was made but no response was received
        alert("No response received from the server.");
      } else {
        // Something happened in setting up the request that triggered an Error
        alert(`Error: ${error.message}`);
      }
      // Handle any error-related logic
    }

    // Clear the form fields
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className="card-body text-center">
      <h5 className="card-title">Login</h5>
      <form className="" onSubmit={handleSubmit}>
        <div className="mb-3 form-floating">
          <input
            type="text"
            className={`form-control ${styles.smallInput}`}
            placeholder="Mobile No"
            ref={usernameRef}
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

        <button type="submit" className="btn btn-primary btn-block mx-auto">
          Login
        </button>
      </form>
    </div>
  );
}
