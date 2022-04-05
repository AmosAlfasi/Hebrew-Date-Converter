"use strict";

const btn = document.querySelector(".SUBMIT");
const gregorian = document.querySelector(".date");
const inHebrew = document.querySelector(".inHebrew");

const getData = async (day, month, year) => {
	try {
		const res = await fetch(
			`https://www.hebcal.com/converter?cfg=json&gy=${year}&gm=${month}&gd=${day}&g2h=1`
		);
		const response = await res.json();
		//console.log(response);
		inHebrew.textContent = response.hebrew;
		inHebrew.style.color = "#2e79bf";
		//document.write(response.hebrew);
	} catch (error) {
		console.log(error);
	}
};

btn.addEventListener("click", function () {
	const [year, month, day] = gregorian.value.split("-");
	//console.log(day, month, year);
	getData(day, month, year);
});
