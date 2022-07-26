import React, { useState } from "react";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import styled from "styled-components";
import CalendarDays from "./components/CalendarDays";
import ItemSection from "./components/ItemSection";
import { colors, days, months } from "./data";
const mongoose = require("mongoose");

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavContainer = styled.div`
  display: flex;
`;

const Title = styled.h1``;

function App() {
  const getDates = () => {
    let datesArray = [];
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let date = {
        fullDate: `${
          today.getMonth() + 1
        }/${today.getDate()}/${today.getFullYear()}`,
        dayName: days[today.getDay()],
        day: today.getDate(),
        month: today.getMonth(),
        monthName: months[today.getMonth()],
        year: today.getFullYear(),
        color: colors[today.getDay()],
      };
      datesArray.push(date);
      today = new Date(today.setDate(today.getDate() + 1));
    }
    return datesArray;
  };

  const [dates, setDates] = useState(getDates());
  const [items, setItems] = useState([]);
  const [dateSelected, setDateSelected] = useState();

  return (
    <Container>
      <NavContainer>
        <ListAltOutlinedIcon
          style={{ marginTop: "15px", marginRight: "30px", fontSize: "50px" }}
        />
        <Title>Todo List</Title>
      </NavContainer>
      <CalendarDays
        dates={dates}
        setItems={setItems}
        setDateSelected={setDateSelected}
      />
      <ItemSection items={items} />
    </Container>
  );
}

export default App;
