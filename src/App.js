import "./App.css";
import TravelSec from "./Components/TravelSec/TravelSec";
import Nav from "./Components/Nav/Nav";
import data from "./data";
import React from "react";
export default function App() {
  const Data = data.map((item) => {
    return <TravelSec key={item.title} item={item} />;
  });

  return (
    <div className="App">
      <Nav />
      {Data}
    </div>
  );
}
