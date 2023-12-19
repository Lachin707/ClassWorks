import { Link } from "react-router-dom";
import style from "./index.module.css";
import { Container } from "@mui/material";
import { BasketContext } from "../../../services/context/BasketContext";
import { useContext } from "react";

export default function UserNavbar() {
	const { basketData } = useContext(BasketContext);

	return (
		<header className={style.header}>
			<Container>
				<nav className={style.nav}>
					<div>
						<Link className={style.brand} to="/">
							Brandname
						</Link>
					</div>

					<div className={style.links}>
						<Link className={style.link} to="/">
							Home
						</Link>
						<Link className={style.link} to="/basket">
							Basket {basketData.length}
						</Link>
						<Link className={style.link} to="/categories">
							Categories
						</Link>
					</div>
				</nav>
			</Container>
		</header>
	);
}
