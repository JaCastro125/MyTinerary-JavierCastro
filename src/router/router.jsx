import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cities from "../pages/Cities";
import Main from "../layouts/Main";
import SignIn from "../pages/SignIn";
import Detail from "../pages/Detail"
import ProtectedRoute from "./protectedRoute";

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
        element: <Cities />
      },
      {
        path: '/signin',
        element: (<ProtectedRoute path='/'>
          <SignIn />
        </ProtectedRoute>)
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "*",
        element: <h1 className="text-3xl">Page Not Found</h1>,
      },
      {
        path: "404",
        element: <h1 className="text-3xl">Page Not Found</h1>,
      }
    ],
  },
]);

export default router;
