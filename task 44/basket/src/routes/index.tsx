import Home from "../pages/User/Home";
import Basket from "../pages/User/Basket";
import Categories from "../pages/User/Categories";
import UserRoot from "../pages/User/UserRoot";

export const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
    ],
  }
];
