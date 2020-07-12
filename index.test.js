const index = require("./index");


describe('Testing Index Functions', () => {
    it('should return the addition of two numbers', function () {
        expect(index.add(10, 20)).toEqual(30)
    });

    it('should return the differene in two numbers', function () {
        expect(index.getDifference(10, 20)).toEqual(10)
    });
});
