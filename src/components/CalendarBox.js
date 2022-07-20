import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};
`;

const DayTitle = styled.span`
  text-align: center;
`;
const DayNumber = styled.span`
  text-align: center;
`;

const CalendarBox = (props) => {
  const handleClick = () => {
    console.log(props.day);
  };
  return (
    <Container backgroundColor={props.color} onClick={handleClick}>
      <DayTitle>{props.day}</DayTitle>
      <DayNumber>{props.dayNum}</DayNumber>
    </Container>
  );
};

export default CalendarBox;
