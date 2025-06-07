import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import Products from "./Pages/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/ContactUs",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
