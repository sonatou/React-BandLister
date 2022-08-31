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
      <div className="col-md-6">
        <span class="badge text-bg-dark">
          <label className="form-label">Id</label>
        </span>
        <input id='id' type="text" className="form-control mt-2" />
      </div>
      <div className="col-md-6">
        <span class="badge text-bg-dark">
          <label  className="form-label">Name</label>
        </span>
        <input id='name' type="text" className="form-control mt-2" />
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
                <div className="d-flex justify-content-between">
                  <h5 className="card-title">
                  <span className="badge bg-secondary me-1">{bnd.id}</span>
                   - {bnd.name}
                  </h5>
                  <h6>
                  Estilo:
                  <span className='ms-1 text-black'>
                    <i className="fa-solid fa-compact-disc me-1"></i>
                    Rock
                  </span>
                  </h6>
                </div>
                <p className="card-text"> {bnd.name}</p>
                <div className="d-flex justify-content-end pt-2 m-0">
                  <button className="btn btn-outline-primary me-2">
                    <i className='fas fa-pen me-2'></i>
                    Editar
                  </button>
                  <button className="btn btn-outline-danger">
                    <i className='fas fa-trash me-2'></i>
                    Deletar
                  </button>
                </div>
              </div>
          </div>
          ))}

      </div>
    </>
  );
}

export default App;
