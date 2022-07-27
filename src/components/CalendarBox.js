import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const OuterContainer = styled.div`
  height: 110px;
  width: 100px;
  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
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

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid black;
  align-self: center;
`;

const CalendarBox = (props) => {
  const [items, setItems] = useState();
  const [isSelected, setIsSelected] = useState(props.selected);
  const handleClick = () => {
    props.getItems(props.month, props.dayNum, props.year);
    const date = new Date(props.year, props.month, props.dayNum);
    props.setDateSelected(date);
    setIsSelected(true);
  };
  return (
    <OuterContainer>
      <InnerContainer backgroundColor={props.color} onClick={handleClick}>
        <DayTitle>{props.day}</DayTitle>
        <DayNumber>{props.dayNum}</DayNumber>
      </InnerContainer>
      {isSelected && <Triangle />}
    </OuterContainer>
  );
};

export default CalendarBox;
