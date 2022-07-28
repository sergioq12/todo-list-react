import React, { useState } from "react";
import styled from "styled-components";
import Item from "./Item";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";

const Container = styled.div`
  width: 65%;
  height: 65vh;
  margin-top: 25px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const AddItemButton = styled.button`
  width: 120px;
  align-self: center;
  margin-top: 40px;
  padding: 10px 20px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  &:hover {
    border: 1px solid #c7c7c7;
  }
`;

const ItemSection = (props) => {
  const [items, setItems] = useState(props.items);
  console.log("Before Uptade");
  const toggle = async (id, description, done) => {
    console.log("Updating item with id:", id, description, done);
    const res = await axios.put(`http://localhost:5000/api/items/${id}`, {
      description: description,
      done: done.toString(),
    });
    console.log("After Update", res);
    const date = props.dateSelected;
    await props.getItems(date.getMonth(), date.getDate(), date.getFullYear());
    // console.log("After item retrieval");
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
          dateSelected={props.dateSelected}
          getItems={props.getItems}
        />
      ))}
      <AddItemButton>
        <AddIcon style={{ marginRight: "10px" }} />
        To-Do
      </AddItemButton>
    </Container>
  );
};

export default ItemSection;
