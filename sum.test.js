// const sum = require('./sum');
import sum from './sum.js'

describe('Sum', () => {
    it("adds 1 and 3 to get 4", ()=> {
        let val = sum(1, 3)
        expect(sum(1,3)).toBe(4);
    })
})

test('Truthiness', () => {
    expect(false).toBeFalsy()
    expect(true).toBeTruthy();

});