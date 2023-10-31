let DB_URL = "http://localhost:3000/users";

let InputEmail = document.querySelector("#exampleInputEmail1");
let InputPassword = document.querySelector("#exampleInputPassword1");
let enterBtn = document.querySelector(".enter-btn");
let spinner = document.querySelector(".spinner-border");
let logo = document.querySelector(".logo-btn");

document.addEventListener("DOMContentLoaded", async () => {
	spinner.style.opacity = 0;
	spinner.style.transition = "opacity 0.3s";

	logo.onclick = function () {
		localStorage.setItem("loged", false);
	}

	enterBtn.onclick = function () {
		spinner.style.opacity = 1;
		fetch(DB_URL)
			.then((response) => response.json())
			.then((data) => {
				let loged = false;
				data.forEach((user) => {
					if (user.login == InputEmail.value && user.pass == InputPassword.value) {
						document.location.href = "products.html";
						loged = true;
					}
				});
				if (loged == false) alert("not signed");
				else localStorage.setItem("loged", true);
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
	};
});
