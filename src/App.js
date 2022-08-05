import React, { useState } from "react";
import styled from "styled-components";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import CalendarDays from "./components/CalendarDays";
import ItemSection from "./components/ItemSection";
import { colors, days, months } from "./data";
import axios from "axios";
import Calendar from "./pages/Calendar";
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
  const [items, setItems] = useState([]);
  const getItems = async (month, day, year) => {
    try {
      // put the date in correct request format
      const today = `${month}-${day}-${year}`;
      // get tomorrow's date in the correct format
      let tomorrow = new Date(year, month, day);
      tomorrow = new Date(tomorrow.setDate(tomorrow.getDate() + 1));
      tomorrow = `${tomorrow.getMonth()}-${tomorrow.getDate()}-${tomorrow.getFullYear()}`;

      // Axios Get Request
      const res = await axios.get("http://localhost:5000/api/items/find", {
        params: { today: today, tomorrow: tomorrow },
      });
      setItems((prevItems) => res.data);
    } catch (err) {}
  };

  const [dates, setDates] = useState(getDates());
  const today = new Date();
  const [dateSelected, setDateSelected] = useState(
    new Date(today.getFullYear(), today.getMonth(), today.getDate())
  );
  const changeSelectedDate = (date) => {
    setDateSelected(date);
  };
  return (
    <Container>
      <NavContainer>
        <ListAltOutlinedIcon
          style={{ marginTop: "15px", marginRight: "30px", fontSize: "50px" }}
        />
        <Title>Todo List</Title>
      </NavContainer>

      <Calendar
        dates={dates}
        setDateSelected={changeSelectedDate}
        getItems={getItems}
        items={items}
        dateSelected={dateSelected}
      />
    </Container>
  );
}

export default App;
