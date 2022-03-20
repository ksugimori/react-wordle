/**
 * 配列に関連する操作のユーティリティ。
 */
const ArrayUtils = {
  /**
   * 整数の連番配列を作成する。
   * @param n 配列の長さ
   * @returns 0 から n-1 までの連番が入った配列
   */
  sequence(n: number): number[] {
    if (n <= 0) {
      return [];
    }

    return Array(n).fill(null).map((_, i) => i);
  }

};

export default ArrayUtils;