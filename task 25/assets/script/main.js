let resetBtn = document.querySelector(".reset-btn");
let gameBtns = document.querySelectorAll("#item");
let headMid = document.querySelector(".head-mid");
let xScore = document.querySelector("#x-score");
let ties = document.querySelector("#ties");
let oScore = document.querySelector("#o-score");


let countSwich = 0;

if (countSwich % 2 == 1) {
	headMid.firstElementChild.style.display = "none";
	headMid.firstElementChild.nextElementSibling.style.display = "block";
} else {
	headMid.firstElementChild.nextElementSibling.style.display = "none";
	headMid.firstElementChild.style.display = "block";
}

let array = [];
for (let index = 0; index < 9; index++) {
	array.push("none");
}
console.log(array);

let arrayWinCase = [true, true, true, false, false, false, false, false, false];

for (let index = 0; index < gameBtns.length; index++) {
	let btn = gameBtns[index];

	btn.firstElementChild.style.opacity = "0";
	btn.firstElementChild.nextElementSibling.style.opacity = "0";

	btn.onclick = function () {
		if (
			btn.firstElementChild.style.opacity == "0" &&
			btn.firstElementChild.nextElementSibling.style.opacity == "0"
		) {
			if (countSwich % 2 == 0) {
				btn.firstElementChild.style.opacity = "1";
				array[index] = true;
			} else {
				btn.firstElementChild.nextElementSibling.style.opacity = "1";
				array[index] = false;
			}
			countSwich++;
		}

		if (countSwich % 2 == 1) {
			headMid.firstElementChild.style.display = "none";
			headMid.firstElementChild.nextElementSibling.style.display = "block";
		} else {
			headMid.firstElementChild.nextElementSibling.style.display = "none";
			headMid.firstElementChild.style.display = "block";
		}

		console.log(array);

        let as = array.toString();
        
        let xWin = as.search("true,true,true");
        let oWin = as.search("false,false,false");
    
        console.log(`xWin${xWin} oWin ${oWin}`);
	};
}

resetBtn.onclick = function () {
	gameBtns.forEach((btn) => {
		btn.firstElementChild.style.opacity = "0";
		btn.firstElementChild.nextElementSibling.style.opacity = "0";
	});
	countSwich = 0;
	if (countSwich % 2 == 1) {
		headMid.firstElementChild.style.display = "none";
		headMid.firstElementChild.nextElementSibling.style.display = "block";
	} else {
		headMid.firstElementChild.nextElementSibling.style.display = "none";
		headMid.firstElementChild.style.display = "block";
	}
};
