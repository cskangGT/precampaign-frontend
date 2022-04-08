import React, { useState } from "react";

function App() {
  const [click, setClick] = useState("");
  const clickButton = () => {
    setClick("click");
  };

  return (
    <>
      <p>Hello, World!!!!!</p>
      <button onClick={clickButton}>button</button>
      {click}
    </>
  );
}

export default App;
