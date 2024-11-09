import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout.jsx";
import { AboutPage, BlogPage, ContactPage, HomePage } from "../pages/index.js";
import NotFoundPage from "../pages/NotFoundPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement : <NotFoundPage/>,
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
