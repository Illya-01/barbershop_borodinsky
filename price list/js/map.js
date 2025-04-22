var map = document.querySelector(".modal-map");
var link = document.querySelector(".find-us");
var close = document.querySelector(".modal-map .modal-close");


link.addEventListener("click", function (evt) {
	evt.preventDefault();
	map.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	map.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		if (map.classList.contains("modal-show")) {
			evt.preventDefault();
			map.classList.remove("modal-show")
		}
	};
});