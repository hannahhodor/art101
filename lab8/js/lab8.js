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
