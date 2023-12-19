import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
export const BasketContext = createContext("");

function BasketContextProvider({ children }) {
	let LS_DATA = JSON.parse(localStorage.getItem("basket"));
	if (LS_DATA == null) LS_DATA =[];

	console.log("🚀 ~ file: BasketContext.jsx:7 ~ BasketContextProvider ~ LS_DATA:", LS_DATA);
	let [basketData, setBasketData] = useState(LS_DATA);
	return <BasketContext.Provider value={{ basketData, setBasketData }}>{children}</BasketContext.Provider>;
}

BasketContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default BasketContextProvider;
