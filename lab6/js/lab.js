/*
 * Author: Emily Baer <egbaer@ucsc.edu> and Hannah Hodor <hhodor@ucsc.edu>
 * Created 19 October
 * License: Public Domain
 */

 // Define Variables


 myTransport=["bike","car","bus","feet","hands","drone","plane","tunnel system","rollerskates","horseback","skipping", "sadly","jet ski", "surfing"];
var myMainRide = {};
myMainRide.make="Poorsche";
myMainRide.color="chartreuse";
myMainRide.model="BML";
myMainRide.year=2030;
myMainRide.age=2022- myMainRide.year;

document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
