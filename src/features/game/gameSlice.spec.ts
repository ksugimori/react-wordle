import gameReducer, {
  GameState,
  submitWord,
  reset
} from './gameSlice';

describe('game reducer', () => {
  const initialState: GameState = {
    answer: 'along',
    words: ['first'],
    status: 'play'
  };

  test('初期状態は words が空配列、status が play であること', () => {
    const actual = gameReducer(undefined, { type: 'unknown' });

    expect(actual.answer.length).toBe(5); // 正解はランダムなので5文字であれば良しとする
    expect(actual.words).toStrictEqual([]);
    expect(actual.status).toBe('play');
  });

  //
  // ここから下は各 reducer のテスト
  //

  describe('submitWord', () => {

    test('words に追加されること', () => {
      const actual = gameReducer(initialState, submitWord('other'));
      expect(actual.words).toEqual(['first', 'other']);
    });

    test('5 文字に満たない場合は追加されないこと', () => {
      const actual = gameReducer(initialState, submitWord('some'));
      expect(actual.words).toEqual(['first']);
    });

  })

  describe('reset', () => {

    test('初期状態にリセットされること', () => {
      const actual = gameReducer(initialState, reset());
      expect(actual).toEqual({
        answer: 'along',
        words: [],
        status: 'play'
      })
    })

  })
});
