"use strict";

function containq1 () {
var visitorName = prompt('What is your name?');
console.log (visitorName);

alert('Welcome ' + visitorName + '!');
// console.log('Welcome ' + visitorName);

var underGrad = prompt('Did I get my BA from UW?');
underGrad = underGrad.toLowerCase();
// console.log('underGrad', underGrad);
if (underGrad === 'yes' || underGrad === 'y') {
    alert('Correct!');
    //console.log('Correct!');
} else {
    alert('I surely did go to UW for undergrad!');
    //console.log('I surely did go to UW for undergrad!');
    //console.log(underGrad);
}
}
containq1();


function containq2 () {
var chickenName = prompt('Do I have a chicken named Darth Vader?');
chickenName = chickenName.toLowerCase();
if (chickenName === 'yes' || chickenName === 'y') {
    alert('Of course! As if there is any other name for a hen.');
    //console.log('Of course! As if there is any other name for a hen.');
} else {
    alert('Thats just ridiculous. I am pretty sure everyone has a hen named Darth Vader.');
   // console.log('Thats a rediculous answer.');
}
}
containq2();


function containq3() {
var move = prompt('Am I trying to move to Belltown?');
move = move.toLowerCase();
if (move === 'no' || move ==='n') {
    alert('Correct! Very little could entice me to Belltown');
    //console.log('Correct.');
} else {
    alert('Nope! I want to move to Vashon Island!');
    //console.log('Nope!');
}
}
containq3


function containq4 (){
var cow = prompt('Will I one day milk my own dairy cow, daily?')
cow = cow.toLowerCase();
if (cow === 'yes' || cow==='y') {
    alert('Duh.');
    //console.log('Duh.');
} else {
    alert('Incorrect. One day I WILL have a dairy cow and she will need to be milked daily.');
    //console.log('Incorrect.');
}
}
containq4 ();

function containq5 (){
var sheepDogContest = prompt('Will I one day compete in the Sheep Dog Classic?');
sheepDogContest = sheepDogContest.toLowerCase();
if (sheepDogContest === 'yes' || sheepDogContest === 'y') {
    alert('Obvi. I expect you to be there cheering me on.');
    //console.log('Correct.');
} else {
    alert('Wrong. Wrong. Wrong.');
    //console.log('Nope.');
}
}
containq5();

//first loop. too high or too low, four chances

// var answer = 5
// var howManyChickensPrompt = parseInt( prompt('How many chickens do I have?'));

// var howManyChickens = howManyChickensPrompt;
// for ( var i = 0; i < 3; i++){
//     console.log(typeof howManyChickens);
//     if (howManyChickens === answer) {
//         alert('Correct! I have five chickens!');
//     break;
// } else if (howManyChickens < answer) {
//     howManyChickens = parseInt( prompt('Too Low! Seriously, everyone needs more chickens than that. Try Again!'));
// } else {
//     howManyChickens = parseInt( prompt('Too high! Try Again!'));
// }

// }

// second loop with an array

// var realChickenName = ['Darth Vader', 'Rosabelle', 'Commander Leia', 'Rey', 'Chewbacca', 'BB8']
// console.log(realChickenName);
// console.log (realChickenName.length);

// // var i = 0
// var guessChickenName = prompt('Can you guess the name of one of my chickens? Hint: my then four year old daughter was mildly obsessed with Star Wars when she named our day old hatchlings.');
// console.log(guessChickenName); 

// for ( var i = 0; i < realChickenName.length; i++) {
//     console.log('[i]',realChickenName[i]);
//     if (realChickenName[i] === guessChickenName) {
//         alert ('Well done you.');
//         i = 6;
//     } else {
//         prompt ('try again'); 
//         i++;
//     }
// }



// while (i < 6){  
//     if (guessChickenName !== realChickenName) {
//     prompt('Think harder and try again!');
//     i++;
// } else { 
//     prompt ('Well done you.');
//     break;
// }
// }


// alert('Welp, missed them all, but here are the chicken names ' + realChickenName);

// for ( var i = o; i < 6; i++) {
// var nameGuess = toLowerCase( prompt('Can you guess the name of one of my chickens? Hint, my then four year old was mildly obsessed with Star Wars when she named them.'));
// if (nameGuess === realChickenName) {
//     look back at line 68 and this will only have one else statement. 
// }
// }

// alert('Hey ' + visitorName + ', thanks for playing!');