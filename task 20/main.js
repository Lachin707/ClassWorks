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
	let out = 1;
	for (let index = 1; index < num; index++) {
		out *= index;
	}
	return out;
}
for (let index = 0; index < 6; index++) {
	console.log(NFact(index));
}

//task 35
console.log("task 35");

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

console.log("task 36");

const students = [
	{ name: "Ali", scores: [90, 85, 92] },
	{ name: "Mammal", scores: [75, 80, 85] },
	{ name: "Camil", scores: [90, 95, 85] },
	{ name: "Davud", scores: [100, 100, 100] },
];

for (let index = 0; index < students.length; index++) {
	Object.assign(students[index], {
		avgScore: function () {
			console.log(this.scores);
			let sum = 0;
			for (let index = 0; index < this.scores.length; index++) {
				sum += this.scores[index];
			}
			return sum / this.scores.length;
		},
	});
}

let avgScores = [];

for (let index = 0; index < students.length; index++) {
	avgScores.push(students[index].avgScore());
}

avgScores.sort((a, b) => a - b);
console.log(avgScores);

console.log("ortalaması ən yüksək olan " + students[avgScores.length - 1].name);

console.log("ortalaması 90-dan yuxarı olanı");

for (let index = 0; index < avgScores.length; index++) {
	if (avgScores[index] > 90) console.log(students[index]);
}

avgScores.reverse();
for (let index = avgScores.length - 2; index >= 0; index--) {
	console.log(students[index]);
}

console.log("task 37");

const products = [
	{ name: "one Product 1", price: 20, category: "Electronics" },
	{ name: "two Product 2", price: 30, category: "Clothes" },
	{ name: "three Product 3", price: 40, category: "Electronics" },
	{ name: "four Product 4", price: 50, category: "Clothes" },
	{ name: "five Product 5", price: 60, category: "Clothes" },
	{ name: "six Product 6", price: 70, category: "Electronics" },
	{ name: "seven Product 7", price: 80, category: "Clothes" },
	{ name: "eight Product 8", price: 90, category: "Electronics" },
];

//let findWord = prompt("ada görə axtarış");

let findWord = "s";

console.log(products.filter(({ name }) => name.includes(findWord)));

let min = 20,
	max = 60;

console.log(products.filter(({ price }) => min <= price && price <= max));

let findWord3 = "El";

console.log(products.filter(({ category }) => category.includes(findWord3)));

let cs = "";
for (let index = 0; index < products.length; index++) {
	cs = products[index].name + products[index].category + products[index].price;
	if (cs.search(findWord3) >= 0) console.log(products[index]);
}

console.log("task 38");

const employees = [
	{ name: "Jamil", salary: 50000, department: "IT" },
	{ name: "Jale", salary: 60000, department: "HR" },
	{ name: "Bayram", salary: 55000, department: "IT" },
	{ name: "Sahil", salary: 75000, department: "HR" },
	{ name: "Maryam", salary: 65000, department: "IT" },
	{ name: "Elnara", salary: 80000, department: "HR" },
	{ name: "Davud", salary: 70000, department: "IT" },
];

console.log(employees.filter(({ salary }) => salary >= 65000));

console.log(employees.sort((a, b) => a.salary - b.salary));
console.log(employees.sort((a, b) => a.salary - b.salary).reverse());

console.log("task 39");

let arrayData = [
	[1, 5, 4, 5],
	[435, 665, 345, 342],
	[
		[342, 543, 366],
		[345, 654, 234],
	],
];

// let count = 0;
// let layer = 0;
// let end = false;
// do {
// 	let currentArrayData = arrayData[2];
// 	for (let index = 0; index < currentArrayData.length; index++) {
// 		if (Array.isArray(currentArrayData[index])) count++;
// 	}
// } while (end == false);

console.log(count);
