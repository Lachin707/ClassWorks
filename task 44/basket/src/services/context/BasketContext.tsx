import { createContext, useState } from "react";

type BasketContextProviderState = {
	basketData: BasketData[];
	setBasketData: React.Dispatch<React.SetStateAction<BasketData[]>>;
};

export const BasketContext = createContext<BasketContextProviderState>({
	basketData: [],
	setBasketData: () => {},
});

interface BasketData {
	id: number;
	description: string;
	name: string;
	quantity: number;
}

type BasketContextProviderProps = {
	children: React.ReactNode;
};

export default function BasketContextProvider({ children }: BasketContextProviderProps) {
	let LS_DATA = JSON.parse(localStorage.getItem("basket") || "[]");
	if (LS_DATA == null) LS_DATA = [];
	console.log("🚀 ~ file: BasketContext.jsx:7 ~ BasketContextProvider ~ LS_DATA:", LS_DATA);

	let [basketData, setBasketData] = useState<BasketData[]>([]);

	return <BasketContext.Provider value={{ basketData, setBasketData }}>{children}</BasketContext.Provider>;
}
