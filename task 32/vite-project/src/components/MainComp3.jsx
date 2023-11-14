import { array } from "./data";
let array2 = array.sort((a, b) => b.rating.rate - a.rating.rate);
console.log(array2);
let element = array2[0];
console.log("🚀 ~ file: MainComp3.jsx:5 ~ element:", element);

function MainComp3() {
	return (
		<>
			<div>
				<p>{element.id}</p>
				<p>{element.title}</p>
				<p>{element.price}</p>
				<p>{element.category}</p>
				<p>{element.rating.rate}</p>
				<p>{element.rating.count}</p>
			</div>
		</>
	);
}

export default MainComp3;
