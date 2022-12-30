import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store/configureStore";
import "./index.css";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <footer>
        <div className="text-center text-very-dark-blue">
          <span>Challenge by </span>
          <a
            href="https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6"
            target="_blank"
            className="hover:cursor-pointer font-bold"
          >
            Frontend Mentor
          </a>
          . <span>Coded by </span>
          <a
            href="https://www.frontendmentor.io/profile/Mirtineh"
            className="hover:cursor-pointer font-bold"
          >
            Mirtineh
          </a>
          .
        </div>
      </footer>
    </Provider>
  </React.StrictMode>
);
