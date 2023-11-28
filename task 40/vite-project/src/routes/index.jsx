import UserRoot from "../pages/User/UserRoot";
import Home from "../pages/User/Home";
import Contact from "../pages/User/Contact";
import About from "../pages/User/About";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import Categories from "../pages/Admin/Categories";
import CategoryDetails from "../pages/Admin/CategoryDetails";
import Suppliers from "../pages/Admin/Suppliers";
import Error404 from "../pages/Error404";

export const ROUTES = [
	{
		path: "/",
		element: <UserRoot />,
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
		],
	},
	{
		path: "/admin",
		element: <AdminRoot />,
		children: [
			{
				path: "",
				element: <Dashboard />,
			},
			{
				path: "categories",
				element: <Categories />,
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
		children: [],
	},
];
