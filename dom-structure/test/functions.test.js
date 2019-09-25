import { sum, hasNotSamePropertyValue, hexToRgb, RGBtoString } from '../src/utils/functions';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

describe('Test hasNotSamePropertyValue', () => {
    beforeEach(() => {
        // do something
    });
    beforeAll(() => {
        // do something
    });
    const Object1 = {
        property: 'one'
    };
    const Object2 = {
        property: 'two'
    };
    test('Should return error if default object and current object have same prop value ', () => {
        expect(hasNotSamePropertyValue(null, null, 'property')).toBe(false);
    });
    test('Should return true if default object and current object have same prop value ', () => {
        expect(hasNotSamePropertyValue(Object1, Object2, 'property')).toBe(true);
    });
    test('Should return false if default object and current object have same prop value ', () => {
        expect(hasNotSamePropertyValue(Object1, Object1, 'property')).toBe(false);
    });
    test('Should return false if prop is undefined ', () => {
        expect(hasNotSamePropertyValue(Object1, Object1, null)).toBe(false);
    });
});

describe('Test hexToRgb', () => {
    const yellowHex = '#FFCC00';
    const yellowRGB = {
        r: 255,
        g: 204,
        b: 0
    };

    test('Should return null if argument is undefined', () => {
        expect(hexToRgb()).toBe(false);
    });

    test('Should return null if argument not corresponding to valid HEX', () => {
        expect(hexToRgb('#jtuju')).toBe(null);
    });
    test('Should return yellow RGB if argument is yellow HEX', () => {
        expect(hexToRgb(yellowHex)).toEqual(yellowRGB);
    });
});

describe('Test RBGtoString', () => {
    const yellowRGB = {
        r: 255,
        g: 204,
        b: 0
    };
    const yellowString = '(255,204,0)';

    test('Should return null if argument is undefined', () => {
        expect(RGBtoString()).toBe(false);
    });

    test('Should return yellow RGB object to RGB string formated (R, G, B)', () => {
        expect(RGBtoString(yellowRGB)).toEqual(yellowString);
    });
});
