
function Mult({num1, num2, setOutput }) {

    function doMult() {
        setOutput(num1 * num2)
    }

    return (
        <>
            <button onClick={doMult}>mult</button>
        </>
    )
}
export default Mult;