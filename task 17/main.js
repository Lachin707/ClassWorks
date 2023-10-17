// task 1
function sum(a, b) {
	return a + b;
}

function dec(a, b) {
	return a - b;
}

function mult(a, b) {
	return a * b;
}

function div(a, b) {
	return a / b;
}

// task 2

function math(a, b, c) {
	switch (key) {
		case b == "+":
			return sum(a, c);
			break;
		case b == "-":
			return a - c;
			break;
		case b == "*":
			return a * c;
			break;
		case b == "/":
			return a / c;
			break;
		default:
			break;
	}
}

// task 3

//#data
const data = [
	{
		iso2: "AF",
		iso3: "AFG",
		country: "Afghanistan",
		cities: [
			"Herat",
			"Kabul",
			"Kandahar",
			"Molah",

			"Rana",
			"Shar",
			"Sharif",
			"Wazir Akbar Khan",
		],
	},
	{
		iso2: "AL",
		iso3: "ALB",
		country: "Albania",
		cities: [
			"Elbasan",

			"Petran",
			"Pogradec",
			"Shkoder",
			"Tirana",
			"Ura Vajgurore",
		],
	},
	{
		iso2: "DZ",
		iso3: "DZA",
		country: "zAlgeria",

		cities: [
			"Algiers",
			"Annaba",
			"Azazga",
			"Batna City",
			"Blida",
			"Bordj",
			"Bordj Bou Arreridj",
			"Bougara",
			"Cheraga",
			"Chlef",
			"Constantine",

			"Djelfa",
			"Draria",
			"El Tarf",

			"Hussein Dey",

			"Illizi",
			"Jijel",
			"Kouba",
			"Laghouat",
			"Oran",
			"Ouargla",
			"Oued Smar",
			"Relizane",
			"Rouiba",
			"Saida",
			"Souk Ahras",

			"Tamanghasset",
			"Tiaret",
			"Tissemsilt",
			"Tizi",
			"Tizi Ouzou",
			"Tlemcen",
		],
	},
	{
		iso2: "AD",
		iso3: "AND",
		country: "cAndorra",

		cities: [
			"Andorra la Vella",
			"Canillo",
			"Encamp",
			"Engordany",

			"Escaldes-Engordany",
			"La Massana",
			"Llorts",
			"Ordino",
			"Santa Coloma",
			"Sispony",

			"Soldeu",
		],
	},
	{
		iso2: "AO",
		iso3: "AGO",
		country: "Angola",
		cities: [
			"Ambriz",
			"Benguela",
			"Cabinda",
			"Cacole",

			"Camabatela",
			"Cazeta",
			"Huambo",

			"Kuito",

			"Lobito",
			"Luanda",
			"Lubango",
			"Lucapa",
			"Lumeje",
			"Malanje",
			"Menongue",
			"Muxaluando",
			"Namibe",
			"Ondjiva",
			"Piri",

			"Saurimo",
			"Talatona",
		],
	},
	{
		iso2: "AI",
		iso3: "AIA",
		country: "bAnguilla",
		cities: [
			"The Valley",
			"Blowing Point Village",
			"Sandy Ground Village",

			"Sandy Hill",
			"East End Village",
			"George Hill",
			"Island Harbour",
			"North Hill Village",
			"North Side",
			"South Hill Village",
			"Stoney Ground",
			"Farrington",
			"The Quarter",
			"West End Village",
		],
	},
	{
		iso2: "AG",
		iso3: "ATG",
		country: "Antigua and Barbuda",
		cities: [
			"All Saints",
			"Cassada Gardens",
			"Codrington",
			"Old Road",
			"Parham",

			"Woods",
		],
	},
];
//#end data

//task 3
function returnCountries(DataArray) {
	let array = [];
	for (let index = 0; index < DataArray.length; index++)
		array.push(DataArray[index].country);
	return array;
}
console.log(returnCountries(data));

// task 4
function returnCountriesFirstSymbolCount(DataArray) {
	let SymbolCount = {};
    let hello;
    for (let index = 0; index < DataArray.length; index++) {
        hello = DataArray[index][0];
        Object.assign(SymbolCount, 
            {
                hello : 2
            }
        );
    }



	return SymbolCount;
}

console.log(returnCountriesFirstSymbolCount(returnCountries(data)));
/*
// task 5
function biggestCountry(Data) {
	let indexOfMax = 0;
	for (let index = 0; index < Data.length; index++)
		if (Data[index].cities.length > Data[indexOfMax].cities.length)
			indexOfMax = index;
	return Data[indexOfMax].country;
}

console.log(biggestCountry(data));

// task 6
*/
