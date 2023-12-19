import { useContext, useEffect } from "react";
import { BasketContext } from "../../../services/context/BasketContext";
import Swal from "sweetalert2";
import { Button, Table } from "antd";

const onChange = (pagination, filters, sorter, extra) => {
	console.log("params", pagination, filters, sorter, extra);
};

function Basket() {
	const { basketData, setBasketData } = useContext(BasketContext);

	useEffect(() => {
		localStorage.setItem("basket", JSON.stringify(basketData))
	}, [basketData])
	

	const columns = [
		{
			title: "ID",
			dataIndex: "id",
			sorter: (a, b) => a.id - b.id,
		},
		{
			title: "Name",
			dataIndex: "name",
			sorter: (a, b) => a.name.localeCompare(b.name),
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
			onFilter: (value, record) => record.description.indexOf(value) === 0,
		},
		{
			title: "Quantity",
			dataIndex: "quantity",
			sorter: (a, b) => a.quantity - b.quantity,
		},
		{
			title: "Action",
			render: (text, record) => {
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
			<Table rowKey={(record) => record.id} columns={columns} dataSource={basketData} onChange={onChange} />
		</>
	);
}

export default Basket;
