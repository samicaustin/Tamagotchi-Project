
// Create a repo for your tomagotchi pet
// make a commit after you finish each one of the following
// Create a Class (JS Class, look at your notes if your forget) for your tomagotchi
class Pet {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
};

// Instatiate your Tomagotchi
const tama = new Pet("Joey", "blue");

// Display a character of your choice on the screen to represent your pet
$('.pet-space').prepend(`<img id="pet" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeANdQfZhr7fPApPY6ATKcR2CRHry96MINnfFHqLXFC7g31BDC"/>`);

let hunger = 0;
let sleepiness = 0;
let boredom = 0;
let age = 0;
// Display the following metrics for your pet:
$(`.pet-space`).append(`<p>Hunger: ${hunger}/10</p> `);
$(`.pet-space`).append(`<p>Sleepiness: ${sleepiness}/10<p> `);
$(`.pet-space`).append(`<p>Boredom: ${boredom}/10</p> `);
$(`.pet-space`).append(`<p>Age: ${age}/???</p>`)

// Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.



// Add the ability to name your pet.
$('#submit-btn').on('submit', () => {
console.log("clicked");
   const inputValue = $('#input-name').val();
   $('.pet-space').prepend(`<h1>NAME: ${inputValue}</h1>`);

});

// Style the page.



// Increase your pet's age every x minutes
let timePassing; 
let seconds = 0;
let minutes = 0;

const secondsGoUp = () => {
    seconds++;
    $('.seconds').text(seconds)
    if(seconds % 60 === 0){
        minutes++;
        $('.minutes').text(minutes);
    }
};

$('.start').click(function(){
    timePassing = setInterval(secondsGoUp, 1000);
});

$('.stop').click(function(){
    clearInterval(timePassing);
});
// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.
// You pet should die if Hunger, Boredom, or Sleepiness hits 10.
// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.

// EXTRAS
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!