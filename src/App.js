import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import BandForm from "./Components/BandForm";
import BandList from "./Components/BandList";

let initialState = [
  //setting the initialstate of the items usestate array
  {
    id: 1,
    genre: "1",
    song: "Starway to Heaven",
    name: "Led Zepellin",
  },
  {
    id: 2,
    genre: "2",
    song: "Contexto",
    name: "PlanetHemp",
  },
  {
    id: 3,
    genre: "3",
    song: "Arabella",
    name: "Arctic Monkeys",
  },
];

function App() {
  const [bands, setBands] = useState(initialState); //creating useState to be able to change the content inside of it by using 'setBands'

  function addBand(e) {
    //method to add a new band
    e.preventDefault(); // preventing the page reload as a default behaviour of the button

    const band = {
      id: document.getElementById("id").value,
      genre: document.getElementById("genre").value,
      song: document.getElementById("song").value,
      name: document.getElementById("name").value,
    };

    setBands([...bands, { ...band }]); //setting the usestate copying the already existing items in 'bands' and addig a new band as a obj
  }

  function deleteBand(id) {
    //function to delete band, by overwriting with the bands that have not the selected id
    const filterBands = bands.filter((band) => band.id !== id);
    setBands([...filterBands]);
  }

  return (
    //JSX starting
    <>
      <BandForm addBand={addBand} bands={bands} />
      <BandList bands={bands} deleteBand={deleteBand} />
    </>
  );
}

export default App;
