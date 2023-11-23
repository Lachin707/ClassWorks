import style from "./index.module.css";

function Row({ children }) {
	return <div className={style.row}>{children}</div>;
}

export default Row;
