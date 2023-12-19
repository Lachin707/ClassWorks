import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import BasketContextProvider from "./services/context/BasketContext";

const routes = createBrowserRouter(ROUTES);

function App() {
	return (
		<BasketContextProvider>
			<RouterProvider router={routes} />
		</BasketContextProvider>
	);
}

export default App;
