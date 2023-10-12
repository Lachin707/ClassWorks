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
