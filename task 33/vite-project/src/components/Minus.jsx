
function Minus({num1, num2, setOutput }) {

    function doMinus() {
        setOutput(num1 - num2)
    }

    return (
        <>
            <button onClick={doMinus}>minus</button>
        </>
    )
}
export default Minus;