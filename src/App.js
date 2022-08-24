import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {  
    const activity = [
      {
        "id": 1,
        "description": "activity"
      }
    ]
  return (
    <div className="App">
      <header className="App-header">
      <ul>
        <li>{activity[0].id} {activity[0].description}</li>
        <li onClick ={()=> console.log('working')}>Second Activity</li>
        <li>Third Activity</li>
        <li>Fourth Activity</li>
      </ul>
      </header>
    </div>
  );
}

export default App;
