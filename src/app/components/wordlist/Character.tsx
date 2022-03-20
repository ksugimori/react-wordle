import React from "react";
import styled from "styled-components";
import { Color } from "../../App.interface";

const Container = styled.div<{ color: string, isInverse: boolean }>`
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 2em;
  font-weight: bold;
  margin: 0.1em;
  border: 2px solid ${props => props.color};

  color: ${props => props.color};
  background-color: #fff;

  ${props => props.isInverse && `
    color: #fff;
    background-color: ${props.color};
  `}
`;

type Props = {
  /** 表示する文字 */
  value: string;

  /** 色 */
  color: Color;

  /** 色を反転するか？ */
  inverseColor?: boolean;
}

/**
 * 一つの文字を囲むボックス
 * @param param props
 * @returns Character
 */
export default function Character({ value, color, inverseColor: isInverse }: Props) {
  return (
    <Container color={color} isInverse={!!isInverse}>
      {value}
    </Container>
  );
}