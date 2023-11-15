function Num1({ num1, setNum1 }) {

	function doNum1(e) {
		setNum1(Number(e.target.value));
	}
    
	return (
		<>
			<label>num1 </label>
			<input type="number" placeholder="number" value={num1} onChange={doNum1} />
		</>
	);
}
export default Num1;
