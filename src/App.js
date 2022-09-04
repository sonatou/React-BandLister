import { useState, useEffect } from "react";
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
  const [band, setBand] = useState({id: 0});
  const [index, setIndex] = useState(0)

  useEffect(() => {
      bands.length <= 0 ? setIndex(1) : setIndex( Math.max.apply(Math, bands.map((item) => item.id)) + 1)
  }, [bands])

  function addBand(bnd) {
    //method to add a new band
    setBands([...bands, 
      { ...bnd, id: index }]); //setting the usestate copying the already existing items in 'bands' and addig a new band as a obj
  }

  function cancelBand() {
    setBand({ id: 0 });
  }

  function editBand(bnd) {
    setBands(bands.map((item) => item.id === bnd.id ? bnd : item));
    setBand({ id: 0 });
  }

  function deleteBand(id) {
    //function to delete band, by overwriting with the bands that have not the selected id
    const filterBands = bands.filter((band) => band.id !== id);
    setBands([...filterBands]);
  }

  function getBand(id) {
    const selectBand = bands.filter((band) => band.id === id);
    setBand(selectBand[0]);
  }

  return (
    //JSX starting
    <>
      <BandForm
        addBand={addBand}
        bands={bands}
        selectedBand={band}
        editBand={editBand}
        cancelBand={cancelBand}
      />
      <BandList bands={bands} deleteBand={deleteBand} getBand={getBand} />
    </>
  );
}

export default App;
