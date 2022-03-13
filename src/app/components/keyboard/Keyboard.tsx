import React from "react";
import Key from "./Key";

// キーボードの並び
const KEY_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Del']
]

function KeyboardRow({ keys }: { keys: string[] }) {
  return (
    <div className="flex-row justify-content-center">
      {keys.map(e => <Key key={e} keyTop={e} />)}
    </div>
  );
}

export default function Keyboard() {
  return (
    <>
      <KeyboardRow keys={KEY_ROWS[0]} />
      <KeyboardRow keys={KEY_ROWS[1]} />
      <KeyboardRow keys={KEY_ROWS[2]} />
    </>
  );
}