let API_URL = "https://fakestoreapi.com/products";

let spinner = document.querySelector(".spinner-border");
let cardsWrapper = document.querySelector(".cards-wrapper");
let logo = document.querySelector(".logo-btn");

document.addEventListener("DOMContentLoaded", async () => {
	spinner.style.opacity = 0;
	spinner.style.transition = "opacity 0.3s";

	logo.onclick = function () {
		localStorage.setItem("loged", false);
	}

	let check = localStorage.getItem("loged");

	if (check == "true") {
		console.log("do");
		spinner.style.opacity = 1;
		fetch(API_URL)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				data.forEach((card) => {
					cardsWrapper.innerHTML += `
			<div class="card col-3" style="scale: 0.95;">
				<img src="${card.image}" class="card-img-top" alt="...">
				<div class="card-body">
				<h5 class="card-title">${card.title}</h5>
				<p class="card-text"></p>
				</div>
		 	</div>
			`;
				});
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
				spinner.style.opacity = 0;
			});
	}
});
