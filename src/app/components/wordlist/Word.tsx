import React from "react";
import styled from "styled-components";

/**
 * １つの文字
 */
const Char = styled.div<{ empty: boolean }>`
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 2em;
  font-weight: bold;
  margin: 0.1em;
  border: 2px solid ${props => props.empty ? '#ccc' : '#000'}
`;

/**
 * Word の props
 */
type Props = {
  value: string;
}

/**
 * 単語を表すコンポーネント
 * 
 * 最大で５文字まで表示。value がそれより少ない文字数の場合も、枠は常に５文字分作成。
 * @param props  
 * @returns Word
 */
export default function Word({ value }: Props) {
  const chars = Array(5).fill('')
    .map((_, i) => value.charAt(i).toUpperCase())
    .map((c, i) => <Char key={i} empty={!c}>{c}</Char>);

  return <div className="flex-row">{chars}</div>;
}