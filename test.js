const fromDollarToYen = require('./app.js');
const fromEuroToDollar = require('./app.js');
const fromYenToPound = require('./app.js');
const oneEuroIs = require('./app.js')
test('Dolar to Yen', () => {
    let dollars = fromDollarToYen(10);
    expect(dollars).toBe(1462.6168224299065);
});
test('Euro to Dollar', () => {
    let euros = fromEuroToDollar(10);
    expect(euros).toBe(10.700000000000001);
});
test('Yen to Pound', () => {
    let yens = fromYenToPound(10);
    expect(yens).toBe(0.05559105431309905);
});
