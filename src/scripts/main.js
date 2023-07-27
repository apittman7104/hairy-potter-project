import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js";
import { usePottery, toSellOrNotToSell } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";

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

// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug);
toSellOrNotToSell(firedBowl);
toSellOrNotToSell(firedVase);
toSellOrNotToSell(firedPot);
toSellOrNotToSell(firedPlate);

console.log(usePottery());
console.log(PotteryList());

// Invoke the component function that renders the HTML list
const parentTag = document.querySelector(".potteryList");
parentTag.innerHTML = PotteryList();
