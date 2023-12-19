import { Button, Table } from "antd";
import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../../../services/context/BasketContext";
import { getAllCategories } from "../../../services/api/category";
import Swal from "sweetalert2";

const onChange = (pagination, filters, sorter, extra) => {
	console.log("params", pagination, filters, sorter, extra);
};

function Categories() {
	const { basketData, setBasketData } = useContext(BasketContext);

	let [categories, setCategories] = useState([]);
	useEffect(() => {
		getAllCategories().then((res) => {
			setCategories(res);
		});
	}, []);

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
			filters: categories.map((category) => {
				return {
					text: category.description,
					value: category.description,
				};
			}),
			onFilter: (value, record) => record.description.indexOf(value) === 0,
		},
		{
			title: "Basket",
			render: (text, record) => {
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
	return (
		<>
			<Table rowKey={(record) => record.id} columns={columns} dataSource={categories} onChange={onChange} />;
		</>
	);
}

export default Categories;
