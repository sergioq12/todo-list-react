import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid black;
  background-color: ${(props) => (props.checked ? "black" : "transparent")};
`;

const Box = (props) => {
  return (
    <Container
      checked={props.item.checked}
      onClick={() => props.toggle(props.item.id)}
    ></Container>
  );
};

export default Box;
