/*
console.log("task 1");

let str1 =
	"Verilmiş_string-dəki_bütün _ (underscore-ları) - (dash)_ilə_əvəz_edin.".replaceAll(
		"_",
		"-"
	);

console.log(str1);

console.log("task 2");

toLwrCase = (str) => {
	return str.toLowerCase();
};

console.log(toLwrCase("sSAASDFDssds"));

console.log("task 3");

let strTrim = function (str) {
	let array = [];
	let str1 = str.trim();
	array.push(...str1);
	return array;
};

console.log(strTrim("  hey  "));

console.log("task 4");

textFormat = (str) => {
	return str.toLowerCase().replaceAll(" ", "-");
};

console.log(textFormat("Robin Singh from USA"));

console.log("task 5");

function textCap(str) {
	let str1 = str.charAt(0).toUpperCase() + str.slice(1);
	return str1;
}

console.log(textCap("js string exercises"));

console.log("task 6");

let UpperCaseCount = function (str = "") {
	let count = 0;
	for (let index = 0; index < str.length; index++) {
		if (str.charAt(index) == str.charAt(index).toUpperCase()) {
			count++;
		}
	}
	return count;
};

console.log(UpperCaseCount("Robin Singh from USA"));

console.log("task 7");

function findWord(str1, str2) {
	let answer = {};
	let index = str2.search(str1);

	if (index == -1) {
		Object.assign(answer, {
			isFound: false,
			index: index,
		});
	} else {
		Object.assign(answer, {
			isFound: true,
			index: index,
		});
	}
	return answer;
}

console.log(findWord("string", "js string exercises"));

console.log("task 8");

function Human(name, surname, birthYear, birthCity) {
	(this.name = name),
		(this.surname = surname),
		(this.birthYear = birthYear),
		(this.birthCity = birthCity),
		(this.getFullName = function (name, surname) {
			return this.name + " " + this.surname;
		});
}

let human1 = new Human("Lachin", "Lachinov", 2000, "Khudat");
let human2 = new Human("Aydin", "Lachinov", 2005, "Khudat");
let human3 = new Human("Shahriyar", "Yagubi", 2002, "Baku");
let human4 = new Human("Zaur", "Alishov", 2000, "Sumgait");
let human5 = new Human("Jupiluxe", "ThePullOff", 2022, "Single");

let people = [human1, human2, human3, human4, human5];
console.log(people);

function searchByFullName(str, arr) {
	let array = [];
	let searchIndex = 0;
	for (let index = 0; index < arr.length; index++) {
		let str1 = arr[index].getFullName();
		searchIndex = str1.search(str);
		if (searchIndex >= 0) array.push(arr[index]);
	}
	if (searchIndex == -1) {
		alert("cant find");
	} else {
		return array;
	}
}

searchByFullName(prompt(), people)

*/

console.log("customLength");

function customLength(str) {
	let count = -1;
	do {
		count++;
	} while (str[count] != undefined);
	return count;
}

console.log(customLength("Hello World!"));

console.log("mathAbs");
function mathAbs(num) {
	if (num < 0) num *= -1;
	return num;
}
console.log(mathAbs(5));

console.log("customRepeat");
function spRepeat(num1, num2) {
	let num3 = 0;
	let div = num1 / num2;
	div = mathAbs(div);
	if (num1 <= num2) {
		num3 = num1;
	} else {
		num3 = num1 - num2;
		num3 = mathAbs(num3);
		if (div > 2) num3 -= num2;
		if (div > 3) num3 -= num2;
	}
	if (num1 < 0) {
		num3 = num2 + num3;
		if (div > 1) num3 += num2;
		if (div > 2) num3 += num2;
	}

	return num3;
}

console.log(spRepeat(-800, 360));





console.log("customSlice");

function customSlice(str, num1 = 0, num2 = 0) {
	let str2 = "";
	let num3 = spRepeat(num1, customLength(str));
	let num4 = spRepeat(num2, customLength(str));
	console.log(`${num3} ${num4}`);
	if (num2 == 0) {
		for (let index = 0; index < customLength(str) - num3; index++) {
			str2 += str[num3 + index];
		}
	} else {
		for (let index = 0; index < num4 - num3; index++) {
			str2 += str[num3 + index];
		}
	}
	return str2;
}

console.log(customSlice("Apple, Banana, Kiwi", -12, -6));