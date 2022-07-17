import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import styled from "styled-components";
import CalendarDays from "./components/CalendarDays";
import ItemSection from "./components/ItemSection";
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

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
  return (
    <Container>
      <NavContainer>
        <ListAltOutlinedIcon
          style={{ marginTop: "15px", marginRight: "30px", fontSize: "50px" }}
        />
        <Title>Todo List</Title>
      </NavContainer>
      <CalendarDays />
      <ItemSection />
    </Container>
  );
}

export default App;
