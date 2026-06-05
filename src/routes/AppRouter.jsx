import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import Search from "../pages/Search";
import MangaDetails from "../pages/MangaDetails";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "manga/:id", element: <MangaDetails /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;