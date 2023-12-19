import UserNavbar from "../../components/User/Navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

function UserRoot() {
	return (
		<>
			<UserNavbar />
			<Container>
				<Outlet />
			</Container>
		</>
	);
}

export default UserRoot;
