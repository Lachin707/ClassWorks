let searchInput = document.querySelector("#searchInput");
let cardsWrapper = document.querySelector(".cards-wrapper");
let cards = document.querySelectorAll(".my-card");
let select = document.querySelector("select");

let API_URL = "https://restcountries.com/v3.1/all";

let GETTED_DATA = [];
let sortedData = [];
let foundArr = [];
let sortType = 0;

fetch(API_URL)
	.then((response) => response.json())
	.then((data) => {
		GETTED_DATA = data;
	})
	.catch(() => {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Something went wrong!",
			footer: '<a href="">Why do I have this issue?</a>',
		});
	})
	.finally(() => {
		GETTED_DATA.forEach((element) => {
			cardsWrapper.innerHTML += `
					<div class="my-card card col-3">
						<img src="${element.flags.png}">
						<p>country: ${element.name.common}</p>
						<p>capital: ${element.capital}</p>
						<p>population: ${element.population}</p>
					</div>
					`;
		});
	});

searchInput.onchange = async function () {
	foundArr = GETTED_DATA.filter((item) =>
		item.name.common
			.toLowerCase()
			.trim()
			.includes(searchInput.value.trim().toLowerCase())
	);

	if (sortType == "0") {
		sortedData = foundArr;
	}

	if (sortType == "1") {
		sortedData = foundArr.sort((a, b) =>
			a.name.common.localeCompare(b.name.common)
		);
	}

	if (sortType == "2") {
		sortedData = foundArr.sort((a, b) =>
			b.name.common.localeCompare(a.name.common)
		);
	}

	if (sortType == "3") {
		sortedData = foundArr.sort((a, b) => b.population - a.population);
	}

	if (sortType == "4") {
		sortedData = foundArr.sort((a, b) => a.population - b.population);
	}

	cardsWrapper.innerHTML = "";
	sortedData.forEach((element) => {
		cardsWrapper.innerHTML += `
			<div class="my-card card col-3">
				<img src="${element.flags.png}">
				<div>
					<p class="m-1">country: ${element.name.common}</p>
					<p class="m-1">capital: ${element.capital}</p>
					<p class="m-1">population: ${element.population}</p>
				</div>
			</div>
            `;
	});
};

select.onchange = function () {
	searchInput.value = "";
	if (select.value == undefined) {
		sortedData = GETTED_DATA;
		sortType = 0;
	}
	if (select.value == "1") {
		sortedData = GETTED_DATA.sort((a, b) =>
			a.name.common.localeCompare(b.name.common)
		);
		sortType = 1;
	}
	if (select.value == "2") {
		sortedData = GETTED_DATA.sort((a, b) =>
			b.name.common.localeCompare(a.name.common)
		);
		sortType = 2;
	}

	if (select.value == "3") {
		sortedData = GETTED_DATA.sort((a, b) => b.population - a.population);
		sortType = 3;
	}

	if (select.value == "4") {
		sortedData = GETTED_DATA.sort((a, b) => a.population - b.population);
		sortType = 4;
	}

	cardsWrapper.innerHTML = "";
	sortedData.forEach((element) => {
		cardsWrapper.innerHTML += `
		<div class="my-card card col-3">
		<img src="${element.flags.png}">
		<div>
			<p class="m-1">country: ${element.name.common}</p>
			<p class="m-1">capital: ${element.capital}</p>
			<p class="m-1">population: ${element.population}</p>
		</div>
	</div>
				`;
	});
};
