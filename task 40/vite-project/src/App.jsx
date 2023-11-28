import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const routes = createBrowserRouter(ROUTES);

function App() {
	return <RouterProvider router={routes} />;
}

export default App;
