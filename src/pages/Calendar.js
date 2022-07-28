import React from "react";
import CalendarDays from "../components/CalendarDays";
import ItemSection from "../components/ItemSection";
import styled from "styled-components";

const Container = styled.div`
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Calendar = (props) => {
  return (
    <Container>
      <CalendarDays
        dates={props.dates}
        setDateSelected={props.setDateSelected}
        getItems={props.getItems}
        dateSelected={props.dateSelected}
      />
      <ItemSection
        items={props.items}
        dates={props.dates}
        getItems={props.getItems}
        dateSelected={props.dateSelected}
      />
    </Container>
  );
};

export default Calendar;
