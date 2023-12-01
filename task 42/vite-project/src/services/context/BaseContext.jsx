import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
export const BaseContext = createContext("");

const BaseContextProvider = ({ children }) => {
	let [baseContext, setBaseContext] = useState({
		loginData: {
			loggedUserName: "",
			loggedUserID: "",
		},
		gettedSuppliers: [],
		gettedCategories: [],
		favorite: {
			users: [],
			categories: [],
			suppliers: [],
		},
		basket: [],
	});
	return <BaseContext.Provider value={{ baseContext, setBaseContext }}>{children}</BaseContext.Provider>;
};

BaseContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default BaseContextProvider;
