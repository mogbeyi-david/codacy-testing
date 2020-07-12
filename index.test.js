const index = require("./index");


describe('Testing Index Functions', () => {
    it('should return the addition of two numbers', function () {
        expect(index.add(10, 20)).toEqual(30)
    });
});
