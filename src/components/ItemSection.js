import React, { useState } from "react";
import styled from "styled-components";
import Item from "./Item";
import axios from "axios";

const Container = styled.div`
  width: 55%;
  height: 65vh;
  margin-top: 25px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
`;

const ItemSection = (props) => {
  const [items, setItems] = useState(props.items);
  const toggle = async (id, description, done) => {
    console.log("Updating item with id:", id, description, done);
    const res = await axios.put(`http://localhost:5000/api/items/${id}`, {
      description: description,
      done: done,
    });
  };

  return (
    <Container>
      {props.items.map((item) => (
        <Item
          key={item._id}
          id={item._id}
          description={item.description}
          toggle={toggle}
          done={item.done}
        />
      ))}
    </Container>
  );
};

export default ItemSection;
