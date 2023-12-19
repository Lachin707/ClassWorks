import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes";
import BasketContextProvider from "./services/context/BasketContext";

const routes = createBrowserRouter(ROUTES);

export default function App() {

  return (
		<BasketContextProvider>
			<RouterProvider router={routes} />
		</BasketContextProvider>
  )
}


