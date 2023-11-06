let cardsWrapper = document.querySelector(".cards-wrapper");
let mainWrapper = document.querySelector(".main-card");
let API_URL = "https://restcountries.com/v3.1/alpha";
let id = new URLSearchParams(location.search).get("id");


function createMain(data) {
	mainWrapper.innerHTML = "";
	data.forEach((element) => {
		mainWrapper.innerHTML += `
                <div class="card w-100">
                    <img src="${element.flags.png}">
                    <p>country: ${element.name.common}</p>
                    <p>capital: ${element.capital}</p>
                    <p>population: ${element.population}</p>
                </div>
                `;
	});
}

function createCards(data) {
	for (let index = 0; index < data.length; index++) {
		cardsWrapper.innerHTML += `
        <div class="my-card card col-3" id="${data[index].altSpellings[0]}">
            <img src="${data[index].flags.png}">
            <p>country: ${data[index].name.common}</p>
            <p>capital: ${data[index].capital}</p>
            <p>population: ${data[index].population}</p>
        </div>
        `;
	}

	let cards = document.querySelectorAll(".my-card");
	cards.forEach((card) => {
		card.onclick = function () {
			document.location.href = `details.html?id=${card.id}`;
		};
	});
}

fetch(`${API_URL}/${id}`)
	.then((response) => response.json())
	.then((main_country) => {

        createMain(main_country);
		cardsWrapper.innerHTML = "";
        
		main_country[0].borders.forEach((element) => {
			fetch(`${API_URL}/${element}`)
				.then((response) => response.json())
				.then((border_country) => {
					createCards(border_country);
				})
		});
        
	});