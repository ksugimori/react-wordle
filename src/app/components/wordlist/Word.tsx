import React from "react";
import { Color } from "../../App.interface";
import ArrayUtils from "../../utils/ArrayUtils";
import Character from "./Character";

/**
 * Word の props
 */
type Props = {
  value?: string;
}

/**
 * 単語を表すコンポーネント
 * 
 * 最大で５文字まで表示。value がそれより少ない文字数の場合も、枠は常に５文字分作成。
 * @param props  
 * @returns Word
 */
export default function Word({ value }: Props) {
  const chars = ArrayUtils.sequence(5)
    .map(i => value?.charAt(i) || '')
    .map((c, i) => (
      <Character
        key={i}
        value={c}
        color={c.length > 0 ? Color.FILLED : Color.EMPTY}
      />
    ));

  return <div className="flex-row">{chars}</div>;
}