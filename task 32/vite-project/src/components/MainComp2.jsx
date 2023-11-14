import { array } from "./data";
let array2 = array.sort((a, b) => b.price - a.price);


function MainComp2() {
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
				{array2.map((element, idx) => {
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

export default MainComp2;
