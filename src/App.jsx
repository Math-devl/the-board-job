import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Job from "./components/Job";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1>The Job Board</h1>
      </header>
      <main>
        <div className="container">
          <Job
            className="blue"
            title="Full Time Sales Associate - Sydney Boutique"
            contractType="CDI"
            country="Australie"
            city="Sydney"
          />

          <div classname="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </main>
      <footer>
        <p>Made with React at Le Reacteur By Mat</p>
      </footer>
    </>
  );
}

export default App;
