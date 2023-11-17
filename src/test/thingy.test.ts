import Thingy from '@/main/thing/thingy.js';

describe('when do the thing', () => {

  test('given value is negative, then throws error', () => {
    expect(() => Thingy.doTheThing(-1))
      .toThrow(Error);
  });

  test('given value is positive, then returns stuff and things', () => {
    const result = Thingy.doTheThing(5);

    expect(result).toBe('Stuff and things');
  });
});
