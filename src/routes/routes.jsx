import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../Pages/Books/Books";
import Homepage from "../Pages/Homepage/Homepage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BooksDetails/BookDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/books",
        element: <Books></Books>,
      },
      {
        path: "/booksDetails/:bookId",
        Component: BookDetails,
        loader: () => fetch('/booksData.json'),
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);