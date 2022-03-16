import React from "react";
import Key from "./Key";

/**
 * キーボードの１行
 * @param props キーの文字の配列
 * @returns １行分のキー
 */
function KeyboardRow({ keys }: { keys: string[] }) {
  return (
    <div className="flex-row justify-content-center">
      {keys.map(e => <Key key={e} keyTop={e} />)}
    </div>
  );
}

/**
 * キーボード
 * @returns キーボードコンポーネント
 */
export default function Keyboard() {
  return (
    <>
      <KeyboardRow keys={['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']} />
      <KeyboardRow keys={['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']} />
      <KeyboardRow keys={['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Del']} />
    </>
  );
}