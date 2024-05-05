/* eslint-disable react/prop-types */
import { createContext, useState, useCallback, useEffect } from "react";
import { ReactSession } from "react-client-session";
import axios from "axios";

ReactSession.setStoreType("localStorage");

export const UserSessionContext = createContext({
  userInfo: null,
  createSession: () => {},
  logout: () => {},
});

const getUserInfoById = async (userId) => {
  try {
    const apiUrl = `http://localhost:8585/api/user/${userId}`;
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

const UserSessionProvider = ({ children }) => {
  const createSession = useCallback((userId) => {
    console.log("create Session called, userId:", userId);
    getUserInfoById(userId)
      .then((data) => {
        if (data) {
          setUserInfo(data);
        } else {
          console.warn("User info not available for userId:", userId);
        }
      })
      .catch((error) => {
        console.error("Error creating session:", error.message);
      });
  }, []); // Empty dependency array to memoize the function

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const userId = ReactSession.get("user-id");
    if (userId) {
      createSession(userId);
    } else {
      //console.warn("User ID not found in session");
    }
  }, [createSession]); // Dependency array with createSession

  const logout = () => {
    ReactSession.remove("user-id");
    setUserInfo(null);
  };

  return (
    <UserSessionContext.Provider value={{ userInfo, createSession, logout }}>
      {children}
    </UserSessionContext.Provider>
  );
};

export default UserSessionProvider;
