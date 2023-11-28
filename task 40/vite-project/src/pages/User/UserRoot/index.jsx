import UserNavbar from "../../../components/User/Navbar";
import UserFooter from "../../../components/User/Footer";
import { Outlet } from "react-router-dom";

function UserRoot() {
	return (
		<>
			<UserNavbar />
			<Outlet />
			<UserFooter />
		</>
	);
}

export default UserRoot;
