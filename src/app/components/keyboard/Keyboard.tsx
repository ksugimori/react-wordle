import React from "react";
import Key from "./Key";
import styled from "styled-components";

// キーボードの並び
const keys = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Del']
]

const Row = styled.div`
  display: flex;
  justify-content: center;
`

export default function Keyboard() {
  const rows = keys.map(row => row.map(c => (
    <Key key={c} keyTop={c} />
  )));

  return (
    <>
      <Row>{rows[0]}</Row>
      <Row>{rows[1]}</Row>
      <Row>{rows[2]}</Row>
    </>
  );
}