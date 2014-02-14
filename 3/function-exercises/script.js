/**
 * Exercise 0: angryGandalf (example)
**/
 
// Define angryGandalf with input parameters
var angryGandalf = function(type) {
 
	// Define the variables needed
	var message;
 
	// Run conditional on type for 'grey' and 'white'
	if (type === 'grey') {
		message = "YOU...SHALL NOT... PASS!";
	} else if (type === 'white') {
		message = "You merely passed me to your demise.";
	} else {
		message = "I don't think I'm Gandalf anymore.";
	}
 
	// Return message
	return message 
 
}
 
// console.log(angryGandalf('grey'));  // Expect "YOU...SHALL NOT... PASS!" 
// console.log(angryGandalf('white')); // Expect "You merely passed me to your demise."
// console.log(angryGandalf(2)); // Expect "I don't think I'm Gandalf anymore."
 
 
/**
 * Exercise 1: tellFortune
**/
 
// Create function with name tellFortune and appropriate parameters
var tellFortune = function(job,location,partner,children) {
	// takes 4 arguments: number of children, partner's name, geographic location, job title.
 
	// Define string variable that will have that output
	var fortune = "You will be a " + job + " in " + location + ", and married to " + partner + " with " + children + " kids."
	
	// console.log(fortune);
 
	// Return that string
	return fortune;
};
 
// console.log(tellFortune('bball player', 'spain', 'Shaq', 3)); // Expect 'You will be a bball player in spain and married to Shaq  with 3 kids. '
// console.log(tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000)); // Expect 'You will be a stunt double in Japan and married to Ryan Gosling  with 3000 kids. '
// console.log(tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0)); // You will be a Elvis impersonator in Russia and married to The Oatmeal  with 0 kids. 
 
 
 
/**
 * Exercise 2: calculateAge
**/
 
// Create function with name tellFortune and appropriate parameters
 
	// Define string variable that will have that output
    
    // return string to pass the tests below
 
// console.log(calculateAge(1984, 2012)); // You are either 28 or 27 
// console.log(calculateAge(1988, 2012)); // You are either 24 or 23 
// console.log(calculateAge(1982, 2012)); // You are either 30 or 29 
 
 
 
/**
 * Exercise 3: calculateSupply
**/
 
// Create function with name calculateSupply and appropriate parameters
 
	// define max age as 100
    
    // Do math to substract max string - string
 
    // Create Message
 
    // Return Message
 
// console.log(calculateSupply(28, 36)); // You will need 946080 cups of tea to last you until the ripe old age of 100
// console.log(calculateSupply(28, 2.5)); // You will need 65700 cups of tea to last you until the ripe old age of 100
// console.log(calculateSupply(28, 400));  // You will need 10512000 cups of tea to last you until the ripe old age of 100 
 
 
 
/**
 * Exercise 4: The Circle Calculator
**/
 
// Create function with name calcDiameterFromRadius and appropriate parameters
 
	// Define string variable that will have that output
    
    // return string to pass the tests below
 
// Create function with name calcCircumfrence and appropriate parameters
 
	// Define string variable that will have that output
 
	// Get Diameter from radius with calcDiameterFromRadius() made above
    
    // Create string to pass test below
 
    // return string
 
// console.log(calcCircumfrence(3)); // The circumference is 18.84
// console.log(calcCircumfrence(4)); // The circumference is 25.12
// console.log(calcCircumfrence(5)); // The circumference is 31.4
 
 
/**
 * Exercise 5:  The Temperature Converter
**/
 
// Create function with name convertTemp and appropriate parameters
 
	// Define string variable that will have that output
    
    // return string to pass the tests below
 
// Create function with name convertTemp and appropriate parameters
 
	// Define string variable that will have that output
    	
    // Write a conditional if then statement that returns 'boiling', 'liquid', or 'freezing' depending on what the temperature is.
 
    // return string to pass the tests below
 
// Create a function called `waterStateAt`
 
	// Define string variable that will have that output
    
    // Save a new variable with "convertTemp"
 
    // Write a conditional if then statement that returns 'boiling', 'liquid', or 'freezing' depending on what the temperature is.
 
    // return string to pass the tests below
 
 
// console.log(waterStatAt(50, C)); // "It's current 50 Degrees in Celcius standard and water is liquid. "
// console.log(waterStatAt(213, F)); // "It's current 213 Degrees in Farenheit standard and water is boiling. "
// console.log(waterStatAt(-1, F)); // "It's current -1 Degrees in Farenheit standard and water is liquid. " 
