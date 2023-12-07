//App.js
import './App.css';
import Palette from './components/Palette';
import { init,subscribe } from './socketApi.js';
import { useEffect, useState } from 'react';

function App() { 
  const [activeColor,setActiveColor] = useState("#282c34");
  useEffect(() => {
    init(); // Bağlantıyı başlat


    subscribe((color)=>{
      setActiveColor(color);
    }); // Olayları dinlemeye başla
}, []);

  return (
    <div className="App" style={{backgroundColor:activeColor}}>
     <Palette activeColor={activeColor}></Palette>
    </div>
  );
}

export default App;
