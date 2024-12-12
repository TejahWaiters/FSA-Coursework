// Create an alert prompt for users to enter a comma-seperated list of froyo flavors
// The browser console should display a table listing how many of each flavor the user orders
// The console will observe that the user has ordered three vanilla, two coffee and one strawberry froyo

//Prompt user to input list of froyo flavors
const userInputString = prompt
("Please enter froyo flavors separated by commas.");

//Create a variable to hold the user's inputs of froyo flavors
//Split the user's input into an array using the split function
let userInput = userInputString
let flavorsArray = userInput.split(",");
console.log(flavorsArray); //This should output the user's flavor's as [vanilla,vanilla,vanilla,strawberry,coffee,coffee]

// Create an object to keep count of how many orders there are of each flavor
const flavorCount = {};


//Create an array of strings for the froyo flavors
//Use a loop to iterate through the array of flavors

for (let i = 0; i < flavorsArray.length; i++) {
    console.log(`Flavor ${i + 1}: ${flavorsArray[i].trim()}`);
}


