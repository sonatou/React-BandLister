import { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

let initialState = [      //setting the initialstate of the items usestate array
  {
    "id": 1,
    "name": "led zepellin"
  },
  {
    "id": 2,
    "name": "metallica"
  },
];
function App() {
  const [bands, setBands] = useState(initialState)    //creating useState to be able to change the content inside of it by using 'setBands'

  function addBand(e) {        //method to add a new band
    e.preventDefault();       // preventing the page reload as a default behaviour of the button

    const band = {
      "id": document.getElementById('id').value,
      "name": document.getElementById('name').value,
    }

    setBands([...bands, { ...band }]); //setting the usestate copying the already existing items in 'bands' and addig a new band as a obj
  }
  return (      //JSX starting
    <>
      <form className="row g-3">
      <div class="col-md-6">
        <label id='id' className="form-label">Id</label>
        <input id='id' type="text" className="form-control" />
      </div>
      <div class="col-md-6">
        <label id='name' className="form-label">Name</label>
        <input id='name' type="text" className="form-control" />
      </div>
      <hr />
      <div className="col-12">
        <button 
          className="btn btn-outline-secondary"
          onClick={addBand}
        >
            Add Band
        </button>
      </div>
      </form>
      <div className="mt-3">
          {bands.map(bnd => (
          <div key={bnd.id} className="card mb-2 shadow-sm">
              <div className="card-body">
              <p className="card-text">{bnd.id} - {bnd.name}</p>
              </div>
          </div>
          ))}

      </div>
    </>
  );
}

export default App;
