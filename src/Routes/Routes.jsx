import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

export default router;
