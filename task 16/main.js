let num1, num2, num3;
/*
do {
	num1 = Number(prompt("Enter 3 nubmers. First nubmer:"));
} while (isNaN(num1));

do {
	num2 = Number(prompt("Enter 3 nubmers. Second nubmer:"));
} while (isNaN(num2));

do {
	num3 = Number(prompt("Enter 3 nubmers. Third nubmer:"));
} while (isNaN(num3));


if (num1 < (num2 + num3)) {
    alert("bu ədədlər üçbucağın tərəfidi")
}
else if (num2 < (num1 + num3)){
    alert("bu ədədlər üçbucağın tərəfidi")
}
else if (num3 < (num1 + num2)){
    alert("bu ədədlər üçbucağın tərəfidi")
}
else{
    alert("bu ədədlər üçbucağın tərəfi deyil")
}

// task 2

do {
	num1 = Number(prompt("Enter 3 nubmers. First nubmer:"));
} while (isNaN(num1));

do {
	num2 = Number(prompt("Enter 3 nubmers. Second nubmer:"));
} while (isNaN(num2));

do {
	num3 = Number(prompt("Enter 3 nubmers. Third nubmer:"));
} while (isNaN(num3));

if (num1 == num2 && num2 == num3 && num1 == num3) {
    alert("bu ədədlər bərabərtərəfli üçbucağın tərəfidi")
}
else{
    alert("bu ədədlər bərabərtərəfli üçbucağın tərəfi deyil")
}

// task 3

do {
	num1 = Number(prompt("Enter 3 nubmers. First nubmer:"));
} while (isNaN(num1));

do {
	num2 = Number(prompt("Enter 3 nubmers. Second nubmer:"));
} while (isNaN(num2));

if (num1 == num2){
    alert("equals");
}
if (num1 > num2){
    alert("num1");
}
else if (num2 > num1){
    alert("num2");
}

// task4

do {
	num1 = Number(prompt("Enter 3 nubmers. First nubmer:"));
} while (isNaN(num1));

do {
	num2 = Number(prompt("Enter 3 nubmers. Second nubmer:"));
} while (isNaN(num2));

do {
	num3 = Number(prompt("Enter 3 nubmers. Third nubmer:"));
} while (isNaN(num3));

if (num1 == num2 && num2 == num3 && num1 == num3){
    alert("equals");
}
else if (num1 > num2 & num1 > num3){
    alert("num1");
}
else if (num2 > num1 & num2 > num3){
    alert("num2");
}
else if (num3 > num1 & num3 > num2){
    alert("num3");
}
*/
// task5
/*
let str1;

do {
	num1 = Number(prompt("Enter 3 nubmers. First nubmer:"));
} while (isNaN(num1));

do {
	num2 = Number(prompt("Enter 3 nubmers. Second nubmer:"));
} while (isNaN(num2));

do {
	num3 = Number(prompt("Enter 3 nubmers. Third nubmer:"));
} while (isNaN(num3));

if (num1 == num2 && num2 == num3 && num1 == num3){
    str1 = `${num1} ${num2} ${num3}`;
}
else if (num1 > num2 & num1 > num3){
    str1 = `${num1} `;
    if (num2 > num3){
        str1 = `${str1} ${num2} ${num3}`;
    }
    else{
        str1 = `${str1} ${num3} ${num2}`;
    }
}
else if (num2 > num1 & num2 > num3){
    str1 = `${num2} `;
    if (num1 > num3){
        str1 = `${str1} ${num1} ${num3}`;
    }
    else{
        str1 = `${str1} ${num3} ${num1}`;
    }
}
else if (num3 > num1 & num3 > num2){
    str1 = `${num3} `;
    if (num1 > num2){
        str1 = `${str1} ${num1} ${num2}`;
    }
    else{
        str1 = `${str1} ${num2} ${num1}`;
    }
}

alert(str1);

// task 5.2

do {
	num1 = Number(prompt("Enter 3 nubmers. First nubmer:"));
} while (isNaN(num1));

do {
	num2 = Number(prompt("Enter 3 nubmers. Second nubmer:"));
} while (isNaN(num2));

do {
	num3 = Number(prompt("Enter 3 nubmers. Third nubmer:"));
} while (isNaN(num3));

if (num1 == num2 && num2 == num3 && num1 == num3){
    str1 = `${num1} ${num2} ${num3}`;
}
else if (num1 < num2 & num1 < num3){
    str1 = `${num1} `;
    if (num2 < num3){
        str1 = `${str1} ${num2} ${num3}`;
    }
    else{
        str1 = `${str1} ${num3} ${num2}`;
    }
}
else if (num2 < num1 & num2 < num3){
    str1 = `${num2} `;
    if (num1 < num3){
        str1 = `${str1} ${num1} ${num3}`;
    }
    else{
        str1 = `${str1} ${num3} ${num1}`;
    }
}
else if (num3 < num1 & num3 < num2){
    str1 = `${num3} `;
    if (num1 < num2){
        str1 = `${str1} ${num1} ${num2}`;
    }
    else{
        str1 = `${str1} ${num2} ${num1}`;
    }
}

alert(str1);



// task 6

str1 = prompt("salam. bilet almaq isteyirsiz?");

if (str1="beli"){
    
}
else{
    alert("onda tullan burdan")
}

*/

/*
do{
    again = false;

    do {
        a = Number(prompt("Enter a nubmer:"));
    } while (isNaN(a));
    
    switch (a) {
        case 1:
            b = "January";
            alert(b);
            break;
        case 2:
            b = "February";
            alert(b);
            break;
        case 3:
            b = "March";
            alert(b);
            break;
        case 4:
            b = "April";
            alert(b);
            break;
        case 5:
            b = "May";
            alert(b);
            break;
        case 6:
            b = "June";
            alert(b);
            break;
        case 7:
            b = "July";
            alert(b);
            break;
        case 8:
            b = "August";
            alert(b);
            break;
        case 9:
            b = "September";
            alert(b);
            break;
        case 10:
            b = "October";
            alert(b);
            break;
        case 11:
            b = "November";
            alert(b);
            break;
        case 12:
            b = "December";
            alert(b);
            break;
        default:
            alert("wrong input");
            again = true;
    }
        
}while(again);
*/
/*
console.log("task1");

for (let index = 10; index < 99; index++)
	if (String(index)[1] == "7") console.log(index);

console.log("task2");

for (let index = 10; index < 99; index++)
	if (String(index)[0] == String(index)[1]) console.log(index);
*/
/*
console.log("task3");

let a = prompt("task3. Enter a nubmer:"); 

let str1 = "";
for (let index = 0; index < a.length; index++) str1 += ((a[index]) + " ");

console.log(str1);

console.log("task4");

let numbers = prompt("task4. Enter a nubmer:");
let max = 0;
let index;

for (index = 0; index < numbers.length; index++)
	if (numbers[index] > max) max = numbers[index];

console.log(String(max));
*/

/*
console.log("task5");

let a = prompt("task5. Enter a nubmer:"); 
let sum = 0;
let has = 1;
let mid = 0;

for (let index = 0; index < a.length; index++) {
    sum += Number(a[index]);
    has *= Number(a[index]);
}

mid = sum;
mid /= a.length;

console.log(String(sum));
console.log(String(has));
console.log(String(mid));
*/

/*
console.log("task 6 & 7");

let number = Number(prompt("task 6 & 7. Enter a nubmer:"));
let str1 = "";
let count = 0;

for (let index = 0; index < number; index++) 
    if (number % index == 0) {
        str1 += (String(index) + " ");
        count++;
    };
    
console.log(str1);
console.log(count);
*/

/*
console.log("task8");

let arr=[3,8,2,5,4,10,7,6];
let str1 ="";

for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 == 1) {
        str1 += (String(index) + " ");
    }
}

console.log(str1);
*/

/*
console.log("task9");

let arr=[3,8,2,5,4,10,7,6];
let str1 ="";

for (let index = 0; index < arr.length; index++) {
    if (index % 2 == 1) {
        str1 += (String(arr[index]) + " ");
    }
}

console.log(str1);
*/

/*
console.log("task 10");

let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let max = 0;

for (let index = 0; index < arr.length; index++)
	if (arr[index] > max) max = arr[index];

console.log(max);
*/

/*
console.log("task 11");
let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let max = 0;

for (let index = 0; index < arr.length; index++)
	if (arr[index] > max && arr[index] % 2 == 0) max = arr[index];

console.log(max);
*/
/*
console.log("task 12");
let arr = [3, 8, 2, 5, 4, 10, 7, 6];
let min = 999;
let i = 0;

for (let index = 0; index < arr.length; index++)
	if (arr[index] < min) {
        min = arr[index];
        i = index
    }

console.log(i);
*/


let numbers = [
	1, 4, 2, 6, 8, 2, 1, 7, 7, 5, 11, 11, 14, 13, 15, 15, 15, 15, 15, 99999,
	99999,
];
let array = [];

for (let index = 0; index < numbers.length; index++) array[numbers[index]] = 0;
for (let index = 0; index < numbers.length; index++) array[numbers[index]]++;

let str1 = "";
let count = 0;
for (let index = 0; index < array.length; index++) {
	if (!isNaN(array[index]) && array[index] > 1) {
		str1 += String(index) + ": " + String(array[index]) + "  ";
		count++;
	}
}
alert(str1 + `count: ${count}`);