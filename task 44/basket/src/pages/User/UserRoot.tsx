import UserNavbar from "../../components/User/Navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

export default function UserRoot() {
	return (
		<>
			<UserNavbar />
			<Container>
				<Outlet />
			</Container>
		</>
	);
}
