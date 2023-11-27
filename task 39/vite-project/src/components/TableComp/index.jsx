import React from "react";
import { Space, Table } from "antd";
import axios from "axios";

async function handleClick(userID, id) {
	let array = [];
	array = await axios(`http://localhost:3000/users/${userID}`);
	array = array.data.posts;
	let check = array.findIndex((item) => item.id == id);
	array[check].accepted = true;
	axios.patch(`http://localhost:3000/users/${userID}`, {
		posts: array,
	});
}

const columns = [
	{
		title: "id",
		dataIndex: "id",
		key: "id",
	},
	{
		title: "user",
		dataIndex: "user",
		key: "user",
	},
	{
		title: "text",
		dataIndex: "text",
		key: "text",
	},
	{
		title: "Action",
		key: "action",
		render: (record) => <Space size="middle">{record.accepted ? null : <button onClick={() => handleClick(record.userID, record.id)}>Accept</button>}</Space>,
	},
];

function TableComp({ data }) {
	return <Table columns={columns} dataSource={data} />;
}

export default TableComp;
