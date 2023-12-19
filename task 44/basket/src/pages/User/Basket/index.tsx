import { useContext, useEffect } from "react";
import { BasketContext } from "../../../services/context/BasketContext";
import { Button, Table, TableProps } from "antd";

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

function Basket() {
	const { basketData, setBasketData } = useContext<BasketContextProviderState>(BasketContext);

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
			filters: basketData.map((category) => {
				return {
					text: category.description,
					value: category.description,
				};
			}),
			onFilter: (value: any, record: any) => record.description.indexOf(value) === 0,
		},
		{
			title: "Quantity",
			dataIndex: "quantity",
			sorter: (a: BasketData, b: BasketData) => a.quantity - b.quantity,
		},
		{
			title: "Action",
			render: (text: any, record: any) => {
				return (
					<>
						<Button
							onClick={() => {
								let idx = basketData.findIndex((item) => item.id == record.id);
								let array = basketData;
								array[idx].quantity--;
								setBasketData([...array]);
							}}
							type="primary"
						>
							-
						</Button>
						<Button
							onClick={() => {
								let idx = basketData.findIndex((item) => item.id == record.id);
								let array = basketData;
								array[idx].quantity++;
								setBasketData([...array]);
							}}
							type="primary"
						>
							+
						</Button>
						<Button
							onClick={() => {
								setBasketData(basketData.filter((item) => item.id != record.id));
							}}
							type="primary"
						>
							Del
						</Button>
					</>
				);
			},
		},
	];

	return (
		<>
			<Table columns={columns} dataSource={basketData} onChange={onChange} />
		</>
	);
}

export default Basket;
