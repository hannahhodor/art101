/*
 * Author: Emily Baer <egbaer@ucsc.edu> and Hannah Hodor <hhodor@ucsc.edu>
 * Created 24 October
 * License: Public Domain
 */

 // This function takes the input of a user's name, sorts it, and prints it for the user to view
 function nameSorter() {
   // This asks users for input
   var userName= window.prompt("Mortal Fool..givemeyournameorElse");
   console.log(userName);
   // This splits the input into an array, so "sort" will work on it
   var nameArray= userName.split('');
   console.log(nameArray);
   // The array is sorted
   var sortedArray= nameArray.sort();
   console.log(sortedArray);
   // The array is joined into a string
   var sortedName= sortedArray.join('');
   console.log(sortedName);
   // The sorted name is returned
   return(sortedName);
 }

document.writeln("C0ngrats... here's your real name! " + nameSorter() + "</br>");

// Beginning of the bonus task
var nextName= window.prompt("Here are more words. give namw.");

// This function makes an anagram out of the user's name and takes spaces into consideration and capitalizes the first letter of each name segment
function sortNameSpaces(coolInput) {
  // Splits name by spaces
  var nameSplitBySpaceArray= coolInput.split(" ");
  console.log(nameSplitBySpaceArray);
  var spaceSplitSortedArray=[];
  // Splits each item from previous array into a list of strings.
  for (let i=0; i < nameSplitBySpaceArray.length; i++){
    spaceSplitSortedArray[i]= nameSplitBySpaceArray[i].split('');
    console.log(spaceSplitSortedArray[i]);
  }
  var wordChunksSortedArray=[];
  // Sorts the lists of strings
  for (let i=0; i < spaceSplitSortedArray.length; i++){
    wordChunksSortedArray[i]= spaceSplitSortedArray[i].sort();
  }
  var wordChunksStringsArray=[];
  // Joins lists of strings into one string each
  for (let i=0; i < wordChunksSortedArray.length; i++){
    wordChunksStringsArray[i]= wordChunksSortedArray[i].join('');
  }
  // Joins strings with a space to create an anagrammed name
  var finalName= wordChunksStringsArray.join(" ");
  return(finalName);
}

document.writeln("The Ultimate Name in its Final Form... " + sortNameSpaces(nextName));
