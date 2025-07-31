/*const sum = (a,b) => {
    return a + b;
}
console.log(sum(7,3))
module.exports = sum
*/
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (amountUsd) => {
    const rateDollarYen = (oneEuroIs.JPY/oneEuroIs.USD);
    return  amountUsd * rateDollarYen;
}
const fromEuroToDollar = (amountEur) => {
    return (amountEur * oneEuroIs['USD']);
}
const fromYenToPound = (amountYen) => {
    const rateYenPound = oneEuroIs.GBP/oneEuroIs.JPY;
    return amountYen * rateYenPound;
}
console.log(fromDollarToYen(10))
console.log(fromEuroToDollar(10))
console.log(fromYenToPound(10))



module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}