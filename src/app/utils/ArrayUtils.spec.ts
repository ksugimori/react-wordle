import ArrayUtils from "./ArrayUtils";

describe('ArrayUtils', () => {
  describe('#sequence', () => {
    test('n=3 なら [0, 1, 2] が返ること', () => {
      const actual = ArrayUtils.sequence(3);

      expect(actual).toStrictEqual([0, 1, 2]);
    });

    test('n=0 なら空配列が返ること', () => {
      const actual = ArrayUtils.sequence(0);

      expect(actual).toStrictEqual([]);
    });
  });
});