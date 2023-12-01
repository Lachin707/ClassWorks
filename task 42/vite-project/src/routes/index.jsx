import Root from "../pages/Root";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Categories from "../pages/Categories";
import CategoryDetails from "../pages/CategoryDetails";
import Suppliers from "../pages/Suppliers";
import Error404 from "../pages/Error404";
import Basket from "../pages/Basket";

export const ROUTES = [
	{
		path: "/",
		element: <Root />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "admin",
				element: <Dashboard />,
			},
			{
				path: "categories",
				element: <Categories />,
			},
			{
				path: "basket",
				element: <Basket />,
			},
			{
				path: "categories/:id",
				element: <CategoryDetails />,
			},
			{
				path: "suppliers",
				element: <Suppliers />,
			},
		],
	},
	{
		path: "*",
		element: <Error404 />,
	},
];
