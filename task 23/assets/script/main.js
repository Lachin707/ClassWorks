let textInput = document.querySelector("#textInput");
let addBtn = document.querySelector("#addBtn");
let errorBar = document.querySelector("#errorBar");
let itemsBox = document.querySelector("#itemsBox");
let infoBar = document.querySelector("#infoBar");
let clearBtn = document.querySelector("#clearBtn");
let deleteBtns;

addBtn.onclick = function () {
	if (textInput.value != "") {
		let item = document.createElement("div");
		let itemText = document.createElement("p");
		let itemDelBtn = document.createElement("button");
		let itemDelIcon = document.createElement("i");

		item.append(itemText);
		item.append(itemDelBtn);
		itemDelBtn.append(itemDelIcon);

		item.classList.add("items-box__item");

		itemText.textContent = textInput.value;
		textInput.value = "";
		errorBar.textContent = "";

		itemDelBtn.classList.add("delete-btn");

		itemDelIcon.classList.add("fa-solid");
		itemDelIcon.classList.add("fa-trash");

		itemsBox.append(item);

		deleteBtns = document.querySelectorAll(".delete-btn");
		console.log(deleteBtns);
		deleteBtns.forEach((btn) => {
			btn.onclick = function () {
				if (confirm("Are u sure?")) {
					btn.parentElement.remove();
					if (itemsBox.children.length == 0) infoBar.textContent = "no todo";
					else
						infoBar.textContent = `You have ${itemsBox.children.length} pending tasks`;
				}
			};
		});

		if (itemsBox.children.length == 0) infoBar.textContent = "no todo";
		else
			infoBar.textContent = `You have ${itemsBox.children.length} pending tasks`;
	} else {
		errorBar.textContent = "input empty";
	}
};

textInput.onchange = function () {
	errorBar.textContent = "";
};

clearBtn.onclick = function () {
	items = document.querySelectorAll(".items-box__item");
	console.log(items);
	items.forEach((i) => {
		i.remove();
	});

	if (itemsBox.children.length == 0) infoBar.textContent = "no todo";
	else
		infoBar.textContent = `You have ${itemsBox.children.length} pending tasks`;
};
