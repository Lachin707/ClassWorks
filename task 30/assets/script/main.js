let searchInput = document.querySelector("#searchInput");
let cardsWrapper = document.querySelector(".cards-wrapper");


let API_URL = "https://restcountries.com/v3.1/all";

let GETTED_DATA = [];
let foundArr = [];

function createCards(data) {
    cardsWrapper.innerHTML = "";
    for (let index = 0; index < data.length; index++) {
        cardsWrapper.innerHTML += `
        <div class="my-card card col-3" id="${index}">
            <img src="${ data[index].flags.png}">
            <p>country: ${ data[index].name.common}</p>
            <p>capital: ${ data[index].capital}</p>
            <p>population: ${ data[index].population}</p>
        </div>
        `;
    }

    

    let cards = document.querySelectorAll(".my-card");

    cards.forEach(card => {
        card.onclick = function () {
            document.location.href = `details.html?id=${data[card.id].altSpellings[0]}`;
        }
    });
}

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
		createCards(GETTED_DATA);
        console.log(GETTED_DATA);
	});

searchInput.onkeyup = async function () {
	foundArr = GETTED_DATA.filter((item) => item.name.common.toLowerCase().trim().includes(searchInput.value.trim().toLowerCase()));
    createCards(foundArr);
};