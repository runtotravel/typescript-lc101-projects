// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
import { SpaceLocation } from './SpaceLocation';

// Part 1: Declare (5) Variables With Type
// let spacecraftName: string="Determination";
// let speedMph: number=17500;
let kilometersToMars: number=225000000;
let kilometersToTheMoon: number=384400;
// let milesPerKilometer: number=0.621;


// Part 2: Print Days to Mars
// let milesToMars: number=kilometersToMars * milesPerKilometer;
// let hoursToMars: number=milesToMars / speedMph;
// let daysToMars: number=hoursToMars / 24;

// Code an output statement here (use a template literal):


// Part 3: Create a Function ("getDaysToLocation")



// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`It would take ${spacecraftName} ${daysToMars} days to reach Mars.`)
// console.log(`It would take ${getDaysToLocation(kilometersToMars)} days for ${spacecraftName} to reach Mars.`)
// console.log(`It would take ${getDaysToLocation(kilometersToTheMoon)} days for ${spacecraftName} to arrive to the Moon.`)



// Part 4: Create a Spacecraft Class
class Spacecraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
    constructor(name: string, speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }
   getDaysToLocation(kilometersAway: number): number{
    let milesAway: number = kilometersAway * this.milesPerKilometer;
    let hoursToLocation: number = milesAway / this.speedMph;
    return hoursToLocation / 24;
   
   }
   printDaysToLocation(location: SpaceLocation) {
    console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
 }  
} 
let spaceShuttle = new Spacecraft('Determination', 17500);
// console.log(`It would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days for ${spaceShuttle.name} to arrive to the Moon.`)
// console.log(`It would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days for ${spaceShuttle.name} to arrive to the Moon.`)

spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));

