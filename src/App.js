import React, {useState} from 'react';
import Data from './components/Data';
import List from './components/List';
import './App.css';

function App() {
  const [info, setInfo] = useState([]);

  return (
    <div className="container">
      <Data info={info} setInfo={setInfo}/>
      {info.map((task, i) => (
        <List task={task} setInfo={setInfo} index={i} info={info}/>
        ))}
      
    </div>
  );
}

export default App;
