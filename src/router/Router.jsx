import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout.jsx";
import { AboutPage, BlogPage, ContactPage, HomePage } from "../pages/index.js";
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
