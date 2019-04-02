// unused class below: trouble using inputValue as name argument in constructor below

// NAME YOUR PET
let name;

$('#start-button').on('click', () => {
    name = $('#input-name').val();
    $('.pet-name').text('');
    $('.pet-name').append(`<header>${name}</header>`);
    $('.pet-space').prepend(`<img id="pet" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeANdQfZhr7fPApPY6ATKcR2CRHry96MINnfFHqLXFC7g31BDC"/>`);
    $(`#pet`).animate({
        height: "+=100px",
        width: "+=100px"
        }, 1000, function(){
    console.log("the tamagotchi is born!");
    });
    
    if (alive === true) {moveLeft();};
    timePassing = setInterval(secondsGoUp, 500);
});
   

let moveLeft = () => {
    if (alive === true) {
        $('#pet').animate({
        left: "-=100"}, 1500, function(){
            if (alive === true) {moveLeftBack();};
        }
    )};
};

let moveLeftBack = () => {
    if (alive === true) {
        $('#pet').animate({
            left: "+=100"}, 1500, function(){
                if (alive === true) {moveRight();};
        });
        };
    };
    
let moveRight = () => {
    if (alive === true) {
        $('#pet').animate({
        left: "+=100"}, 1500, function(){
            if (alive === true) {moveRightBack();};
            }
        )};
    };
    
let moveRightBack = () => {
    if (alive === true) {
        $('#pet').animate({
            left: "-=100"}, 1500, function(){
                if (alive === true) {moveLeft();};
        });
        };
    };


let hunger = 0;
let sleepiness = 0;
let boredom = 0;
let age = 0;
let alive = true;

// Display the following metrics for your pet:
$(`.hunger`).text(`${hunger}`);
$(`.sleepiness`).text(`${sleepiness}`);
$(`.boredom`).text(`${boredom}`);
$(`.age`).text(`${age}`);

// BUTTONS
$('.feed').on('click', () => {
    console.log("clicked feed");
    if (hunger === 0) {
        alert(`${name} ate too much and passed into the ghost realm.`);
        alive = false;
        deadBug();

        clearInterval(timePassing);
    } else {
        hunger--;
        $(`.hunger`).text(`${hunger}`);
    };
});

 $('.lights').on('click', () => {
    console.log("clicked lights");
    // $('body').css("background-color", "#170B0B");
    // if (seconds % 2 === 0) {
    //     $('body').css("background-color", "white");
    // }; ==> want to turn off light for two seconds
    if (sleepiness === 0) {
        alert(`${name} slept too hard and slipped into a permanent coma.`);
        alive = false;
        deadBug();

        clearInterval(timePassing);
    } else {
        sleepiness--;
        $(`.sleepiness`).text(`${sleepiness}`);
    };
});

$('.play').on('click', () => {
    console.log("clicked play");
    if (boredom === 0) {
        alert(`${name} played too hard and its lil bug heart exploded.`);
        alive = false;
        deadBug();

        clearInterval(timePassing);
    } else {
        boredom--;
        $(`.boredom`).text(`${boredom}`);
    };
});



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
    if(seconds % 3 === 0){
        hunger++;
        $('.hunger').text(hunger);
        if (hunger >= 7){
            $(`.hunger`).append(`<h2>...(yikes, so hungry)</h2>`)
        };
        if (hunger >= 10){
            alert(`${name} died of hunger, you monster`);
            alive = false;
            deadBug();

            clearInterval(timePassing);
        };
    };
};

const applySleepiness = () => {
    if (seconds % 5 === 0){
        sleepiness++;
        $(`.sleepiness`).text(`${sleepiness}`);
        if (sleepiness >= 7){
            $(`.sleepiness`).append(`<h2>...(yikes, so tired)</h2>`)
        };
        if (sleepiness >= 10){
            alert(`${name} died of exhaustion, you monster`);
            alive = false;
            deadBug();

            clearInterval(timePassing);
        };
    };
};

const applyBoredom = () => {
    if (seconds % 2 === 0) {
        boredom++;
        $(`.boredom`).text(`${boredom}`);
        if (boredom >= 7){
            $(`.boredom`).append(`<h2>...(yikes, so bored)</h2>`)
        };
        if (boredom >= 10){
            alert(`${name} died of boredom, you monster`);
            alive = false;
            deadBug();

            clearInterval(timePassing);
        };
    };
};

const applyAge = () => {
    if (seconds % 20 === 0) {
        age++;
        $(`.age`).text(`${age}`);
        if (age === 2){
            $(`#pet`).animate({
                height: "+=100px",
                width: "+=100px"
                }, 1000, function(){
            console.log("the tamagotchi grew up!");
        });
        if (age >= 7){
            alert("Died of old age!");
            alive = false;
            deadBug();
            clearInterval(timePassing);
        };
    };
}};

const deadBug = () => {
    $(`.pet-name`).append("is super dead; nice work")
    $(`#pet`).replaceWith(`<img id="dead-pet" src="deadladybug.png"/>`);
    $(`.pet-space`).prepend(`<header>rest in peace,<br>lil bug</header>`);
    $(`.try-again`).append(`<button type="button" class="try-again">Fresh bug?</button>`);
    $(`.try-again`).click(function(){
        location.reload();
    });
};


// TIME-RELATED FUNCTIONS
// comment out start and stop for final game
$('.start').click(function(){
    timePassing = setInterval(secondsGoUp, 500);
});

$('.stop').click(function(){
    clearInterval(timePassing);
    alive = false;

});



// Morph your pet at certain ages.
// Animate your pet across the screen while it's alive.

// EXTRAS
// Have your tomagotchi give birth to baby tomagotchi...
// ...with special powers (extend the class)!
// Add an excercise() method to your tomagotchi, that affects certain properties
// Add anything you can think of... use your imagination!