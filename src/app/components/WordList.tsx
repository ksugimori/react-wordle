import React from "react";
import Word from "./Word";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function WordList() {
  return (
    <Container>
      <List>
        <Word value="plain"></Word>
        <Word value="order"></Word>
        <Word value="ap"></Word>
        <Word value=""></Word>
        <Word value=""></Word>
        <Word value=""></Word>
      </List>
    </Container>
  );
}