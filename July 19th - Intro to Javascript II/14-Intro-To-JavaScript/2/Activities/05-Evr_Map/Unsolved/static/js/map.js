// The Stages of JavaScript
var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

// Challenge Activity
var princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// Log the name of each princess, follow by a colon, followed by their age
// Hint: use forEach
rincesses.forEach(function(princess) {
  console.log(`${princess.name}: ${princess.age}`);
});

// Create an array of just the names from the princesses array
// map: creates a new array with the results of calling a provided function on every element in the calling array
var names = princesses.map(function(princess) {
  return princess.name;
});
console.log("names: ", names);

// Create an array of just the names from the princesses array
// Hint: use map
