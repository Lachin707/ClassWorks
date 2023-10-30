let enterBtn = document.querySelector(".bg-primary");
let chatBox = document.querySelector(".chat-app__text-box__chat-box");
let chatInput = document.querySelector("#chatInput");
let chatUsers = document.querySelectorAll(".chat-user");

let API_URL = "http://localhost:3000/chat";
let GETTED_DATA = [];
let user = "lachin";

function getData() {
	GETTED_DATA = [];
	fetch(API_URL)
		.then((response) => response.json())
		.then((data) => {
			fillChatBox(data, user);
			chatBox.scrollTop = chatBox.scrollHeight;
		})
		.catch(() => {
			Swal.fire({
				icon: "error",
				title: "Oops...",
				text: "Something went wrong!",
				footer: '<a href="">Why do I have this issue?</a>',
			});
		});
}

function fillChatBox(array, user) {
	chatBox.innerHTML = "";
	array.forEach((item) => {
		let chatItem = document.createElement("div");

		if (user == item.author) {
			chatItem.className = "bg-primary chat-item w-50 px-2 my-2";
			chatItem.setAttribute("style", "border-radius: 20px; color: white; transform: translateX(100%);");
		} else {
			chatItem.className = "bg-body-secondary chat-item w-50 px-2 my-2";
			chatItem.setAttribute("style", "border-radius: 20px");
		}
		chatItem.textContent = `${item.author}: ${item.text} `;
		chatBox.append(chatItem);
	});
}

function putData(cUser, str) {
	fetch(`${API_URL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			text: str,
			author: cUser,
		}),
	}).catch(() => {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: "Something went wrong!",
			footer: '<a href="">Why do I have this issue?</a>',
		});
	});
}

document.addEventListener("DOMContentLoaded", async () => {
	getData();
	enterBtn.onclick = function () {
		if (chatInput.value != "") {
			putData(user, chatInput.value);
			chatInput.value = "";
			getData();
		}
	};

	chatUsers.forEach((userBtn) => {
		userBtn.onclick = function () {
			user = userBtn.firstElementChild.nextElementSibling.textContent;
			console.log(user);
			getData();
		};
	});
});

/*
// let GETTED_OBJ = [];
	// fetch(`${API_URL}/10266`)
	// 	.then((response) => response.json())
	// 	.then((data) => {
	// 		GETTED_OBJ = data;
	// 		console.log(GETTED_OBJ);
	// 	})
	// 	.catch(() => {
	// 		Swal.fire({
	// 			icon: "error",
	// 			title: "Oops...",
	// 			text: "Something went wrong!",
	// 			footer: '<a href="">Why do I have this issue?</a>',
	// 		});
	// 	});

	// fetch(`${API_URL}/77777`, {
	// 	method: "DELETE",
	// }).catch(() => {
	// 	Swal.fire({
	// 		icon: "error",
	// 		title: "Oops...",
	// 		text: "Something went wrong!",
	// 		footer: '<a href="">Why do I have this issue?</a>',
	// 	});
	// });

	// 	fetch(`${API_URL}/77777`, {
	// 		method: "PUT",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify({
	// 			id: 77777,
	// 			customerId: "WARTH",
	// 			employeeId: 3,
	// 			orderDate: "1996-07-26 00:00:00.000",
	// 			requiredDate: "1996-09-06 00:00:00.000",
	// 			shippedDate: "1996-07-31 00:00:00.000",
	// 			shipVia: 3,
	// 			freight: 25.73,
	// 			shipName: "Aydin Lachinov",
	// 			shipAddress: {
	// 				street: "Torikatu 38",
	// 				city: "Oulu",
	// 				region: "NULL",
	// 				postalCode: 90110,
	// 				country: "Azerbaijan",
	// 			},
	// 			details: [
	// 				{
	// 					productId: 12,
	// 					unitPrice: 30.4,
	// 					quantity: 12,
	// 					discount: 0.05,
	// 				},
	// 			],
	// 		}),
	// 	}).catch(() => {
	// 		Swal.fire({
	// 			icon: "error",
	// 			title: "Oops...",
	// 			text: "Something went wrong!",
	// 			footer: '<a href="">Why do I have this issue?</a>',
	// 		});
	// 	});

	// });

	// fetch(`${API_URL}/77777`, {
	// 	method: "PATCH",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// 	body: JSON.stringify({
	// 		customerId: "ASDASD",
	// 	}),
	// }).catch(() => {
	// 	Swal.fire({
	// 		icon: "error",
	// 		title: "Oops...",
	// 		text: "Something went wrong!",
	// 		footer: '<a href="">Why do I have this issue?</a>',
	// 	});
	// });
*/
