import React from "react";
import { Space, Table, Input } from "antd";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "./index.css"

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
		render: (record) => <Space size="middle">{record.accepted ? null : <button  onClick={(e) => {
			console.log(e.target)
			e.target.setAttribute("class","none")
			handleClick(record.userID, record.id)}}>Accept</button>}</Space>,
	},
];

function TableComp() {
	const [loggedUser, setLoggedUser] = useState("");
	const [gettedData, setGettedData] = useState([]);
	const [usersPosts, setUsersPosts] = useState([]);
	const [btn, setBtn] = useState(false)

	let array = [];
	useEffect(() => {
		axios("http://localhost:3000/users").then((res) => setGettedData(res.data));
	}, []);

	function handleUserLogin(e) {
		let check = gettedData.find((user) => user.username == e.target.value);
		if (check != undefined) setLoggedUser(check.username);
		else setLoggedUser("");

		if (e.target.value == "a") {
			gettedData.map((user) => {
				[...user?.posts].forEach((item) => {
					Object.assign(item, { userID: user.id, user: user.username });
				});
				array.push(...user?.posts);
			});
			setUsersPosts(array);
		}
	}

	return (
		<>
			<br />
			<Input style={{ width: "300px" }} placeholder="enter user" onChange={(e) => handleUserLogin(e)} />
			{loggedUser != "" ? <p>logged {loggedUser}</p> : <p>not logged</p>}
			{loggedUser == "a" ? <Table columns={columns} dataSource={usersPosts} /> : null}
		</>
	);
}

export default TableComp;
