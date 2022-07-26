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
  const getItems = async (month, day, year) => {
    try {
      // put the date in correct request format
      const today = `${props.month}-${props.dayNum}-${props.year}`;
      // get tomorrow's date in the correct format
      let tomorrow = new Date(props.year, props.month, props.dayNum);
      tomorrow = new Date(tomorrow.setDate(tomorrow.getDate() + 1));
      tomorrow = `${tomorrow.getMonth()}-${tomorrow.getDate()}-${tomorrow.getFullYear()}`;

      // Axios Get Request
      const res = await axios.get("http://localhost:5000/api/items/find", {
        params: { today: today, tomorrow: tomorrow },
      });
      setItems(res.data);
      props.setItems((prevItems) => res.data);
    } catch (err) {}
  };
  const handleClick = () => {
    getItems();
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
