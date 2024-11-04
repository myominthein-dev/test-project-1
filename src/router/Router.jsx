import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout.jsx";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import BlogPage from "../pages/BlogPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,

        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
    ],
  },
]);
export default router;
