let currentId = 0

export const makePottery = (shapeInput, weightInput, heightInput) => {
    currentId++;
    return {
        shape: shapeInput,
        weight: weightInput,
        height: heightInput,
        id: currentId
    }
}