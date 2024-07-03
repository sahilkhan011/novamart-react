/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../assets/features/userSlice";
import { fetchUserInfoById } from "./ApiCalls";

const UserSessionChecker = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const createSession = async () => {
      const userId = localStorage.getItem("user-id");
      if (userId) {
        try {
          //console.log("create Session called, userId:", userId);
          const userData = await fetchUserInfoById(userId);
          //console.log("User Data:", userData);
          if (userData) {
            dispatch(loginUser(userData));
          } else {
            console.warn("User info not available for userId:", userId);
          }
        } catch (error) {
          console.error("Error creating session:", error.message);
        }
      } else {
        console.warn("User ID not found in session");
      }
    };

    createSession();
  }, [dispatch]);

  return <>{children}</>;
};

export default UserSessionChecker;
