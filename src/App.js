import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./contexts/AppContext";
import { ThemeContext } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { WhatWeDo } from "./pages/What_we_do";
import { AboutUs } from "./pages/About_us";
import { GetInTouch } from "./pages/Get-in_touch";
import { OurWork } from "./pages/Our_Work";
import { allStyles } from "./layout/styles";
import BurgerMenu from "./components/BurgerMenu";

const navLinks = [
  { id: "1", label: "Our work", path: "our-work" },
  { id: "2", label: "About us", path: "about-us" },
  { id: "3", label: "What we do", path: "what-we-do" },
  { id: "4", label: "Get in touch", path: "get-in-touch" },
];

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
`;

function App() {
  const initialAppContext = useContext(AppContext);
  const [currentState, setCurrentState] = useState("start");
  const [userName, setUserName] = useState("Voldemort");
  const [isOnline, setIsOnline] = useState(true);
  const [currentAppContext, setCurrentAppContext] = useState(initialAppContext);

  useEffect(() => {
    console.log(window.outerWidth);
    console.log(window.screen.width);
  }, []);

  useEffect(() => {
    const context = setAppContext();
    setCurrentAppContext((prev) => ({
      ...prev,
      ...context,
    }));
  }, []);

  useEffect(() => {}, [currentState]);

  useEffect(() => {}, [isOnline]);

  function setAppContext() {
    return {
      navLinks,
      user: {
        name: "Voldemort",
      },
    };
  }

  return (
    <AppContext.Provider value={currentAppContext}>
      <ThemeContext.Provider value={allStyles}>
        <PageWrapper id="pageWrapper">
          {window.screen.width > 679 ? (
            <Header />
          ) : (
            <BurgerMenu parentId="pageWrapper" neighborId="main" />
          )}
          <main id="main" style={{ flex: "1 0 auto" }}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/get-in-touch" element={<GetInTouch />} />
            </Routes>
          </main>
          <Footer />
        </PageWrapper>
      </ThemeContext.Provider>
    </AppContext.Provider>
  );
}

export default App;
