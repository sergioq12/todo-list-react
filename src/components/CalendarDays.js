import React, { useState } from "react";
import styled from "styled-components";
import { calendarData } from "../data";
import CalendarBox from "./CalendarBox";

const Container = styled.div`
  display: flex;
  margin-top: 30px;
  height: 100px;
  width: 80%;
  justify-content: space-around;
  padding: 10px;
`;

const CalendarDays = () => {
  const [data, setData] = useState(calendarData);
  const boxes = data.map((day) => (
    <CalendarBox
      key={day.id}
      day={day.day}
      dayNum={day.date.day}
      color={day.color}
    />
  ));
  return <Container>{boxes}</Container>;
};

export default CalendarDays;
