import React from "react";
import styled, { css } from "styled-components";

type Props = {
  /** 印字する文字 */
  keyTop: string;
}

const Container = styled.div`
  margin: 0.2em;
  width: 3em;
  height: 3.4em;
  line-height: 3.4em;
  font-weight: bold;
  border-radius: 0.3em;
  background-color: #f3f3f3;

  &:hover {
    background-color: #dfdfdf;
  }

  ${(props: { large: boolean }) => props.large && css`
    width: 4.9em;
  `}
`;

export default function Key({ keyTop }: Props) {
  const isLarge = keyTop.length > 1; // 複数文字は特殊キーとする

  const handleClick = () => {
    let key;
    if (keyTop === 'ENTER') {
      key = 'Enter';
    } else if (keyTop === 'Del') {
      key = 'Delete';
    } else {
      key = keyTop;
    }
    const event = new KeyboardEvent('keydown', { key });
    document.dispatchEvent(event);
  }

  return <Container large={isLarge} onClick={handleClick}>{keyTop}</Container>;
}