import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Faq from "../pages/Faq";
import About from "../pages/About";
import Careers from "../pages/Careers";
import FindDealer from "../pages/FindDealer";
import BecomeDealer from "../pages/BecomeDealer";
import BecomeDistributor from "../pages/BecomeDistributor";
import Timeline from "../pages/Timeline";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <About />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <Products />,
      },
      {
        path: "carrers",
        element: <Careers />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "history",
        element:<Timeline/>,
      },
      {
        path: "find-dealer",
        element: <FindDealer />,
      },
      {
        path: "become-dealer",
        element: <BecomeDealer />,
      },
      {
        path: "become-distributor",
        element: <BecomeDistributor />,
      },
    ],
  },
]);
