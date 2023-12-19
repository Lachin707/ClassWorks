import { Link } from "react-router-dom";
import style from "./index.module.css";
import { Container } from "@mui/material";
import { BasketContext } from "../../../services/context/BasketContext";
import { useContext } from "react";

interface BasketData {
	id: number;
	description: string;
	name: string;
	quantity: number;
}

type BasketContextProviderState = {
	basketData: BasketData[];
	setBasketData: React.Dispatch<React.SetStateAction<BasketData[]>>;
};

export default function UserNavbar() {
	const { basketData, setBasketData } = useContext<BasketContextProviderState>(BasketContext);

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
