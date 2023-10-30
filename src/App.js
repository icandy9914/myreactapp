import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import { useState } from 'react';


function App() {
  let [mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#212529';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='#fff';
    }
  }
  return (
    <>
    
<Navbar title="Hi Ganesh" aboutTxt="Vishwakrama" mode={mode} toggleMode={toggleMode}/>
{/* <About/> */}
<TextForms headingTxt="Write your notes here" mode={mode}/>

</>
  );
}

export default App;
