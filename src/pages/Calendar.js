import React from "react";
import CalendarDays from "../components/CalendarDays";
import ItemSection from "../components/ItemSection";

const Calendar = (props) => {
  return (
    <div>
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
    </div>
  );
};

export default Calendar;
