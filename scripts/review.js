

const visitsElement = document.querySelector(".visits");

let totalVisits = Number(window.localStorage.getItem("totalVisits")) || 0;

if (totalVisits !== 0) {
	visitsElement.textContent = totalVisits;
} else {
	visitsElement.textContent = `This is your first visit. 🥳 Welcome!`;
}

totalVisits++;

localStorage.setItem("totalVisits", totalVisits);