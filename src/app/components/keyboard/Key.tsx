import React from "react";
import styled, { css } from "styled-components";

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

/**
 * props
 */
type Props = {
  /** 印字する文字 */
  keyTop: string;
}

/**
 * keydown イベントを作成します。
 * @param keyTop キーに印字する文字
 * @returns keydown イベント
 */
function toKeyDownEvent(keyTop: string) {
  let key: string;
  if (keyTop === 'ENTER') {
    key = 'Enter';
  } else if (keyTop === 'Del') {
    key = 'Delete';
  } else {
    key = keyTop;
  }

  return new KeyboardEvent('keydown', { key });
}

/**
 * キーボードのキー
 * 
 * クリックされたときにそのキーの KeyboardEvent を発火します。
 * ２文字以上のキーはキー幅が大きくなります。
 * @param props
 * @returns キーボードのキーコンポーネント
 */
export default function Key({ keyTop }: Props) {
  const keydownEvent = toKeyDownEvent(keyTop);

  return (
    <Container
      large={keyTop.length > 1} // 複数文字は特殊キーとする
      onClick={() => document.dispatchEvent(keydownEvent)}
    >
      {keyTop}
    </Container>
  );
}