let osBtns = document.querySelectorAll(".oss-box__os");
let bottomBox = document.querySelector(".bottom-box");
let bottomBoxText = document.querySelector(".bottom-box__text-box");
let bottomBoxIconBox = document.querySelector(".bottom-box__icon-box");
let bottomBoxIcon = document.querySelector("#icon");
console.log(osBtns);

for (let index = 0; index < osBtns.length; index++) {
	osBtns[index].onclick = function () {
		
		bottomBox.style.scale = 0;
		bottomBox.style.transitionDuration = "1s";
		


		if (index == 0) {
			bottomBox.style.transitionDelay = "1s";
			bottomBox.style.scale = 1;
			bottomBox.style.transitionDuration = "1s";
			bottomBox.className = "bottom-box";
			bottomBox.classList.add("windows");
			console.log(bottomBox);
			bottomBoxIcon.className = "fa-brands fa-windows";
			bottomBoxText.textContent =
				"windows Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cupiditate quam optio, doloremque mollitia eligendi quas exercitationem praesentium debitis voluptatibus doloribus, numquam sint obcaecati laborum iure sequi! Aperiam velit, aliquam maiores earum hic sit in eligendi laboriosam officiis architecto iusto!";
		}
		if (index == 1) {
			
			bottomBox.style.scale = 1;
			bottomBox.style.transitionDuration = "3s";

			bottomBox.className = "bottom-box";
			bottomBox.classList.add("ubuntu");
			console.log(bottomBox);
			bottomBoxIcon.className = "fa-brands fa-ubuntu";
			bottomBoxText.textContent =
				"ubuntu Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cupiditate quam optio, doloremque mollitia eligendi quas exercitationem praesentium debitis voluptatibus doloribus, numquam sint obcaecati laborum iure sequi! Aperiam velit, aliquam maiores earum hic sit in eligendi laboriosam officiis architecto iusto!";
		}
		if (index == 2) {
			bottomBox.className = "bottom-box";
			bottomBox.classList.add("redhat");
			console.log(bottomBox);
			bottomBoxIcon.className = "fa-brands fa-redhat";
			bottomBoxText.textContent =
				"redhat Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cupiditate quam optio, doloremque mollitia eligendi quas exercitationem praesentium debitis voluptatibus doloribus, numquam sint obcaecati laborum iure sequi! Aperiam velit, aliquam maiores earum hic sit in eligendi laboriosam officiis architecto iusto!";
		}
		if (index == 3) {
			bottomBox.className = "bottom-box";
			bottomBox.classList.add("mac");
			console.log(bottomBox);
			bottomBoxIcon.className = "fa-brands fa-apple";
			bottomBoxText.textContent =
				"apple Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cupiditate quam optio, doloremque mollitia eligendi quas exercitationem praesentium debitis voluptatibus doloribus, numquam sint obcaecati laborum iure sequi! Aperiam velit, aliquam maiores earum hic sit in eligendi laboriosam officiis architecto iusto!";
		}
	};
}
