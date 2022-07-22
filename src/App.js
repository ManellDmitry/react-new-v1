import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Button, Link, IconButton } from "./components/Button";
import styled from "styled-components";
const navLinks = [
  { id: "1", label: "Our work" },
  { id: "2", label: "What we do" },
  { id: "3", label: "About us" },
  { id: "4", label: "Get in touch" },
];
const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;
function App() {
  const handleButtonClick = () => {
    console.log("Click");
  };
  const handleLinkButtonClick = () => {
    console.log("ClickButton");
  };
  return (
    <div className="App">
      <Header links={navLinks} />
      <ButtonsWrapper>
        <Button label="See all works" handleClick={handleButtonClick} />
        <Link label="See in touch" handleClick={handleLinkButtonClick} />
        <IconButton iconId="chevron_right" />
      </ButtonsWrapper>
      <Footer />
    </div>
  );
}
export default App;
