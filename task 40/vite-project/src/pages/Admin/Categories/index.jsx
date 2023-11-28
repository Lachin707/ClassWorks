import { Button, Container, Table } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Categories() {
	const [gettedData, setGettedData] = useState([]);
	useEffect(() => {
		axios("https://northwind.vercel.app/api/categories").then((res) => setGettedData(res.data));
	}, []);

	return (
		<Container>
			this is Catigories page
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Description</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{gettedData.map((item) => {
						return (
							<tr>
								<td>{item.id}</td>
								<td>{item.name}</td>
								<td>{item.description}</td>
								<td>
									<Link to={`/admin/categories/${item.id}`}>
										<Button>Details</Button>
									</Link>
								</td>
							</tr>
						);
					})}
				</tbody>
			</Table>
		</Container>
	);
}

export default Categories;
