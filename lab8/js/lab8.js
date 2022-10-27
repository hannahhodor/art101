/*
 * Author: Emily Baer <egbaer@ucsc.edu> and Hannah Hodor <hhodor@ucsc.edu>
 * Created 26 October
 * License: Public Domain
 */
var numArray = [1, 2, 3, 4, 5, 6, 7];
console.log("Here are the numbers in the original array: " + numArray);

//Function multipies the number passed to it by 5 and returns it.
function multiplicator(coolNum){
  var multipliedNum=coolNum*5;
  return(multipliedNum);
}

var multipliedNumArray = numArray.map(multiplicator);
console.log("This is what the numbers in the original array look like when multiplied by five: " +multipliedNumArray);

//Function is anonymous. The Anonymous function converts the number passed to it into degrees Celsius
celsiusNumArray = multipliedNumArray.map(function(numCel){
  celsiusNum = (numCel - 32)* (5/9);
  return(celsiusNum);
})
console.log("This is what the numbers multiplied by five look like when they are converted to Celsius: " + celsiusNumArray);

//This changes the HTML div element with the id of output to display the results of our code
document.getElementById("output").innerHTML="This is what our original number array looks like: " + numArray + "<br>" + "This is what our number array looks like after being multiplied by 5: " + multipliedNumArray + "<br>" + "This is what our multiplied number array looks like after being converted to Celsius: " + celsiusNumArray + "<br>";


var nameArray = ["John", "Mary", 9, "Lulie", "Jujie", "Nil", "Bill", "Burger"];
console.log("This is our first array of names and numbers, nameArray: " + nameArray);

//This finds the index of a certain element that matches a check provided by a callback function.
//In this case, the callback function checks to see if the string is "Jujie"
nameIndexFinder = nameArray.findIndex(function(coolEl) {
  if (coolEl === "Jujie") {
    return(true);
  } else {
    return(false);
  }
})
console.log("This is the index position of the string 'Jujie' in nameArray: " + nameIndexFinder);

var nameArrayDifferent = ["Stinky", "Smelly", "Saturated", "Saucey", 8, "Stoked"];
console.log("This is our second array of names and numbers, nameArrayDifferent: " + nameArrayDifferent);

//This finds the index of a certain element that matches a check provided by a callback function.
//In this case, the callback function checks to see if the number is 8
nameSecondaryIndexFinder = nameArrayDifferent.findIndex(function(coolEl) {
  if (coolEl === 8) {
    return(true);
  } else {
    return(false);
  }
})
console.log("This is the index position of the number '8' in nameArrayDifferent: " + nameSecondaryIndexFinder);

//This changes the HTML div element with the id of bonusoutput to display the results of our code
document.getElementById("bonusoutput").innerHTML="This is our first array of names and numbers, nameArray: " + nameArray +"<br>"+"This is the index position of the string 'Jujie' in nameArray: " + nameIndexFinder +"<br>"+"This is our second array of names and numbers, nameArrayDifferent: " + nameArrayDifferent + "<br>" + "This is the index position of the number '8' in nameArrayDifferent: " + nameSecondaryIndexFinder+ "<br>";
