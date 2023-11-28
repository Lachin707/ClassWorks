import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import style from "./index.module.css";

function AdminNavbar() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Link className={style.brand} to="/">
					<Navbar.Brand>React-Bootstrap</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Link className={style.link} to="/">
							Home
						</Link>
						<Link className={style.link} to="/admin">
							Dashboard
						</Link>
						<Link className={style.link} to="/admin/categories">
							Categories
						</Link>
						<Link className={style.link} to="/admin/suppliers">
							Suppliers
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default AdminNavbar;
