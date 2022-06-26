"use strict";

const btnMenuOpen = document.querySelector(".icon__menu");
const btnMenuClose = document.querySelector(".icon__close");
const headerMenu = document.querySelector(".header__menu");

const showMenu = function () {
	btnMenuOpen.style.display = "none";
	btnMenuClose.style.display = "block";
	headerMenu.style.display = "block";
};
btnMenuOpen.addEventListener("click", showMenu);

const hideMenu = function () {
	btnMenuOpen.style.display = "block";
	btnMenuClose.style.display = "none";
	headerMenu.style.display = "none";
};
btnMenuClose.addEventListener("click", hideMenu);
