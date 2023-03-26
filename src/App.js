import React, { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import PageLayout from "./components/PageLayout";
import Home1 from "./components/Home1";
import Home2 from "./components/Home2";
import Home3 from "./components/Home3";

function App() {
  const [curPg, setcurPg] = useState(2);

  return (
    <div>
      <PageLayout curPg={curPg} setPg={setcurPg}>
        {curPg === 0 && <Home1 />}
        {curPg === 1 && <Home2 />}
        {curPg === 2 && <Home3 />}
        {/* {curPg == 1 && <Home2 />}
        {curPg == 1 && <Home2 />}
        {curPg == 1 && <Home2 />} */}
      </PageLayout>
      <Background />
    </div>
  );
}

export default App;
