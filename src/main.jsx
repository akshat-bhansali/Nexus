import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Buisness from "./Pages/Buisness.jsx";
import Foundation from "./Pages/Foundation.jsx";
import Investors from "./Pages/Investors.jsx";
import Media from "./Pages/Media.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "ContactUs",
        element: <Contact />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Buisness",
        element: <Buisness />,
      },
      {
        path: "Foundation",
        element: <Foundation />,
      },
      {
        path: "investors",
        element: <Investors />,
      },
      {
        path: "Media",
        element: <Media />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
