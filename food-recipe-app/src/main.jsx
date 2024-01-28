import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider} from "react-redux";
import ItemsSlice from "./store/index.js";
import Home from "./components/Home.jsx";
import Explore from "./components/Explore.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import Favourites from "./components/Favourites.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/viewdetails", element: <Explore /> },
      { path: "/favourites", element: <Favourites /> },
    ],
  },
  {path: "/login",element: <Login />},
  {path: "/signup",element: <SignUp />},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={ItemsSlice}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
