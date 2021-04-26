const gameContainer = document.getElementById("game");
 
const COLORS = [
 "red",
 "blue",
 "green",
 "orange",
 "purple",
 "red",
 "blue",
 "green",
 "orange",
 "purple"
];
 
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
 let counter = array.length;
 
 // While there are elements in the array
 while (counter > 0) {
   // Pick a random index
   let index = Math.floor(Math.random() * counter);
 
   // Decrease counter by 1
   counter--;
 
   // And swap the last element with it
   let temp = array[counter];
   array[counter] = array[index];
   array[index] = temp;
 }
 
 return array;
}
 
let shuffledColors = shuffle(COLORS);
 
// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
 for (let color of colorArray) {
   // create a new div
   const newDiv = document.createElement("div");
 
   // give it a class attribute for the value we are looping over
   newDiv.classList.add(color);
 
   // call a function handleCardClick when a div is clicked on
   newDiv.addEventListener("click", handleCardClick);
 
   // append the div to the element with an id of game
   gameContainer.append(newDiv);
 }
}
 
let clickedCard = null;
let preventClick = false;
let combosFound = 0;
 
// TODO: Implement this function!
function handleCardClick(event) {
 // you can use event.target to see which element was clicked
const targetDiv = event.currentTarget;
if(preventClick ||
 targetDiv === clickedCard || event.target.className.includes(' clicked')) {
 return;
}
console.log(targetDiv.className);
event.target.style.backgroundColor = targetDiv.className;
 console.log("you just clicked", event.target);
 
if(!clickedCard){
 clickedCard = targetDiv;
} else if(clickedCard) {
 if (clickedCard.className !== event.target.className){
 
   preventClick = true;
   setTimeout(() => {
     clickedCard.style.backgroundColor = "";
     targetDiv.style.backgroundColor = "";
     clickedCard= null;
     preventClick = false;
//       clickedCard.className.replace(' clicked', '').trim();
// targetDiv.className.replace(' clicked', '').trim();
 
   }, 1000);
 } else {
   combosFound++;
   clickedCard = null;
   if (combosFound === 5){
     alert('YOU WIN')
   }
 }
}
 
}
 
// when the DOM loads
createDivsForColors(shuffledColors);
