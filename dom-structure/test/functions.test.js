import { sum } from '../src/utils/functions';
import { hasNotSamePropertyValue } from '../src/utils/functions';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});


describe('Test hasNotSamePropertyValue', () => {
    beforeEach(() => {
        //do something
    })
    beforeAll(() => {
        //do something
    })
    const Object1 = {
        property : 'one'
    }
    const Object2 = {
        property : 'two'
    }
    test('Should return error if default object and current object have same prop value ', () => {
        expect(hasNotSamePropertyValue(null, null, 'property')).toBe(false);
    })
    test('Should return true if default object and current object have same prop value ', () => {
        expect(hasNotSamePropertyValue(Object1, Object2, 'property')).toBe(true)
    })
    test('Should return false if default object and current object have same prop value ', () => {
        expect(hasNotSamePropertyValue(Object1, Object1, 'property')).toBe(false)
    })
    test('Should return false if prop is undefined ', () => {
        expect(hasNotSamePropertyValue(Object1, Object1, null)).toBe(false)
    })
})
