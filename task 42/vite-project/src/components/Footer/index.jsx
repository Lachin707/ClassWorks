import { Link } from "react-router-dom";
import style from "./index.module.css";

export default function Footer() {
	return (
		<ul>
			<li>
				<Link className={style.link} to="/">
					Home
				</Link>
			</li>
			<li>
				<Link className={style.link} to="/contact">
					Contact
				</Link>
			</li>
			<li>
				<Link className={style.link} to="/about">
					About
				</Link>
			</li>
			<li>
				<Link className={style.link} to="/admin">
					Admin
				</Link>
			</li>
		</ul>
	);
}
