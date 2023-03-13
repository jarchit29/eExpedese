import React from "react";
import ReactDOM from "react-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import { Provider } from "react-redux";
import Store from "./redux/Storee";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";
import swal from "sweetalert";

require("dotenv").config();

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
        <SimpleReactLightbox>
          <App />
        </SimpleReactLightbox>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
