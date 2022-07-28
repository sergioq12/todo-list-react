import React from "react";
import styled from "styled-components";
import Box from "./Box";
import Line from "./Line";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import axios from "axios";

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

const ItemOptions = styled.div`
  flex: 1.5;
  display: flex;
  padding: 5px 10px;
  justify-content: space-around;
`;
const ItemButtonContainer = styled.div``;
const ItemButton = styled.button`
  padding: 8px 15px;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 45px;
  &:hover {
    background-color: #${(props) => (props.color ? props.color : "C7C7C7")};
  }
`;

const Item = (props) => {
  const handleDelete = async () => {
    console.log("Deleteing the item with id: ", props.id);
    const res = await axios.delete(
      `http://localhost:5000/api/items/${props.id}`
    );
    console.log("Item deleted");
    const date = props.dateSelected;
    await props.getItems(date.getMonth(), date.getDate(), date.getFullYear());
    console.log("Items updated");
  };
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
        <ItemOptions>
          <ItemButtonContainer>
            {/* For edit button */}
            <ItemButton color={"5CDA62"}>
              <EditIcon style={{ fontSize: "25px" }} />
            </ItemButton>
          </ItemButtonContainer>
          <ItemButtonContainer>
            {/* For delete button */}
            <ItemButton color={"FF5959"} onClick={handleDelete}>
              <DeleteOutlineOutlinedIcon style={{ fontSize: "25px" }} />
            </ItemButton>
          </ItemButtonContainer>
        </ItemOptions>
      </ItemContainer>
      <Line />
    </Container>
  );
};

export default Item;
