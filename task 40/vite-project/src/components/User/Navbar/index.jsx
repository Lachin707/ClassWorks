import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import style from "./index.module.css";

function UserNavbar() {
	return (
		<header className={style.header}>
			<Container>
				<nav className={style.nav}>
					<div><Link className={style.brand} to="/">
					Brandname
						</Link></div>
				
					<div className={style.links}>
						<Link className={style.link} to="/">
							Home
						</Link>
						<Link className={style.link} to="/contact">
							Contact
						</Link>
						<Link className={style.link} to="/about">
							About
						</Link>
				
					</div>
					<div className={style.searchbar}>
						<input className={style.searchInput} type="search" placeholder="Type to find..." />
						<button className={style.searchBtn} type="button">Search</button>
					</div>
				</nav>
			</Container>
		</header>
	);
}

export default UserNavbar;

/*

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
						<Link className={style.link} to="/contact">
							Contact
						</Link>
						<Link className={style.link} to="/about">
							About
						</Link>
						<Link className={style.link} to="/admin">
							Admin
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
*/
