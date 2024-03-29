import React, { useState } from "react";
import styled from "styled-components";
import { calendarData } from "../data";
import CalendarBox from "./CalendarBox";

const Container = styled.div`
  display: flex;
  height: 100px;
  width: 80%;
  justify-content: space-around;
  padding: 10px;
`;

const CalendarDays = (props) => {
  const [data, setData] = useState(calendarData);
  const boxes = props.dates.map((date) => (
    <CalendarBox
      key={date.fullDate}
      fullDate={date.fullDate}
      day={date.dayName}
      month={date.month}
      year={date.year}
      dayNum={date.day}
      color={date.color}
      getItems={props.getItems}
      dateSelected={props.dateSelected}
      setDateSelected={props.setDateSelected}
    />
  ));
  return <Container>{boxes}</Container>;
};

export default CalendarDays;
