import AdminNavbar from "../../../components/Admin/Navbar";
import AdminFooter from "../../../components/Admin/Footer";
import { Outlet } from "react-router-dom";

function AdminRoot() {
	return (
		<>
			<AdminNavbar />
			<Outlet />
			<AdminFooter />
		</>
	);
}

export default AdminRoot;
