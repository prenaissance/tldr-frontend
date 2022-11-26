import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../common/layout";
import Flows from "../pages/flows/Flows";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", index: true, element: <Flows /> }],
  },
];

const router = createBrowserRouter(routes);

export default () => <RouterProvider router={router} />;
