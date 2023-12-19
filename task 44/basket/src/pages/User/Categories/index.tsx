import { Button, Table, TableProps } from "antd";
import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../../services/context/BasketContext";
import Swal from "sweetalert2";
import axios from "axios";

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

const onChange: TableProps<BasketData>["onChange"] = (pagination, filters, sorter, extra) => {
	console.log("params", pagination, filters, sorter, extra);
};

function Categories() {
	const { basketData, setBasketData } = useContext<BasketContextProviderState>(BasketContext);
	let [categories, setCategories] = useState<any[]>([]);

	useEffect(() => {
		axios("https://northwind.vercel.app/api/categories").then((response: any) => {
			// setCategories(response.data);
			console.log(response.data);
		});
	}, []);

	useEffect(() => {
		localStorage.setItem("basket", JSON.stringify(basketData));
	}, [basketData]);

	const columns = [
		{
			title: "ID",
			dataIndex: "id",
			sorter: (a: BasketData, b: BasketData) => a.id - b.id,
		},
		{
			title: "Name",
			dataIndex: "name",
			sorter: (a: BasketData, b: BasketData) => a.name.localeCompare(b.name),
		},
		{
			title: "Description",
			dataIndex: "description",
			filters: categories.map((category: BasketData) => {
				return {
					text: category.description,
					value: category.description,
				};
			}),
			onFilter: (value: any, record: any) => record.description.indexOf(value) === 0,
		},
		{
			title: "Basket",
			render: (text: any, record: any) => {
				return (
					<Button
						onClick={() => {
							let idx = basketData.findIndex((item) => item.id == record.id);
							if (basketData[idx]?.quantity == undefined) {
								Object.assign(record, { quantity: 1 });
								setBasketData([...basketData, record]);
							} else {
								basketData[idx].quantity++;
								setBasketData([...basketData]);
							}
							// console.log(basketData);
							Swal.fire({
								position: "bottom-end",
								icon: "success",
								title: `${record.name} added to basket`,
								showConfirmButton: false,
								timer: 1500,
							});
						}}
						type="primary"
					>
						Basket
					</Button>
				);
			},
		},
	];
	return <Table columns={columns} dataSource={categories} onChange={onChange} />;
}

export default Categories;
