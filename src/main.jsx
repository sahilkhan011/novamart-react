import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import UserSessionProvider from "./store/UserSessionStore.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <UserSessionProvider>
    <App />
  </UserSessionProvider>
  //</React.StrictMode>
);
