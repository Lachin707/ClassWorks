let API_URL = "https://fakestoreapi.com/products";

let spinner = document.querySelector(".spinner-border");
let cardsWrapper = document.querySelector(".cards-wrapper");
let logo = document.querySelector(".logo-btn");

document.addEventListener("DOMContentLoaded", async () => {
	spinner.style.opacity = 0;
	spinner.style.transition = "opacity 0.3s";

	logo.onclick = function () {
		localStorage.setItem("loged", false);
	};

	fetch(API_URL)
		.then((response) => response.json())
		.then((data) => {
			data.forEach((card) => {
				cardsWrapper.innerHTML += `
				<div class="card col-3" style="scale: 0.95;">
					<img src="${card.image}" class="card-img-top" alt="...">
					<div class="card-body">
					<h5 class="card-title">${card.title}</h5>
					<button dataId="${card.id}" id="likeBtn" type="button" class="btn btn-outline-danger"><i class="fa-regular fa-heart"></i></button>
				</div>
			`;
			});
		})
		.catch(() => {

		})
		.finally(() => {
			spinner.style.opacity = 0;
			let likeBtns = document.querySelectorAll("#likeBtn");
			console.log(likeBtns);
			likeBtns.forEach(btn => {
				btn.onclick = function () {
					let btnId = Number(btn.getAttribute("dataId"));
					let wishlist = JSON.parse(localStorage.getItem("wishlist"));
					
					if (wishlist == null) {
						localStorage.setItem("wishlist", JSON.stringify([btnId]));
					}else{
						if (wishlist.find((x) => btnId == x) >= 0) {
							
						}else{
							localStorage.setItem("wishlist", JSON.stringify([...wishlist, btnId]));
							btnId.firstChild.classList = replace("fa-regular", "fa-solid");
						}
					}
					console.log(wishlist);
				}
			});
		});

});
