//task 28
function powArray(array, num) {
	let outputArray = [];
	for (let index = 0; index < array.length; index++) {
		outputArray.push(Math.pow(array[index], num));
	}
	return outputArray;
}

let array1 = [1, 5, 3, 5, 6];

console.log(powArray(array1, 2));

//task 29

function checkArrayNumbers(array) {
	let sum = 0;
	for (let index = 0; index < array.length; index++) {
		if (array[index] >= 0) {
			sum += array[index];
		}
	}
	return sum;
}

let array2 = [-1, 5, -3, 5, -6];
console.log(checkArrayNumbers(array2));

//task 30

function arrayMedian(array) {
	let arrayMin = Math.min(...array);
	let arrayMax = Math.max(...array);
	console.log(arrayMin);
	console.log(arrayMax);
	let avg = (arrayMin + arrayMax) / 2;
	let obj = {};
	Object.assign(obj, { answer: avg });
	return obj;
}

console.log(arrayMedian(array2));

//task 31

function splitUpperCase(str) {
	let opStr = "";
	console.log(str);
	if (str[0] == str[0].toLocaleUpperCase()) {
		opStr += str[0];
	}
	for (let index = 0; index < str.length; index++) {
		if (str[index] == " ") {
			if (str[index + 1] == str[index + 1].toLocaleUpperCase()) {
				opStr += str[index + 1];
			}
		}
	}
	return opStr;
}

let str1 = "My Name is Gurban";

console.log(splitUpperCase(str1));

//task 32

function formatTest(str) {
	let opStr = "";
	console.log(str);
	let nextWordStartIndex = 0;
	for (let index = 0; index < str.length; index++) {
		if (str[index] == " " || str[index] == ".") {
			if (index >= 4) {
				opStr += str[nextWordStartIndex];
				opStr += String(index - nextWordStartIndex - 2);
				opStr += str[index - 1];
			} else {
				opStr += str[index - 3];
				opStr += str[index - 2];
				opStr += str[index - 1];
			}
			opStr += " ";
			nextWordStartIndex = index + 1;
		}
	}
	return opStr;
}

let str2 = "Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin.";

console.log(formatTest(str2));

//task 34

console.log("task 34");
function NFact(num) {
	let out=1;
	for (let index = 1; index < num; index++) {
		out *= index;
	}
	return out;
}
for (let index = 0; index < 6; index++) {
	console.log(NFact(index));
}

//task 35

const input = [
	["a", "b", "c"],
	["c", "d", "f"],
	["d", "f", "g"],
];

console.log(input);

let array7 = [];

for (let index = 0; index < input.length; index++) {
	array7.push(...input[index]);
}

let obj = {};

for (let index = 0; index < array7.length; index++) {
	obj[`${array7[index]}`] = 0;
}

for (let index = 0; index < array7.length; index++) {
	obj[`${array7[index]}`]++;
}

console.log(obj);
