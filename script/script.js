// In JavaScript
// Bedenk een naam die nog niet in gebruik is en declareer die met let;
// Selecteer met JavaScript het juiste element uit de DOM met behulp van document.querySelector();
// Gebruik in JavaScript naam.addEventListener() om een event aan een element te koppelen;
// Gebruik in JavaScript naam.classList.toggle() om een andere class aan een element toe te voegen.
// ProTip: Gebruik bij elke stap console.log() om te controleren of alles werkt zoals je verwacht dat het werkt.


// classes aanroepen van de HTML en in variabele stoppen
const buttonAnimationClick = document.querySelectorAll(".be-there");
const squareAnimation = document.querySelectorAll(".square");

// Eventhandler op variabele wanneer er op die class op "geclicked"
buttonAnimationClick.addEventListener("click", () => {
// Als er wordt geclicked dan wordt deze pagetransition van
// geactiveerd door dat de class wordt toegevoegd op de square
squareAnimation.classList.add(".pagetransition")
});
