
function Div({num1, num2, setOutput }) {

    function doDiv() {
        setOutput(num1 / num2)
    }

    return (
        <>
            <button onClick={doDiv}>div</button>
        </>
    )
}
export default Div;