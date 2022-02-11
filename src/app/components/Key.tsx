import React from "react";
import styled, { css } from "styled-components";

type Props = {
  /** 印字する文字 */
  character: string;
}

const Border = styled.div`
  margin: 0.2em;
  width: 3em;
  height: 3.4em;
  line-height: 3.4em;
  font-weight: bold;
  border-radius: 0.3em;
  background-color: #f3f3f3;

  ${(props: { large: boolean }) => props.large && css`
    width: 4.9em;
  `}
`;

export default function Key({ character }: Props) {
  const isLarge = character.length > 1; // 複数文字は特殊キーとする
  const text = isLarge ? character : character.toUpperCase();

  return (
    <Border large={isLarge}>{text}</Border>
  );
}