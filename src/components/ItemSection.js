import React, { useState } from "react";
import styled from "styled-components";
import Item from "./Item";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import Modal from "./Modal";

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
  cursor: pointer;
  &:hover {
    border: 1px solid #c7c7c7;
  }
`;

const ItemSection = (props) => {
  const [items, setItems] = useState(props.items);
  const toggle = async (id, description, done) => {
    const res = await axios.put(`http://localhost:5000/api/items/${id}`, {
      description: description,
      done: done.toString(),
    });
    const date = props.dateSelected;
    await props.getItems(date.getMonth(), date.getDate(), date.getFullYear());
  };

  const [openAddItem, setOpenAddItem] = useState(false);

  const handleItemAdder = () => {
    setOpenAddItem((prevState) => !prevState);
  };

  return (
    <>
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
        <AddItemButton onClick={handleItemAdder}>
          <AddIcon style={{ marginRight: "10px" }} />
          To-Do
        </AddItemButton>
      </Container>
      {openAddItem && (
        <Modal
          handleItemAdder={handleItemAdder}
          dateSelected={props.dateSelected}
          getItems={props.getItems}
        />
      )}
    </>
  );
};

export default ItemSection;
