/*
 * Author: Emily Baer <egbaer@ucsc.edu> and Hannah Hodor <hhodor@ucsc.edu>
 * Created 31 October
 * License: Public Domain
 */

//This assigns the div with the id of output to a variable
var outputEl = document.getElementById("output");

//Here are our newly created variables. They are paragraph elements. They now exist on the index.html in the browser, but are not yet seen by the user.
var new1El = document.createElement("p");
var new2El = document.createElement("p");

//This changes the innerHTML of our paragraph elements.
new1El.innerHTML="Laundry basket";
new2El.innerHTML="towels towels towels";

//Changes the font of the first element and the color of the second element
new1El.style.fontFamily = "Courier New";
new2El.style.color = "#F58966";

//This code appends our two new p elements to the div with the id of output
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

//Bonus Tasks
//Assigns the div with the id of secondOuput to a variable
var secondOutputEl = document.getElementById("secondOutput");

//Changes the width, height, and background color of our new variable "coolBox".
var coolBox = document.createElement("div");
coolBox.style.width = "50px";
coolBox.style.height = "70px";
//coolBox.display="block";
//coolBox.style.margin = "30px, 0px, 30px, 300px";
coolBox.style.backgroundColor = "purple";

//Adds the coolBox element before the first child of the secondOutputEl div.
secondOutputEl.insertBefore(coolBox, secondOutputEl.firstChild);
//The above method is a little bit outdated. The method below is newer, but doesn't always work on all browsers.

var thirdOutputEl = document.getElementById("thirdOutput");

//Changes the width, height, and background color of our new variable "coolerBox".
var coolerBox = document.createElement("div");
coolerBox.style.width = "70px";
coolerBox.style.height = "50px";
coolerBox.style.backgroundColor = "lightseagreen";

//Adds the coolerBox element before the first child of the thirdOutputEl div.
thirdOutputEl.prepend(coolerBox);


//Bonus Task 2+3
//Creates a button element to experiment with
var coolButtonEl = document.createElement("button");

//Changes the color of the button to red and adds text to it
coolButtonEl.style.backgroundColor="red";
coolButtonEl.innerText="Press me...";

//Changes the color of the button on click using an anonymous function
coolButtonEl.addEventListener('click', () => {
  coolButtonEl.style.filter = "hue-rotate(120deg)"
});

//appends the button to the thirdOutputEl element
thirdOutputEl.appendChild(coolButtonEl);
