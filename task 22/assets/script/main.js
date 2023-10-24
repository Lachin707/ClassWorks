let screen = document.querySelector("#screen");
let item1 = document.querySelector("#item1");
let item2 = document.querySelector("#item2");
let item3 = document.querySelector("#item3");
let item4 = document.querySelector("#item4");
let item5 = document.querySelector("#item5");
let item6 = document.querySelector("#item6");
let item7 = document.querySelector("#item7");
let item8 = document.querySelector("#item8");
let item9 = document.querySelector("#item9");
let item0 = document.querySelector("#item0");
let itemDot = document.querySelector("#itemDot");
let multOper = document.querySelector("#mult-oper");
let minOper = document.querySelector("#min-oper");
let sumOper = document.querySelector("#sum-oper");
let eq = document.querySelector("#eq");

item1.addEventListener("click", (event) => {
	screen.innerText += item1.innerText;
});

item2.addEventListener("click", (event) => {
	screen.innerText += item2.innerText;
});

item3.addEventListener("click", (event) => {
	screen.innerText += item3.innerText;
});

item4.addEventListener("click", (event) => {
	screen.innerText += item4.innerText;
});

item5.addEventListener("click", (event) => {
	screen.innerText += item5.innerText;
});

item6.addEventListener("click", (event) => {
	screen.innerText += item6.innerText;
});

item7.addEventListener("click", (event) => {
	screen.innerText += item7.innerText;
});

item8.addEventListener("click", (event) => {
	screen.innerText += item8.innerText;
});

item9.addEventListener("click", (event) => {
	screen.innerText += item9.innerText;
});

item0.addEventListener("click", (event) => {
	screen.innerText += item0.innerText;
});

sumOper.addEventListener("click", (event) => {
	screen.innerText += sumOper.innerText;
});

multOper.addEventListener("click", (event) => {
	screen.innerText += "*";
});

minOper.addEventListener("click", (event) => {
	screen.innerText += minOper.innerText;
});

eq.addEventListener("click", (event) => {
	let leftNum = "",
		leftNumStartIndex,
		leftNumEndIndex,
		rightNum = "",
		rightNumStartIndex,
		rightNumEndIndex,
		OperIndex =0,
		NextOperIndex,
        sum = 0; 
	for (let index = 0; index < screen.innerText.length; index++) {
		if (screen.innerText[index] == "+") {
			console.log("do +");
			leftNumStartIndex = OperIndex;
            OperIndex = index;
			leftNumEndIndex = OperIndex;
			for (let i = leftNumStartIndex; i < leftNumEndIndex; i++) {
				leftNum += screen.innerText[i];
			}
			console.log("leftNum " + leftNum);

			for (let j = leftNumEndIndex + 1; j < screen.innerText.length; j++) {
				if (
					screen.innerText[j] == "+" ||
					screen.innerText[j] == "-" ||
					screen.innerText[j] == "*"
				) {
					NextOperIndex = j;
					break;
				}
			}
            let text2 = screen.innerText[NextOperIndex];

			if (NextOperIndex == undefined) {
				NextOperIndex = screen.innerText.length;
                text2 = "";
			}
			console.log("NextOperIndex " + NextOperIndex);

			rightNumStartIndex = OperIndex + 1;
			rightNumEndIndex = NextOperIndex;
			console.log("rightNumEndIndex" + rightNumEndIndex);
			for (let i = rightNumStartIndex; i < rightNumEndIndex; i++) {
				rightNum += screen.innerText[i];
			}
			console.log("rightNum " + rightNum);

            sum = sum + Number(leftNum) + Number(rightNum);

		}
	}

    screen.innerText = sum;
});
