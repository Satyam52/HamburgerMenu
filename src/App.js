import React, { useState } from "react";
import BackDrop from "./components/BackDrop/BackDrop";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";

function App() {
  const [isOpen, setOpen] = useState(false);
  const SideToggle = () => {
    setOpen(!isOpen);
  };
  const BackDropClick = () => {
    setOpen(false);
  };
  return (
    <div style={{ height: "100%" }}>
      <Toolbar SideToggle={SideToggle} />
      <SideDrawer show={isOpen} />
      {isOpen && (
        <>
          <BackDrop click={BackDropClick} />
        </>
      )}
      <main style={{ marginTop: "64px" }}>
        <p>Hi this is bond ,,,James Bond</p>
      </main>
    </div>
  );
}

export default App;
