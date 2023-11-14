import {array} from "./students"

function Contacts() {
	return (
		<>
			<h1>this is Contacts page</h1>
			<ul>
				{
					array.map((element, idx) => {
						return <li key={idx}>{element.name}</li>
					})
				}
			</ul>
		</>
	);
}

export default Contacts;