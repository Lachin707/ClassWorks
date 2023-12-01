import { Link } from "react-router-dom";
import style from "./index.module.css";

export default function Navbar() {
	return (
		<header className={style.header}>
			<div className="container">
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
						<Link className={style.link} to="/contact">
							Contact
						</Link>
						<Link className={style.link} to="/about">
							About
						</Link>
						<Link className={style.link} to="/categories">
						Categories
						</Link>
						<Link className={style.link} to="/basket">
						Basket
						</Link>
					</div>
					<div className={style.searchbar}>
						<input className={style.searchInput} type="search" placeholder="Type to find..." />
						<button className={style.searchBtn} type="button">
							Search
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
}
