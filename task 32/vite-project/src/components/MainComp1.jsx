import { array } from "./data";

function MainComp1() {
	return (
		<>
			<table className="my-table">
				<tr>
					<th>id</th>
					<th>title</th>
					<th>price</th>
					<th>category</th>
					<th>rate</th>
					<th>count</th>
				</tr>
				{array.map((element, idx) => {
					return (
						<tr key={idx}>
							<td>{element.id}</td>
							<td>{element.title}</td>
							<td>{element.price}</td>
							<td>{element.category}</td>
							<td>{element.rating.rate}</td>
							<td>{element.rating.count}</td>
						</tr>
					);
				})}
			</table>
		</>
	);
}

export default MainComp1;
