// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 4, 6);
let bowl = makePottery("Bowl", 8, 4);
let vase = makePottery("Vase", 4, 12);
let pot = makePottery("Pot", 10, 10);
let plate = makePottery("Plate", 4, 1);

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2000);
let firedBowl = firePottery(bowl, 2100);
let firedVase = firePottery(vase, 2200);
let firedPot = firePottery(pot, 2300);
let firedPlate = firePottery(plate, -1);
console.log(firedMug);
console.log(firedBowl);
console.log(firedVase);
console.log(firedPot);
console.log(firedPlate);

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



