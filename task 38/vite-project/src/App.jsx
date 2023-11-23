import { useReducer, useState } from "react";

let users = [
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
	const ACTION_TYPES = {
		LOGIN: "login",
		LOGOUT: "logout",
	};

	const INITIAL_STATE = {
		logged: "",
		loading: false,
		error: false,
	};

	function reducer(state, action) {
		const { type } = action;

		switch (type) {
			case "login":
				return {
					...state,
					[action.payload.name]: action.payload.value,
				};
			default:
				return state;
		}
	}

	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	const [logged, setLogged] = useState("");
	const [loggedUserData, setLoggedUserData] = useState();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [filteredUsers, setFilteredUsers] = useState();

	function handleSubmit(e) {
		e.preventDefault();
		if (email != "" && password != "") {
			users.map((user) => {
				if (user.email == email && user.pass == password) {
					setLogged(email);
					setLoggedUserData(user);

          let FUA = users.filter((item) => item.email != email);

          user.friends.map((friend) => {  FUA = FUA.filter((item) => item.email != friend) })

          setFilteredUsers(FUA);

				}
			});
		} else {
			alert("empty inputs");
		}
	}

	function handleAddToFriends(e) {}

	function handleAcceptFriendship(e) {}

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
						{loggedUserData.requests.map((item, index) => {
							return (
								<li key={index} style={{ color: "white", margin: "10px 0" }}>
									{item}
									<button onClick={handleAcceptFriendship}>Accept friendship</button>
								</li>
							);
						})}
					</ul>
					<p style={{ color: "white" }}>my friends:</p>
					<ul>
						{loggedUserData.friends.map((item, index) => {
							return (
								<li key={index} style={{ color: "white", margin: "10px 0" }}>
									{item}
								</li>
							);
						})}
					</ul>
					<p style={{ color: "white" }}>users:</p>
					<ul>
						{filteredUsers.map((user, index) => {
							return (
								<li key={index} style={{ color: "white", margin: "10px 0" }}>
									{user.email}
									<button onClick={handleAddToFriends}>Add to friends</button>
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
