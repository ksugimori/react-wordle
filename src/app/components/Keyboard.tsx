import React from "react";
import Key from "./Key";
import styled from "styled-components";
import { useAppDispatch } from "../hooks";
import { inputCharacter, deleteCharacter, submitWord } from "../../features/game/gameSlice";

// キーボードの並び
const keys = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['ENTER', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Del']
]

const Row = styled.div`
  display: flex;
  justify-content: center;
`

export default function Keyboard() {
  const dispatch = useAppDispatch();

  const rows = keys.map(row => row.map(c => (
    <Key key={c} character={c} onClick={() => {
      if (c === 'ENTER') {
        return dispatch(submitWord());
      } else if (c === 'Del') {
        return dispatch(deleteCharacter());
      } else {
        return dispatch(inputCharacter(c));
      }
    }} />
  )));

  return (
    <>
      <Row>{rows[0]}</Row>
      <Row>{rows[1]}</Row>
      <Row>{rows[2]}</Row>
    </>
  );
}