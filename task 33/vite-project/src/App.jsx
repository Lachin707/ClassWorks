import { useState } from "react";

import Num1 from "./components/Num1.jsx";
import Num2 from "./components/Num2.jsx";
import Plus from "./components/Plus.jsx";
import Minus from "./components/Minus.jsx";
import Mult from "./components/Mult.jsx";
import Div from "./components/Div.jsx";
import Output from "./components/Output.jsx";
import "./components/design.css";


function App() {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  let [output, setOutput] = useState(0);

	return (
		<>
			<Num1 num1={num1} setNum1={setNum1}/>
			<Num2 num2={num2} setNum2={setNum2}/>
			<Plus num1={num1} num2={num2} setOutput={setOutput}/>
			<Minus num1={num1} num2={num2} setOutput={setOutput}/>
			<Mult num1={num1} num2={num2} setOutput={setOutput}/>
			<Div num1={num1} num2={num2} setOutput={setOutput}/>
			<Output num={output}/>
		</>
	);
}

export default App;
