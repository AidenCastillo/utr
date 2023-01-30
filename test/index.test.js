import utr from '../src/index.js'
import { convertToScore } from '../src/index.js';

test('UTR class', () => {
    expect(utr).toBeDefined();
});

test('convertToScore function', () => {
    expect(convertToScore).toBeDefined();
});