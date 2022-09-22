import logo from './logo.svg';
import React from 'react'
import './App.css';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar"

function App() {

  return (
    <div className="App">  
        <Navbar />
        <ItemListContainer greeting={'Mi ecommerce'}/>
    </div>
  );
}
export default App;