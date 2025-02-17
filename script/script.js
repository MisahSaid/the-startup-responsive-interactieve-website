// In JavaScript
// Bedenk een naam die nog niet in gebruik is en declareer die met let;
// Selecteer met JavaScript het juiste element uit de DOM met behulp van document.querySelector();
// Gebruik in JavaScript naam.addEventListener() om een event aan een element te koppelen;
// Gebruik in JavaScript naam.classList.toggle() om een andere class aan een element toe te voegen.
// ProTip: Gebruik bij elke stap console.log() om te controleren of alles werkt zoals je verwacht dat het werkt.

// be there
const popup = document.querySelector(".full-screen");
console.log(popup);

function togglePopup(){
    popup.classList.toggle("hidden");
    popup.classList.add("pagetransition");
}


// be square
const besquareSection = document.querySelector(".besquare");
const beSquareButton = document.querySelector(".be-square");
console.log(besquareSection);

beSquareButton.addEventListener("click", toggleBesquare);

function toggleBesquare() {
    besquareSection.classList.toggle("hidden");
    besquareSection.classList.add("pagetransition");
}