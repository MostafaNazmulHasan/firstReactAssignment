import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';
import Header from './Components/Header/Header';
import Player from './Components/Player/Player.js';
import playerData from './Components/Data/Data';
 

function App() {
  const [data, setData] = useState([]);
  useEffect(()=>{
    setData(playerData);
    console.log(playerData);
  },[])
  return (
    <div>
    <Header></Header>
    <Player></Player>
    </div>
  );
}

export default App;
