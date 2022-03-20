import React from "react";
import { selectAnswer } from "../../../features/game/gameSlice";
import { Color } from "../../App.interface";
import { useAppSelector } from "../../hooks";
import Character from "./Character";

/**
 * Word の props
 */
type Props = {
  value: string;
}

/**
 * 確定した単語を表すコンポーネント
 * 
 * 正解との比較を行い色分けします。
 * @param props  
 * @returns Word
 */
export default function FixedWord({ value }: Props) {
  const answer = useAppSelector(selectAnswer);

  // TODO: color と inverseColor だけの差なので、Word コンポーネントと共通化したい
  const chars = value.split('')
    .map((c, i) => {
      let color: Color;
      if (c === answer[i]) {
        color = Color.EXACT;
      } else if (answer.includes(c)) {
        color = Color.OTHER;
      } else {
        color = Color.FILLED;
      }

      return <Character
        key={i}
        value={c}
        color={color}
        inverseColor
      />;
    });

  return <div className="flex-row">{chars}</div>;
}