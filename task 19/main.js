let currentYear = Number(moment().format("YYYY"));

class Human {
	#birthYear;
	constructor(name, surname, birthYear, birthPlace) {
		this.name = name;
		this.surname = surname;
		this.#birthYear = birthYear;
		this.birthPlace = birthPlace;
		this.getFullName = function (name, surname) {
			return this.name + " " + this.surname;
		};
		this.getAge = function () {
			return currentYear - this.#birthYear;
		};
	}
	
	get fullname() {
		return this.name + " " + this.surname;
	}

	get age() {
		return currentYear - this.#birthYear;
	}

	static compareAge(firstHuman, secondHuman) {
		if (firstHuman.age > secondHuman.age) {
			return firstHuman;
		} else {
			return secondHuman;
		}
	}

	static compareSameBirthCity(firstHuman, secondHuman) {
		if (firstHuman.birthPlace == secondHuman.birthPlace) {
			return true;
		} else {
			return false;
		}
	}
}


class User extends Human{
	#password;
	constructor(name, surname, birthYear, birthPlace, username, email, password, isLogged = false) {
		super(name, surname, birthYear, birthPlace);
		this.username = username;
		this.email = email;
		this.#password = function () {
			let str1 = "";
			str1 = this.birthPlace.charAt(0).toUpperCase() + this.birthPlace.charAt(1).toUpperCase() + this.birthYear;
			console.log(str1);
			return str1;
		};
		this.isLogged = isLogged;
		this.login = function (gusername, gpassword) {
			if (this.username == gusername && this.password == gpassword){
				this.isLogged = true;
				alert("welcome back fullName");
			}
			else{
				alert("error");
			}
		}
	}

}
let human1 = new User("Lachin", "Lachinov", 2000, "Khudat", "Skill707", "llachin707@gmail.com");
console.log(human1);
let human2 = new User("Aydin", "Lachinov", 2005, "Khudat", "Aydin777", "aydin@mail.ru");
console.log(human2);

//human1.login("Skill707", "KH2000");
