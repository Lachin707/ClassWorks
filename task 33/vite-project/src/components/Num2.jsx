function Num2({ num2, setNum2 }) {

	function doNum2(e) {
		setNum2(Number(e.target.value));
	}

    return (
        <>
            <label>num2 </label>
            <input type="number" placeholder="number" value={num2} onChange={doNum2}/>
        </>
    )
}
export default Num2;