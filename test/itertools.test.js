/******************************************************************************************************************************************************/
describe('itertools', () => {
    var itertools, shapes, colors;
    beforeAll(() => {
        itertools = require('../itertools/itertools').itertools;
        shapes = ['square', 'circle', 'triangle', 'rectangle', 'cone'];
        colors= ['red', 'yellow', 'orange', 'green', 'indigo', 'violet'];
    });
    
    it('should not be undefined', () => {
        expect(itertools).not.toBeUndefined();
    });
    
    describe('chain', () => {
        it('should chain the shapes and colors into one array object', () => {
            const data = ['red', 'yellow', 'orange', 'green', 'indigo', 'violet', 'square', 'circle', 'triangle', 'rectangle', 'cone'];
            const result = itertools.chain(shapes, colors);
            expect(result.length).toBe(shapes.length + colors.length);
        });
    
        it('should chain two objects into one', () => {
            const obj1 = { one: 1 }
            const obj2 = { two: 2 }
            const result = itertools.chain(obj1, obj2);
            expect(result).toEqual({ one: 1, two: 2 });
        });
    });
    
    describe('combinations', () => {
        it('should combine the shapes n times', () => {
            const data = [
                ['circle', 'triangle'],
                ['circle', 'square'],
                ['triangle', 'square']
            ];
            const result = itertools.combinations(['circle', 'triangle', 'square'], 2);
            expect(result).toEqual(data);
        });
    
    });
    
    describe('compress', () => {
        it('should filter one array with the other', () => {
            const filter = [true, false, false, true, true, false];
            const data = ['red', 'green', 'indigo']
            const result = itertools.compress(colors, filter);
            expect(result).toEqual(data);
        });
    
    })
    
})