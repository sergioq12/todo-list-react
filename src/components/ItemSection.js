import React, { useState } from "react";
import styled from "styled-components";
import Item from "./Item";
import { itemData } from "../data";

const Container = styled.div`
  width: 55%;
  height: 65vh;
  margin-top: 25px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
`;

const ItemSection = () => {
  const [data, setData] = useState(itemData);

  function toggle(id) {
    setData((prevState) => {
      return prevState.map((item) => {
        return item.id === id ? { ...item, checked: !item.checked } : item;
      });
    });
  }
  const items = data.map((item) => (
    <Item key={item.id} item={item} toggle={toggle} />
  ));

  return <Container>{items}</Container>;
};

export default ItemSection;
