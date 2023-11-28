import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, CardFooter, CardHeader, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function CategoryDetails() {
	let url = useParams();
	const [gettedData, setGettedData] = useState([]);
	useEffect(() => {
		axios(`https://northwind.vercel.app/api/categories/${url.id}`).then((res) => setGettedData(res.data));
	}, []);

	return (
		<Container>
			<Link to={`/admin/categories`}>
				<Button>Go back</Button>
			</Link>
			<p>this is CategoryDetails id: {url.id}</p>
			<Card>
				<CardHeader>{gettedData.name}</CardHeader>
				<CardFooter>{gettedData.description}</CardFooter>
			</Card>
		</Container>
	);
}

export default CategoryDetails;
