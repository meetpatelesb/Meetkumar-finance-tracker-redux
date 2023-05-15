import Reactdom from "react-dom";
import App from "./App";
import "./index.css";
import { store } from "./Redux/store";
import { Provider } from "react-redux";

// jsx
Reactdom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
