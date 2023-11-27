import { useEffect, useState } from "react";
import { Input } from "antd";
import axios from "axios";
import TableComp from "./components/TableComp";

function App() {
	const [input, setInput] = useState(0);
	const [loggedUser, setLoggedUser] = useState("  ");
	const [gettedData, setGettedData] = useState([]);
	const [usersPosts, setUsersPosts] = useState([]);

	let array = [];
	useEffect(() => {
		axios("http://localhost:3000/users").then((res) => setGettedData(res.data));
	}, [usersPosts]);

	function handleUserLogin(e) {
		let check = gettedData.find((user) => user.username == e.target.value);
		if (check != undefined) {
			setLoggedUser(check.username);
		} else {
			setLoggedUser("");
		}
		if (e.target.value == "a") {
			gettedData.map((user) => {
				[...user?.posts].forEach((item) => {
					Object.assign(item, { userID: user.id,
            user: user.username  });
				});
				array.push(...user?.posts);
			});
			setUsersPosts(array);
      console.log(array);

		}
	}

	return (
		<>
			<Input placeholder="Basic usage" onChange={(e) => handleUserLogin(e)} />
			{loggedUser != "" ? <p>logged {loggedUser}</p> : <p>not logged</p>}
			{loggedUser == "a" ? <TableComp data={usersPosts}/> : null}
		</>
	);
}

export default App;
