import { useReducer, useState } from "react";

let array = [
	{
		email: "lachin@mail.ru",
		pass: "123",
		friends: ["aydin@mail.ru", "anar@mail.ru"],
		requests: [],
	},
	{
		email: "aydin@mail.ru",
		pass: "123",
		friends: ["lachin@mail.ru", "efqan@mail.ru"],
		requests: [],
	},
	{
		email: "anar@mail.ru",
		pass: "123",
		friends: ["lachin@mail.ru", "efqan@mail.ru"],
		requests: [],
	},
	{
		email: "efqan@mail.ru",
		pass: "123",
		friends: ["aydin@mail.ru", "anar@mail.ru"],
		requests: [],
	},
	{
		email: "zamir@mail.ru",
		pass: "123",
		friends: ["yunis@mail.ru", "elgun@mail.ru"],
		requests: [],
	},
	{
		email: "yunis@mail.ru",
		pass: "123",
		friends: ["zamir@mail.ru", "elgun@mail.ru"],
		requests: [],
	},
	{
		email: "elgun@mail.ru",
		pass: "123",
		friends: ["zamir@mail.ru", "yunis@mail.ru"],
		requests: [],
	},
];

function App() {
	// const ACTION_TYPES = {
	// 	LOGIN: "login",
	// 	LOGOUT: "logout",
	// };

	// const INITIAL_STATE = {
	// 	logged: "",
	// 	loading: false,
	// 	error: false,
	// };

	// function reducer(state, action) {
	// 	const { type } = action;

	// 	switch (type) {
	// 		case "login":
	// 			return {...state, };
	// 		default:
	// 			return state;
	// 	}
	// }
	// const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	const [logged, setLogged] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [users, setUsers] = useState(array);

	function handleSubmit(e) {
		e.preventDefault();
		if (email != "" && password != "") {
			users.map((user) => {
				if (user.email == email && user.pass == password) {
					setLogged(email);
				}
			});
		} else {
			alert("empty inputs");
		}
	}

	function getLoggedUser(logged) {
		let user = users[0];
		for (let index = 0; index < users.length; index++) {
			if (users[index].email == logged) {
				user = users[index];
				break;
			}
		}
		return user;
	}

	function handleAddToFriends(e) {
		let arr2 = users.filter((user) => user.email != e.target.id);
		let u = users.filter((user) => user.email == e.target.id);
		u[0].requests = [...u[0].requests, logged];
		setUsers([...arr2, u[0]]);
	}

	function handleAcceptFriendship(e) {
		let arr2 = users.filter((user) => user.email != e.target.id);
		let u = users.filter((user) => user.email == e.target.id);
		u[0].friends = [...u[0].friends, e.target.id];
		// u[0].requests = [...u[0].requests, logged];
		setUsers([...arr2, u[0]]);
		console.log(u[0]);
	}

	return (
		<>
			{logged == "" ? (
				<form onSubmit={handleSubmit}>
					<input autoComplete="true" type="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)} />
					<input autoComplete="true" type="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)} />
					<button onSubmit={handleSubmit}>enter</button>
				</form>
			) : (
				<div>
					<h1 style={{ color: "white" }}>{logged}</h1>
					<p style={{ color: "white" }}>my friendship requests:</p>
					<ul>
						{getLoggedUser(logged).requests.map((item, index) => {
							return (
								<li key={index} style={{ color: "white", margin: "10px 0" }}>
									{item}
									<button id={item} onClick={handleAcceptFriendship}>
										Accept friendship
									</button>
								</li>
							);
						})}
					</ul>
					<p style={{ color: "white" }}>my friends:</p>
					<ul>
						{getLoggedUser(logged).friends.map((item, index) => {
							return (
								<li key={index} style={{ color: "white", margin: "10px 0" }}>
									{item}
								</li>
							);
						})}
					</ul>
					<p style={{ color: "white" }}>users:</p>
					<ul>
						{users.filter((user)=>user.email).map((user, index) => {
							return (
								<li key={index} style={{ color: "white", margin: "10px 0" }}>
									{user.email}
									<button id={user.email} onClick={handleAddToFriends}>
										Add to friends
									</button>
								</li>
							);
						})}
					</ul>
					<button
						onClick={() => {
							setLogged(false);
						}}
					>
						logout
					</button>
				</div>
			)}
		</>
	);
}

export default App;
