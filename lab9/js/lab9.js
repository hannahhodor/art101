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
new2El.style.color = "blue";

//This code appends our two new p elements to the div with the id of output
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
