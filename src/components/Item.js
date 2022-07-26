import React from "react";
import styled from "styled-components";
import Box from "./Box";
import Line from "./Line";

const Container = styled.div`
  padding: 10px;
  height: 50px;
`;

const ItemContainer = styled.div`
  display: flex;
  margin: 10px 0px;
  padding: 0px 20px;
`;

const ItemDescription = styled.span`
  font-size: 20px;
  font-weight: 300;
  margin-top: 10px;
  margin-left: 10px;
  flex: 3;
`;

const Item = (props) => {
  return (
    <Container>
      <ItemContainer>
        <Box
          id={props.id}
          done={props.done}
          description={props.description}
          toggle={props.toggle}
        />
        <ItemDescription>{props.description}</ItemDescription>
      </ItemContainer>
      <Line />
    </Container>
  );
};

export default Item;
