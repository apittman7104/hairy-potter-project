let pricedPieces = [];

export const toSellOrNotToSell = (pottery) => {
    if (pottery.cracked == false) {
        if (pottery.weight >= 6) {
            pottery.price = 40;
        }
        else {
            pottery.price = 20;
        }
        pricedPieces.push(pottery);
    }
}

export const usePottery = () => {
    return pricedPieces.map(piece => piece);
}