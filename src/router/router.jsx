import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cities from "../pages/Cities";
import Main from "../layouts/Main";
import SignIn from "../pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cities",
        element: <Cities />,
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "*",
        element: <h1 className="text-3xl">Page Not Found</h1>,
      }
    ],
  },
]);

export default router;
