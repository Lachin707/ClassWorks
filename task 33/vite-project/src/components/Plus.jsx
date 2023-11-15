
function Plus({num1, num2, setOutput }) {

    function doPlus() {
        setOutput(num1 + num2)
    }

    return (
        <>
            <button onClick={doPlus}>plus</button>
        </>
    )
}
export default Plus;