import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
const navLinks = [
  { id: "1", label: "Our work" },
  { id: "2", label: "What we do" },
  { id: "3", label: "About us" },
  { id: "4", label: "Get in touch" },
];
function App() {
  return (
    <div className="App">
      <Header links={navLinks} />
      <Footer />
    </div>
  );
}

export default App;
