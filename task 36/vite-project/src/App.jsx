import { useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Card from "./components/Card";
import { CButton, CFormInput, CInputGroup } from "@coreui/react";
import axios from "axios";

function App() {
	const [user, setUser] = useState(null);
	const [text, setText] = useState(null);

	async function handleSearchBtn() {
		let res = await axios.get(`https://api.github.com/users/${text}`, {
			headers: {
				Authorization: `token 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`,
			},
		});

		setUser(res.data);
		console.log(user);
	}

	function handleSearch(e) {
		setText(e.target.value);
	}

	return (
		<>
			<CInputGroup className="mb-3">
				<CFormInput placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleSearch} />
				<CButton type="button" color="secondary" variant="outline" id="button-addon2" onClick={handleSearchBtn}>
					Button
				</CButton>
			</CInputGroup>
			{user && <Card data={user}/>}
			<Table />
		</>
	);
}

export default App;
