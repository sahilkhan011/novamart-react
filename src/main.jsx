import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import UserSessionChecker from "./store/UserSessionChecker";
import { Provider } from "react-redux";
import { store } from "./assets/app/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <Provider store={store}>
    <UserSessionChecker>
      <App />
    </UserSessionChecker>
  </Provider>
  //</React.StrictMode>
);
