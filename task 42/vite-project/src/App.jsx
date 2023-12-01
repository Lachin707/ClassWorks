import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import BaseContextProvider, { BaseContext } from "./services/context/BaseContext";
import { useContext } from "react";

const routes = createBrowserRouter(ROUTES);

export default function App() {
	const { baseContext, setBaseContext } = useContext(BaseContext);

	return (
		<BaseContextProvider>
			<RouterProvider router={routes} />
		</BaseContextProvider>
	);
}
