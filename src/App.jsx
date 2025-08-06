import { useState } from "react";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card />
      <Footer />
    </>
  );
}

export default App;
