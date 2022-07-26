import Header from "./components/Header";
import Footer from "./components/Footer";

import { Icon } from "./components/Icon";
import styled from "styled-components";
import About from "./pages/About";
import GetInTouch from "./pages/GetInTouch";
import Home from "./pages/Home";
import OurWork from "./pages/OurWork";
import WhatWeDo from "./pages/WhatWeDo";
import { Routes, Route } from "react-router-dom";
import img1 from "./images/contentImages/img1.png";
import img2 from "./images/contentImages/img2.png";
import img3 from "./images/contentImages/img3.png";
import img4 from "./images/contentImages/img4.png";
import img5 from "./images/contentImages/img5.png";
import img6 from "./images/contentImages/img6.png";

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
`;

const navLinks = [
  { id: "1", label: "Our work", path: "our-work" },
  { id: "2", label: "About us", path: "about-us" },
  { id: "3", label: "What we do", path: "what-we-do" },
  { id: "4", label: "Get in touch", path: "get-in-touch" },
];

const recentWorks = [
  {
    id: "1",
    image: img1,
    label: "Rockfront Wine",
    works: [
      {
        id: "1.1",
        label: "Packaging",
      },
      {
        id: "1.2",
        label: "Digital Content",
      },
      {
        id: "1.3",
        label: "Website",
      },
    ],
  },
  {
    id: "2",
    image: img2,
    label: "Better Coffee Co",
    works: [
      {
        id: "2.1",
        label: "Art Direction",
      },
      {
        id: "2.2",
        label: "Packaging",
      },
      {
        id: "2.3",
        label: "Illustration",
      },
    ],
  },
  {
    id: "3",
    image: img3,
    label: "Miami Gin",
    works: [
      {
        id: "3.1",
        label: "Website",
      },
      {
        id: "3.2",
        label: "Illustration",
      },
      {
        id: "3.3",
        label: "Art Direction",
      },
    ],
  },
  {
    id: "4",
    image: img4,
    label: "Lumin Skincare",
    works: [
      {
        id: "4.1",
        label: "Website",
      },
      {
        id: "4.2",
        label: "Visual Identity",
      },
      {
        id: "4.3",
        label: "Packaging",
      },
      {
        id: "4.4",
        label: "Illustration",
      },
    ],
  },
  {
    id: "5",
    image: img5,
    label: "Batch Gummies",
    works: [
      {
        id: "5.1",
        label: "Illustration",
      },
      {
        id: "5.2",
        label: "Visual Identity",
      },
    ],
  },
  {
    id: "6",
    image: img6,
    label: "Good Skin Club",
    works: [
      {
        id: "6.1",
        label: "Packaging",
      },
      {
        id: "6.2",
        label: "Art Direction",
      },
      {
        id: "6.3",
        label: "Digital Content",
      },
      {
        id: "6.4",
        label: "Illustration",
      },
    ],
  },
];

const ButtonsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

function App() {
  const handleLinkButtonClick = () => {
    console.log("click on LINK");
  };
  return (
    <StyledWrapper>
      <Header x={navLinks} />
      <main style={{ flex: "1 0 auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="our-work" element={<OurWork />} />
          <Route path="about-us" element={<About />} />
          <Route path="what-we-do" element={<WhatWeDo data={recentWorks} />} />
          <Route path="get-in-touch" element={<GetInTouch />} />
        </Routes>
      </main>
      <Footer />
    </StyledWrapper>
    // <Icon iconId='search'/>

    // <ButtonsWrapper>
    //   <Button label='see all works' handleClick={handleButtonClick}/>
    //   <Link label='get in touch' handleClick={handleLinkButtonClick}/>
    //   <IconButton iconId='close' label='close'/>
    // </ButtonsWrapper>
  );
}

export default App;
