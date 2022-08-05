import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  background-color: ${(props) => (props.checked ? "black" : "transparent")};
`;

const Box = (props) => {
  const done = props.done ? false : true;
  return (
    <Container
      checked={props.done}
      onClick={() => props.toggle(props.id, props.description, done)}
    ></Container>
  );
};

export default Box;
