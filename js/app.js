
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
$(`.hunger`).text(`${hunger}`);
$(`.sleepiness`).text(`${sleepiness}`);
$(`.boredom`).text(`${boredom}`);
$(`.age`).text(`${age}`);


$('.feed').on('click', () => {
    console.log("clicked feed");
    hunger--;
    $(`.hunger`).text(`${hunger}`);
    });

 $('.lights').on('click', () => {
    console.log("clicked lights");
    sleepiness--;
    $(`body`).css("background-color: black");
    $(`.sleepiness`).text(`${sleepiness}`);

    });

$('.play').on('click', () => {
    console.log("clicked play");
    boredom--;
    $(`.boredom`).text(`${boredom}`);
    });

// NAME YOUR PET
$('#submit-btn').on('click', () => {
console.log("clicked");
   const inputValue = $('#input-name').val();
   $('.pet-name').text('');
   $('.pet-name').append(`<h1>${inputValue}</h1>`);
  
});

// Increase your pet's age every x minutes
let timePassing; 
let seconds = 0;

const secondsGoUp = () => {
    seconds++;
    $('.seconds').text(seconds)
    applyHunger();
    applySleepiness();
    applyBoredom();
    applyAge();
};


// PET NEED FUNCTIONS
const applyHunger = () => {
    if(seconds % 10 === 0){
        hunger++;
        $('.hunger').text(hunger);
        if (hunger >= 10){
            alert("Died of hunger!");
            clearInterval(timePassing);
        };
    };
};

const applySleepiness = () => {
    if (seconds % 7 === 0){
        sleepiness++;
        $(`.sleepiness`).text(`${sleepiness}`);
        if (sleepiness >= 10){
            alert("Died of exhaustion!");
            clearInterval(timePassing);
        };
    };
};

const applyBoredom = () => {
    if (seconds % 5 === 0) {
        boredom++;
        $(`.boredom`).text(`${boredom}`);
        if (boredom >= 10){
            alert("Died of boredom!");
            clearInterval(timePassing);
        };
    };
};

const applyAge = () => {
    if (seconds % 20 === 0) {
        age++;
        $(`.age`).text(`${age}`);
        if (hunger >= 10){
            alert("Died of old age!");
            clearInterval(timePassing);
        };
    };
}

// TIME-RELATED FUNCTIONS


$('.start').click(function(){
    timePassing = setInterval(secondsGoUp, 50);
});

$('.stop').click(function(){
    clearInterval(timePassing);
});

$(`.try-again`).click(function(){
    location.reload();
})

// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.

// EXTRAS
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!