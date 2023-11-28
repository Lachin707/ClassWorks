import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./index.module.css";

function AdminFooter() {
	return (
		<Container>
			<hr />
			<ul>
				<li>
					<Link className={style.link} to="/">
						Home
					</Link>
				</li>
				<li>
					<Link className={style.link} to="/admin">
						Dashboard
					</Link>
				</li>
				<li>
					<Link className={style.link} to="/admin/categories">
						Categories
					</Link>
				</li>
				<li>
					<Link className={style.link} to="/admin/suppliers">
						Suppliers
					</Link>
				</li>
			</ul>
		</Container>
	);
}

export default AdminFooter;
