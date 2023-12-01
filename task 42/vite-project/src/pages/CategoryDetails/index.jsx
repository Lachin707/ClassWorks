import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CategoryDetails() {
	let url = useParams();
	const [gettedData, setGettedData] = useState([]);
	useEffect(() => {
		axios(`https://northwind.vercel.app/api/categories/${url.id}`).then((res) => setGettedData(res.data));
	}, []);

	return (
		<section  className="container">
			
		</section>
	);
}
