import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(200, 200, 200);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -80px;
`;

const ModalContainer = styled.div`
  width: 700px;
  height: 300px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const TopContainer = styled.div`
  background-color: red;
  display: flex;
  position: relative;
`;
const CloseContainer = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
`;
const MiddleContainer = styled.div`
  margin-top: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 35px;
`;

const FormContainer = styled.div`
  margin-top: 30px;
`;
const SecondaryText = styled.span`
  margin-right: 20px;
  font-size: 20px;
`;
const InputModal = styled.input`
  font-size: 20px;
  width: 450px;
  border: none;
  outline: none;
  border-bottom: 1px solid rgba(200, 200, 200, 0.5);
`;

const Button = styled.button`
  margin-top: 30px;
  font-size: 25px;
  padding: 10px 20px;
  width: 150px;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Modal = (props) => {
  const [description, setDescription] = useState("");

  const handleOnChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCreateItem = async () => {
    // Add item
    const res = await axios.post("http://localhost:5000/api/items", {
      description: description,
      done: false,
    });
    // console.log("added item with:", res.data);
    // Re update items
    const date = props.dateSelected;
    await props.getItems(date.getMonth(), date.getDate(), date.getFullYear());
    // Close modal tab
    props.handleItemAdder();
  };

  return (
    <Container>
      <ModalContainer>
        <TopContainer>
          <CloseContainer onClick={props.handleItemAdder}>
            <CloseIcon />
          </CloseContainer>
        </TopContainer>
        <MiddleContainer>
          <Text>Create an Item</Text>
          <FormContainer>
            <SecondaryText>Item Description: </SecondaryText>
            <InputModal placeholder={"Description"} onChange={handleOnChange} />
          </FormContainer>
          <Button onClick={handleCreateItem}>
            <AddIcon />
            Create
          </Button>
        </MiddleContainer>
      </ModalContainer>
    </Container>
  );
};

export default Modal;
