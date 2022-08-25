import {useState} from 'react';
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

    function addBand(e){        //method to add a new band
      e.preventDefault();       // preventing the page reload as a default behaviour of the button

      const band = {
        "id": document.getElementById('id').value,
        "name": document.getElementById('name').value,
      }

      setBands([... bands, {... band}]); //setting the usestate copying the already existing items in 'bands' and addig a new band as a obj
    }
  return (      //JSX starting
    <> 
      <form>
        <input id='id' type='text' placeholder='Band Id'/>
        <input id='name' type='text' placeholder='Band Name'/>
        <button onClick={addBand}>Add Band</button> 
      </form>
      <div className="mt-3">
        <ul className="list-group">
          {bands.map(bnd => (
            <li key={bnd.id} className="list-group-item">
              {bnd.id} - {bnd.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
