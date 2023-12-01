import { Button, Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Basket() {
	const [gettedData, setGettedData] = useState([]);
	useEffect(() => {
		axios("https://northwind.vercel.app/api/categories").then((res) => setGettedData(res.data));
	}, []);

	const onChange = (pagination, filters, sorter, extra) => {
		console.log("params", pagination, filters, sorter, extra);
	};

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
			filters: gettedData.map((category) => {
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
				return <></>;
			},
		},
	];

	return (
		<section className="container">
			this is Catigories page
			<Table rowKey={(record) => record.id} columns={columns} dataSource={gettedData} onChange={onChange} />
		</section>
	);
}
