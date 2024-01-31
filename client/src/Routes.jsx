import { createBrowserRouter } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./pages/Layout";
import Book from "./pages/Book";
import Authors from "./pages/components/Authors";
import AuthorDetails from "./pages/AuthorDetails";
const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/",
        Component: Index,
      },
    ],
  },

  {
    path: "/book/:id",
    Component: Book,
  },

  {
    path: "/authors",
    Component: Authors,
  },

  {
    path: "/authors/:id",
    Component: AuthorDetails,
  },
]);

export default routes;
