import style from "./index.module.css";

function Col({ size, children }) {
	return (
		<div className={style.col} style={{ minWidth: `calc(100% / 12 * ${size})` }}>
			{children}
		</div>
	);
}

export default Col;
