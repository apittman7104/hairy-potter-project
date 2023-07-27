import { usePottery } from "./PotteryCatalog.js";
const pricedPieces = usePottery();


export const PotteryList = () => {
    let htmlString = ""
    for (const piece of pricedPieces) {
        htmlString += `<section class="pottery" id="pottery--${piece.id}">
        <h2 class="pottery__shape">${piece.shape}</h2>
        <div class="pottery__properties">
        Item weighs ${piece.weight} grams and is ${piece.height} cm in height
        </div>
        <div class="pottery__price">Price is $${piece.price}</div>
        </section>`
    }
    return htmlString;
}