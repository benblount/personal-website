import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Info from "./components/Profile";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

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
